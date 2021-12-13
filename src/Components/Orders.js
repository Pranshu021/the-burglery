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
        fetch('https://jsonkeeper.com/b/PDXB')   // Order URL
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

    const orderDeleteHandler = (orderID) => {
        orderListData.pop(orderListData.find(order => order.id === orderID));
        fetch('https://jsonkeeper.com/b/PDXB' + orderID, {
            method: 'DELETE',
        }).then(() => {
            window.location.reload(true);
            // navigate('/orders')
        })
    }

    const handleModify = (order) => {
        dispatch({type: 'CUSTOM', orderid: order.id})
        navigate('/order/' + order.id + '/modify')
    }


    orderListItems = orderListData.map((order) => {
        return (
            <div className="row order-item-row" key={order.id}>
                <div className="col-sm-6 order-details">
                    <p>
                    Order ID : <b>{order.id} </b><br />
                    Customer Name : <b>{order.customer_name}</b><br />
                    Order : <b>{order.orderName}</b><br />
                    Amount : <b>₹ {order.total_amount + order.addons_amount}</b><br />
                    Time : <b>{order.orderTime}</b><br />
                    Addons : <b>{order.addons.length > 0 ? "" +  order.addons : "None"}</b>
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