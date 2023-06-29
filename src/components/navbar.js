import "./navbarstyle.css"



function Navbar () {
    return (
        <section>

        <div className="navbar">

            <img className="main-nav-image"  src="images/1.png"/> 
            
            <button className="navbar-button active" > REHOMING</button>
            <button className="navbar-button nav"> REVIEWS </button>
            <button className="navbar-button nav"> COMPETITION </button>
            <button className="navbar-button nav"> CONTACT US </button>
            <button className="navbar-button nav"> ADOPT </button>
            <button className="shopping-cart-button">
                <img className="profile-button" src="images/login logo.png" alt="loginButton"/>

            </button>
            <button className="shopping-cart-button"> 
                <img className="shopping-cart-image"  src="images/shopping.png" alt="shoppingcart"/>
            </button> 
            









        </div>







    </section>
    
    
    
    
    
    
    
    
    
    
        )
}

export default Navbar; 