import Form from "./Form";
import ProductList from "./ProductList";
import cartStore from "../store/cartStore";
export default function Cart() {
    const showIcon = cartStore(state => state.showIcon)
    const setShowIcon = cartStore(state => state.setShowIcon)

    return (

        // transition-opacity duration-300 ease-in-out ${showIcon ? 'opacity-0' : 'opacity-100'}
        
        <div className={`  ${showIcon ? 'hidden' : ''}  `}>

            <ProductList/>

            <Form/>

            <button onClick={ () => setShowIcon()}>close</button>

        </div>

    )
}
