import AddonsMenu from './AddonsMenu'
import '../CSS/EditOrder.css'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';


const EditOrder = (props) => {
    const items = ["Cheese", "Grilled", "Spicy", "Coke", "Sprite", "Fanta", "Water", "Packed"];
    const prices = [10, 10, 10, 40, 40, 40, 20, 0];
    const params = useParams();
    let orderSubmit;
    let addOnsCost=0;
    const navigate = useNavigate();
    const order_id = useSelector(state => state.isCustomOrder.orderid);
    const [addOnState, changeAddOnState] = useState({
        Cheese: false,
        Grilled: false,
        Spicy: false,
        Coke: false,
        Sprite: false,
        Fanta: false,
        Water: false,
        Packed: false
    })

    const [orderPlaced, changeOrderState] = useState("nothing");
    const [orderListData, setOrderListData] = useState([]);
    let apiOrderID;
    console.log(order_id)

    useEffect(() => {
        fetch('https://fairestdb.p.rapidapi.com/ordersdb/ordersList/key/' + order_id, {
            headers: {
                'x-rapidapi-host': 'fairestdb.p.rapidapi.com',
                'x-rapidapi-key': '98dbf58e7fmshba5aeeccf52e631p1aa2a6jsn6cbcf04b7f7f'
              }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data)
            setOrderListData(data);
        })
    }, [])


    const HandleCustomOrder = (event) => {
        event.preventDefault();
        console.log("Edit Order")
            fetch('https://fairestdb.p.rapidapi.com/ordersdb/ordersList', {  //Order URL
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'x-rapidapi-host': 'fairestdb.p.rapidapi.com',
                'x-rapidapi-key': '98dbf58e7fmshba5aeeccf52e631p1aa2a6jsn6cbcf04b7f7f'
              },
            body: JSON.stringify({
                _id: orderListData[0]._id,
                addons: addonsList.join(),
                addonsamount: addOnsCost
            })
        }).then((response) => {
            if(response.status == 200) {
                changeOrderState("placed");
                console.log("Order Placed")
            }
            else {
                throw Error("Request Failed. Network Error...")
            }
            setTimeout(() => {
                navigate('/');
            }, 1000);
        })
        
    }

    const addOnSelectionHandler = (event) => {
        const addOnName = event.target.id;
        changeAddOnState({...addOnState, [addOnName]: !addOnState[addOnName]});
    }

    let addonsList = [];
    useEffect(() => {
        addonsList = Object.keys(addOnState).filter(key => addOnState[key]);
        addonsList.forEach(item => {
            addOnsCost += prices[items.indexOf(item)];
        })
    }, [addOnState])


    return (
        <div className="container edit-order-container p-3 mt-3">
            <form className="form-group edit-order-form" onSubmit={HandleCustomOrder}>
                <AddonsMenu menuItems={items} prices={prices} addOnSelectHandler={addOnSelectionHandler}/>
                <button type="submit" className="btn btn-danger btn-block edit-order-button">Submit</button>
                {orderSubmit}
            </form>
            {orderPlaced === "placed" ? <div className="alert alert-success" role="alert" >Order Placed. Redirecting....</div>: orderPlaced === "failed" ? <div className="alert alert-danger" role="alert" >Order Failed. Please Try Again Later...</div> : null}

        </div>
    )
}

export default EditOrder;