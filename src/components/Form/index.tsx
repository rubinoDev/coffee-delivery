import { MapPinLine } from "phosphor-react";
import { FormContainer } from "./styles";


export function Form (){
  return(
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

  )
}