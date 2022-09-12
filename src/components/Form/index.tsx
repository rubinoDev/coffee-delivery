import { MapPinLine } from "phosphor-react";
import { createContext, useContext } from "react";
import { useForm } from "react-hook-form";
import { FormContext } from "../../contexts/FormContext/FormContext";
import { FormContainer } from "./styles";

interface FormContextProps{
  allInputsWatched: () => void;
}

export function Form (){
  const { register } = useContext(FormContext)

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
        <input 
          className="cep" 
          type="text" 
          placeholder="CEP"
          {...register('cep')}
        />
        <input 
          type="text" 
          placeholder="Rua"
          {...register('street')}
        />
        <div>
          <input 
            type="text" 
            placeholder="Número"
            {...register('number')}
          />
          <div>
            <input 
              className="complemento" 
              type="text" 
              placeholder="Complemento"
              {...register('complement')}
            />
          </div>
        </div>
        <div>
          <input 
            type="text" 
            placeholder="Bairro"
            {...register('district')}
          />
          <input 
            type="text" 
            placeholder="Cidade"
            {...register('city')}
          />
          <input 
            type="text" 
            placeholder="UF"
            {...register('uf')}
          />
        </div>
      </div>
    </form>
  </FormContainer>

  )
}