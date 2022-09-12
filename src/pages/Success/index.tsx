import { DeliveryStatsContainer, SuccessContainer } from "./styles";
import ManOnMotorcycle from '../../assets/Illustration.png'
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import { FormContext } from "../../contexts/FormContext/FormContext";
import { states } from "../../util/statesUf";


export function Success(){
  const { watch } = useContext(FormContext)

  const street = watch('street');
  const number = watch('number');
  const city = watch('city');
  const uf = watch('uf');

  const ufUppercase= uf.toUpperCase()

  const state = states[ufUppercase];

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
              <p>Entrega em <strong>{street}, {number}</strong></p>
              <p>{city} - {state}, {ufUppercase}</p>
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