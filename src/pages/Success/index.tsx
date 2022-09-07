import { DeliveryStatsContainer, SuccessContainer } from "./styles";
import ManOnMotorcycle from '../../assets/Illustration.png'
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export function Success(){
  return(
    <SuccessContainer>
      <h2>Uhu! Pedido confirmado</h2>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <div>
        <DeliveryStatsContainer>
          <div>
            <div className="mapPin">
              <MapPin
                size={20}
                weight="fill"
                color="white"
              />
            </div>
            <div>
              <p>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </div>
          <div>
            <div className="timer">
              <Timer
                size={20}
                weight="fill"
                color="white"
              />
            </div>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min </strong>
            </div>
          </div>
          <div>
            <div className="dollar">
              <CurrencyDollar
                size={20}
                weight="fill"
                color="white"
              />
            </div>
            <div>
              <p>Pagamento na entrega</p>
              <strong>Cartão de Crédito</strong>
            </div>
          </div>
        </DeliveryStatsContainer>

        <img src={ManOnMotorcycle} alt=""/>
      </div>
    </SuccessContainer>
  )
}