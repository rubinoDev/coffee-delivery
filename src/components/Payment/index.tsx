import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useContext } from "react";
import { PaymentContext } from "../../contexts/PaymentContext/PaymentContext";
import { PaymentButton } from "../PaymentButton";
import { PaymentContainer } from "./styles";


export function Payment(){
  const { paymentButtons } = useContext(PaymentContext)

  console.log(paymentButtons)


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
        {paymentButtons.map(button =>(  
          <PaymentButton
            key={button.id}
            isActive= {button.isActive}
            id={button.id}
            title={button.title}
            icon={button.icon}
          />
        ))}
      </div>
  </PaymentContainer>
  )
}