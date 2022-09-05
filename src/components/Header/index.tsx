import { CartIcon, HeaderContainer, Location } from "./styles";
import Logo from '../../assets/logo-coffee-delivery.svg'
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header(){
  return(
    <HeaderContainer>
      <nav>
        <NavLink to="/">
          <img src={Logo} alt=""/>
        </NavLink>

        <div>
          <Location>
            <NavLink to="/">
              <MapPin 
                size={28} 
                weight="fill"
                color={"hsla(259, 92%, 63%, 1)"}
              />
            </NavLink>
            <strong>Porto Alegre, RS</strong>
          </Location>

          <CartIcon>
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