import { CheckoutContainer } from "./styles";
import { Form } from "../../components/Form";
import { Payment } from "../../components/Payment";
import { CoffeesSelected } from "../../components/CoffeesSelected";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";

export function Checkout(){

  return(
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <Form/>
        <Payment/>
      </div>

      <div>
        <h2>Cafés selecionados</h2>
        <CoffeesSelected/>
      </div>
        
      
    </CheckoutContainer>
  )
}