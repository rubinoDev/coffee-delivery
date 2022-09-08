import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { Coffee, ProductsContext } from "../../contexts/ProductsContext/ProductsContext";
import { BuyContainer, CardContainer, LabelsContainer } from "./styles";

interface CoffeeCardProps{
  coffee: Coffee;
}

export function CoffeeCard({coffee}: CoffeeCardProps){
  const { 
    handleAddProductQuantity,
    handleRemoveProductQuantity
  } = useContext(ProductsContext)

  return(
    <CardContainer>
      <img src={coffee.image} alt={coffee.title}/>  

      <LabelsContainer>
        {coffee.label.map(label => (
          <div>
            {label}
          </div>
        ))}
      </LabelsContainer>


      <h4>{coffee.title}</h4>
      <p>{coffee.description}</p>

      <BuyContainer>
        <span>R$ <strong>{coffee.price}</strong></span>

        <div>
          <div>
            <button
              onClick={() => handleRemoveProductQuantity(coffee.id)}
            >
              -
            </button>
            {coffee.quantity}
            <button
              onClick={() => handleAddProductQuantity(coffee.id)}
            >
              +
            </button>
          </div>

            <button>
              <ShoppingCart
                color="white"
                weight="fill"
                size={20}
              />
            </button>
        </div>
        
      </BuyContainer>
    </CardContainer>
  )
}