import '../CSS/MenuCards.css'


const MenuCards = (props) => {

    return (
        <div className="menu-cards flip-card-front">
            <img className="burger_image" src={process.env.PUBLIC_URL + '/img/' + props.burgerName + '.jpg'} width="150px" height="150px" alt={props.burgerName + " image"}/>
            <p className="burger_name">{props.burgerName}</p>
            <p className="burger_price">{props.burgerPrice}</p>
        </div>
    )
};

export default MenuCards;