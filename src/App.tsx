
import './App.css'
import { MenuItem } from './components/MenuItem'
import { OrderItem } from './components/OrderItem'

import { data } from "./data/db"
import type { MenuItemT, OrderItemT } from './types'
import useOrder from './hooks/useOrder'
import { OrderContents } from './components/OrderContents'

function App() {

  const { addItem, order, removeItem } = useOrder()
  return (
    <>
      <header className='bg-blue-950 py-5 text-teal-50'>
        <p>Calculadora de propinas y consumo</p>
      </header>
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

          {
            order.length === 0 ? <p className='text-center'>La orden esta vacia.</p> : <OrderContents order={order} removeItem={removeItem} />
          }
        </div>


      </main>
    </>
  )
}

export default App
