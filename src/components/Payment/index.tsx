import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { PaymentContainer } from "./styles";


export function Payment(){
  return(
    <PaymentContainer>
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
  </PaymentContainer>
  )
}