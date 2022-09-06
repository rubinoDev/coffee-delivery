import { ShoppingCart } from "phosphor-react";
import { BuyContainer, CardContainer, LabelsContainer } from "./styles";

interface Coffee{
  id: number;
  title: string;
  description: string;
  label: string[];
  image: string;
  price: string;
}

interface CoffeeCardProps{
  coffee: Coffee;
}

export function CoffeeCard({coffee}: CoffeeCardProps){
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
            <button>
              -
            </button>
            1
            <button>
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