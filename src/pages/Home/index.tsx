import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import CoffeeBg from '../../assets/coffee-bg.png'
import { HomeHeader, HomeHeaderContent, Stat, StatsContainer } from './styles'

export function Home(){
  return(
    <main>
      <HomeHeader>
        <HomeHeaderContent>
          <header>
            <h2>Encontre o café perfeito para qualquer hora do dia</h2>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </header>

          <StatsContainer>
            <div>
              <Stat>
                <div className='shoppingCart'>
                  <ShoppingCart 
                    color='white'
                    weight='fill'
                    size={18}
                  />
                </div>
                <p>Compra simples e segura</p>
              </Stat>

              <Stat>
                <div className='timer'>
                  <Timer
                    color='white'
                    weight='fill'
                    size={18}
                  />
                </div>
                <p>Entrega rápida e rastreada</p>
              </Stat>
            </div>

            <div>
              <Stat>
                <div className='package'>
                  <Package
                    color='white'
                    weight='fill'
                    size={18}
                  />
                </div>
                <p>Embalagem mantém o café intacto</p>
              </Stat>

              <Stat>
                <div className='coffee'>
                  <Coffee
                    color='white'
                    weight='fill'
                    size={18}
                  />
                </div>
                <p>O café chega fresquinho até você</p>
              </Stat>
            </div>
          </StatsContainer>
        </HomeHeaderContent>

        <img src={CoffeeBg} alt=''/>
      </HomeHeader>

      
    </main>
  )
}