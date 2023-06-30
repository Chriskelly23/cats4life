import "./navbarstyle.css";



const Navbar = () => {
    return (
        <div className="narbar">
            
            <a href="./homepage">
                <button className="navbar-button active">HOME</button>
            </a>
            <a href="/adopt">
                <button classname="navbar-button nav">ADOPT</button>
            </a>
        </div>
    )
}

export default Navbar;