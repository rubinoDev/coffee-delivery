import { Trash } from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CoffeesApi } from '../../coffeesApi';
import { CartContext } from "../../contexts/CartContext/CartContext";
import { CoffeeSelected, CoffeesSelectedContainer } from "./styles";

export function CoffeesSelected(){
  const { cart } = useContext(CartContext)

  return(
    <CoffeesSelectedContainer>
          {cart.map(coffee => (
            <CoffeeSelected>
            <img src={coffee.image}/>
            <div>
              <p>{coffee.title}</p>
              <div>
                <div>
                  <button>
                    -
                  </button>
                  {coffee.quantity}
                  <button>
                    +
                  </button>
                </div>

                <button>
                  <Trash
                    color="hsla(259, 92%, 63%, 1)"
                    size={20}
                  />
                  Remover
                </button>
              </div>
            </div>

            <strong>R$ {coffee.price}</strong>
          </CoffeeSelected>
          ))}

          <div>
            <p>Total de itens</p>
            <p>R$ 29,70</p>
          </div>

          <div>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </div>

          <div>
            <strong>Total</strong>
            <strong>R$ 33,20</strong>
          </div>

          <NavLink className="confirmRequestLink" to="/success">
            <div>
              Confirmar pedido
            </div>

          </NavLink>

        </CoffeesSelectedContainer>
  )
}