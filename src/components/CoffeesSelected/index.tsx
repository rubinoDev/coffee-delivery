import { Trash } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { CoffeesApi } from '../../coffeesApi';
import { CoffeeSelected, CoffeesSelectedContainer } from "./styles";

export function CoffeesSelected(){
  return(
    <CoffeesSelectedContainer>
          <CoffeeSelected>
            <img src={CoffeesApi[0].image}/>
            <div>
              <p>Expresso Tradicional</p>
              <div>
                <div>
                  <button>
                    -
                  </button>
                  1
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

            <strong>R$ 9,90</strong>
          </CoffeeSelected>

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