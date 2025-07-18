
import './App.css'
import { MenuItem } from './components/MenuItem'


import { data } from "./data/db"
import type { MenuItemT } from './types'
import useOrder from './hooks/useOrder'
import { OrderContents } from './components/OrderContents'
import { Hero } from './components/Hero'

function App() {

  const { addItem, order, removeItem, tip, setTip, placeOrder } = useOrder()
  return (
    <>
      {/* <header className='bg-blue-950 py-5 text-teal-50'>
        <p>Calculadora de propinas y consumo</p>
      </header> */}
      <Hero />
      <main className='mt-6 max-w-7xl mx-auto grid md:grid-cols-2'>
        <div className='w-3/4'>
          <h2 className='text-black text-4xl'>Menu</h2>
          <div className='space-y-3 mt-6'>
            {data.map((item: MenuItemT) =>
            (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            )
            )}
          </div>
        </div>

        <div className='w-3/4'>

          <OrderContents
            order={order}
            removeItem={removeItem}
            setTip={setTip}
            tip={tip}
            placeOrder={placeOrder}
          />

        </div>


      </main>
    </>
  )
}

export default App
