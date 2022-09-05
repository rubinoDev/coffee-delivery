import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import CoffeeBg from '../../assets/coffee-bg.png'
import { Stats } from '../../components/Stats'
import { HomeHeader, HomeHeaderContent } from './styles'

export function Home(){
  return(
    <main>
      <HomeHeader>
        <HomeHeaderContent>
          <header>
            <h2>Encontre o café perfeito para qualquer hora do dia</h2>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </header>

          <Stats/>
        </HomeHeaderContent>

        <img src={CoffeeBg} alt=''/>
      </HomeHeader>

      
    </main>
  )
}