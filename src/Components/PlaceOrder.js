import '../CSS/PlaceOrder.css'
import { useParams, useLocation } from 'react-router';
import { useState, useEffect }  from 'react';
import useFetchPrice from '../hooks/useFetchPrice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const PlaceOrder = (props) => {
    const {burgerName} = useParams();
    const [submitState, changeSubmitState] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let isCustom = false;
    let burgerPrice;

    const [orderPlaced, changeOrderState] = useState("nothing");

    const [burgerDetails, setBurgerDetails] = useState({
        orderid: Math.floor(Math.random() * 1000000),
        customer_name : null,
        customer_phone : null,
        ordername : burgerName,
        ordertime : null, 
        addons : [],
        total_amount: 0,
        key: ""
    });

    if(location.pathname.includes('/custom')){
        isCustom = true;
    }

    burgerPrice = useFetchPrice('https://api.jsonbin.io/b/61b767380ddbee6f8b1c90f7/1', burgerName); // Burgers url

    const HandleSubmit = (event) => {
        event.preventDefault();
        var today = new Date();
        const dateorderTime = (today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()) +' '+(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
        const customerName = document.getElementById("customer_name").value;
        const quantity = document.getElementById("quantity").value;
        const customerPhone = document.getElementById("customer_phone").value;
        setBurgerDetails({...burgerDetails, ordertime: dateorderTime, customername: customerName, customerphone: customerPhone, totalamount: burgerPrice * quantity, key:burgerDetails.orderid+""});
        changeSubmitState(true);
        document.getElementById("submit-button").disabled = true;
        
    }

    useEffect(() => {
        if(!submitState ){
            console.log("Clicked")
        }
        else {
            // fetch('https://api.jsonbin.io/b/61b788c701558c731cd39fcb/1', {          // Orders URL
            fetch('https://fairestdb.p.rapidapi.com/ordersdb/ordersList', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'x-rapidapi-host': 'fairestdb.p.rapidapi.com',
                'x-rapidapi-key': '98dbf58e7fmshba5aeeccf52e631p1aa2a6jsn6cbcf04b7f7f'
              },
            body: JSON.stringify(burgerDetails),
        }).then((response) => {
            if(location.pathname.includes("/custom")) {
                dispatch({type: 'CUSTOM', orderid: burgerDetails.orderid});
                navigate("/order/edit/" + burgerName);
            }
            else {
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
            }
        }).catch((error) => {
            changeOrderState("failed");
        })}
        
    }, [submitState]);

    return (
        <div className="container form-container">
            <h2>Place Your Order</h2>
            <u><p>{burgerName}</p></u>

            <form className="order-form" onSubmit={HandleSubmit}>
                
                <div className="row inputs">
                    <label className="mb-1">Enter Quantity</label>
                    <input className="placeorder-inputs" required type="number" min="1" max="100" id="quantity"/>   
                </div>

                <div className="row inputs">
                    <label className="mb-1">Name</label>
                    <input className="placeorder-inputs"  required type="text" id="customer_name" placeholder="Your Name..."/>
                </div>
                
                <div className="row inputs">
                    <label className="mb-1">Phone</label>
                    <input className="placeorder-inputs"  required type="text" placeholder="Your Phone Number..." id="customer_phone"/>
                </div>

                <div className="row submit-button-row">
                    <button className="placeorder-inputs"  type="submit" className="btn btn-danger" id="submit-button">Place Order</button>
                </div>  
            </form>

            {orderPlaced === "placed" ? <div className="alert alert-success" role="alert" >Order Placed. Redirecting....</div>: orderPlaced === "failed" ? <div className="alert alert-danger" role="alert" >Order Failed. Please Try Again Later...</div> : null}
            {/* {orderPlaced === "can't place" ? <div className="alert alert-danger" role="alert" >Failed. Network Error....</div> : null} */}

        </div>
    );
}

export default PlaceOrder;