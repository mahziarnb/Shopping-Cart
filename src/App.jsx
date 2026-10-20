import ProductList from './components/ProductList'
import Form from './components/Form'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
function App() {


  return (
    <div>

          <FontAwesomeIcon icon={faCartShopping} />

          <ProductList/>

          <Form/>

    </div>

  )
}

export default App
