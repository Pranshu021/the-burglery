import { useEffect, useState } from "react";
import '../CSS/Orders.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Orders = (props) => {
    const [orderListData, setOrderListData] = useState([]);
    const [isLoading, setLoadingState] = useState(true);
    const [error, setErrorState] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    var orderListItems;
    useEffect(() => {
        fetch('https://fairestdb.p.rapidapi.com/ordersdb/ordersList', {
            headers: {
                'content-type': 'application/json',
                'x-rapidapi-host': 'fairestdb.p.rapidapi.com',
                'x-rapidapi-key': '98dbf58e7fmshba5aeeccf52e631p1aa2a6jsn6cbcf04b7f7f'
              }
        })   // Order URL
        .then((response) => {
            if(!response.ok) {
                throw Error("Network Error...");
            }
            return response.json()
        }).then(data => {
            setTimeout(() => {
                setOrderListData(data);
                setLoadingState(false);
            }, 300)
            setErrorState(null);
            
        }).
        catch((error) => {
            setLoadingState(false);
            setErrorState(error.message);
        });
    }, []);
    let apiOrder;
    const orderDeleteHandler = (orderID) => {
        apiOrder = orderListData.splice(orderListData.indexOf(orderListData.find(order => order.orderid === orderID)), 1);
        console.log(apiOrder[0]._id);
        fetch('https://fairestdb.p.rapidapi.com/ordersdb/ordersList/_id/' + apiOrder[0]._id, {
            method: 'DELETE',
            headers: {
                'x-rapidapi-host': 'fairestdb.p.rapidapi.com',
                'x-rapidapi-key': '98dbf58e7fmshba5aeeccf52e631p1aa2a6jsn6cbcf04b7f7f'
              },
        }).then(() => {
            window.location.reload(true);
        })
    }

    const handleModify = (order) => {
        dispatch({type: 'CUSTOM', orderid: order.orderid})
        navigate('/order/' + order.orderid + '/modify')
    }


    orderListItems = orderListData.map((order) => {
        return (
            <div className="row order-item-row" key={order.id}>
                <div className="col-sm-6 order-details">
                    <p>
                    Order ID : <b>{order.orderid} </b><br />
                    Customer Name : <b>{order.customername}</b><br />
                    Order : <b>{order.ordername}</b><br />
                    Amount : <b> {order.totalamount + order.addonsamount}</b><br />
                    Time : <b>{order.ordertime}</b><br />
                    Addons : <b>{order.addons.length > 0 ? "" +  order.addons : "None"}</b>
                    {/* Addons : <b>{order.addons}</b> */}
                    </p>
                </div>  
                <div className="col-sm-6 order-control-buttons">
                    <button className="btn btn-outline-danger order-page-buttons" onClick={() => orderDeleteHandler(order.id)}>Delete Order</button>
                    <button className="btn btn-outline-danger order-page-buttons" onClick={() => handleModify(order)}>Edit Order</button>
                </div>
            </div>  
        )
    })


    return (
        <div className="container orders-container">
                {isLoading && <div className="alert alert-warning">Loading ...</div>}
                {error && <div className="alert alert-danger">{error}</div>}
                {orderListData && orderListItems }
        </div>
    )
}

export default Orders;