import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "phosphor-react";
import { CheckoutContainer, CoffeeSelected, CoffeesSelectedContainer, FormContainer, Payment } from "./styles";
import { CoffeesApi } from '../../coffeesApi';
import { NavLink } from "react-router-dom";

export function Checkout(){
  return(
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <FormContainer>
          <form>
            <header>
              <MapPinLine
                color="hsla(36, 79%, 43%, 1)"
                size={25}
              />
              <div>
                <h4>Endereço de Entrega</h4>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </header>

            <div>
              <input className="cep" type="text" placeholder="CEP"/>
              <input type="text" placeholder="Rua"/>
              <div>
                <input type="text" placeholder="Número"/>
                <div>
                  <input className="complemento" type="text" placeholder="Complemento"/>
                </div>
              </div>
              <div>
                <input type="text" placeholder="Bairro"/>
                <input type="text" placeholder="Cidade"/>
                <input type="text" placeholder="UF"/>
              </div>
            </div>
          </form>
        </FormContainer>

        <Payment>
          <header>
            <CurrencyDollar
              color="hsla(259, 92%, 63%, 1)"
              size={25}
            />
            <div>
              <h4>Pagamento</h4>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </header>

          <div>
            <button>
              <CreditCard
                color="hsla(259, 92%, 63%, 1)"
                size={20}
              />
              Cartão de crédito
            </button>

            <button>
              <Bank
                color="hsla(259, 92%, 63%, 1)"
                size={20}
              />
              Cartão de débito
            </button>

            <button>
              <Money
                color="hsla(259, 92%, 63%, 1)"
                size={20}
              />
              Dinheiro
            </button>
          </div>
        </Payment>

      </div>

      <div>
        <h2>Cafés selecionados</h2>
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
      </div>
        
      
    </CheckoutContainer>
  )
}