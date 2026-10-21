import CartIcon from './components/CartIcon'
import AdminPanel from './components/AdminPanel'
import Cart from './components/Cart'
import Form from './components/Form'

function App() {


  return (
    <div>

          <div className='flex justify-center items-center'>

                    <CartIcon />

                    <AdminPanel/>

          </div>

          <Cart/>

          <Form/>



    </div>

  )
}

export default App
