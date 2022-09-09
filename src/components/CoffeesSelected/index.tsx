import { Trash } from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext/CartContext";
import { CoffeeSelected, CoffeesSelectedContainer } from "./styles";

export function CoffeesSelected(){
  const { cart, 
    handleAddProductQuantityInCart,
    handleRemoveProductQuantityInCart,
    handleRemoveProductFromCart
  } = useContext(CartContext)

  return(
    <CoffeesSelectedContainer>
          {cart.map(coffee => (
            <CoffeeSelected>
            <img src={coffee.image}/>
            <div>
              <p>{coffee.title}</p>
              <div>
                <div>
                  <button
                  onClick={()=>handleRemoveProductQuantityInCart(coffee.id) }
                  >
                    -
                  </button>
                  {coffee.quantity}
                  <button
                    onClick={()=>handleAddProductQuantityInCart(coffee.id) }
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={()=>handleRemoveProductFromCart(coffee.id) }
                >
                  <Trash
                    color="hsla(259, 92%, 63%, 1)"
                    size={20}
                  />
                  Remover
                </button>
              </div>
            </div>

            <strong>R$ 9,90</strong>
          </CoffeeSelected>
          ))}

          <div>
            <p>Total de itens</p>
            <p>R$ 33,50</p>
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