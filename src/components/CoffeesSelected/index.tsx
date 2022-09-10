import { Trash } from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext/CartContext";
import { CoffeeSelected, CoffeesSelectedContainer } from "./styles";
import { formatPrice } from '../../util/format';


export function CoffeesSelected(){
  const { cart, 
    handleAddProductQuantityInCart,
    handleRemoveProductQuantityInCart,
    handleRemoveProductFromCart
  } = useContext(CartContext)

  const cartFormatted = cart.map(product=>(
    {
      ...product,
      priceFormatted: formatPrice(product.price),
      subTotal: formatPrice(product.quantity * product.price),
    })
  )

  const total = cartFormatted.reduce((sumTotal, product) => {
    return sumTotal + product.quantity * product.price
  }, 0)
  
  const totalFormatted = formatPrice(total)

  const totalWithDeliveryFeeFormatted = formatPrice(total + 3.50)

  return(
    <CoffeesSelectedContainer>
          {cartFormatted.map(coffee => (
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

            <strong>{coffee.subTotal}</strong>
          </CoffeeSelected>
          ))}

          <div>
            <p>Total de itens</p>
            <p>{totalFormatted}</p>
          </div>

          <div>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </div>

          <div>
            <strong>Total</strong>
            <strong>{totalWithDeliveryFeeFormatted}</strong>
          </div>

          <NavLink className="confirmRequestLink" to="/success">
            <div>
              Confirmar pedido
            </div>

          </NavLink>

        </CoffeesSelectedContainer>
  )
}