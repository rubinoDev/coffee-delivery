import { CartIcon, HeaderContainer, Location } from "./styles";
import Logo from '../../assets/logo-coffee-delivery.svg'
import { MapPin, ShoppingCart } from "phosphor-react";

import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";

export function Header(){
  const { cart } = useContext(CartContext);
  const differentItemsQuantityInCart = cart.length;
  const isCartEmpty = cart.length === 0;

  return(
    <HeaderContainer>
      <nav>
        <NavLink to="/">
          <img src={Logo} alt=""/>
        </NavLink>

        <div>
          <Location>
              <MapPin 
                size={28} 
                weight="fill"
                color={"hsla(259, 92%, 63%, 1)"}
              />
            <strong>Porto Alegre, RS</strong>
          </Location>

          <CartIcon>
            {!isCartEmpty && 
              <div>
                {differentItemsQuantityInCart}
              </div>
            }
            <NavLink to="/checkout">
              <ShoppingCart 
              size={28}
              weight="fill"
              color={"hsla(36, 79%, 43%, 1)"}
              />
            </NavLink>
          </CartIcon>
        </div>
      </nav>
    </HeaderContainer>
  )
}