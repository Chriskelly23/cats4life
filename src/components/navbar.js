import "./navbarstyle.css";
import Trolley from "./images/0-navbar/shoppingcart.png";
import Profile from "./images/0-navbar/loginlogo.png";
import Logo from "./images/00-logos/1.png";




function Navbar () {
    return (
        <section>

        <div className="navbar">

                <img className="main-nav-image" src={Logo} /> 
            
            <button className="navbar-button active" > REHOMING</button>
            <button className="navbar-button nav"> REVIEWS </button>
            <button className="navbar-button nav"> COMPETITION </button>
            <button className="navbar-button nav"> CONTACT US </button>
            <button className="navbar-button nav"> ADOPT </button>
            <button className="shopping-cart-button">
                    <img className="profile-button" src={Profile} alt="loginButton" />
                    

            </button>
            <button className="shopping-cart-button"> 
                <img className="shopping-cart-image"  src="images/shopping.png" alt="shoppingcart"/>

                    {/* <Basket />  */}
            </button> 
            









        </div>







    </section>
    
    
    
    
    
    
    
    
    
    
        )
}

export default Navbar; 