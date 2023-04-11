import "../styles/header.css"
import logo from "../assets/logo.png"
import burgerImg from "../assets/menu-btn.svg"
import cardIcon from"../assets/icon-cart.svg"
import searchIcon from "../assets/search.png"




const Header = () => {

    return (
        // <div className="logo-brand" id="logo_brand">
        // <img src={logo}  />
        // </div>

        <header>
        <nav className="navbar">
       
            <img src={burgerImg} className="burger-image"/>     
            <img src={logo} alt="logo" className="logo" />
            <div className="container-icons">
            <img src={searchIcon} className="search-image"/>
            <img src={cardIcon} className="cart-image"/>
            </div>
            

            
        </nav>
       </header>
            )
        }

export default Header;