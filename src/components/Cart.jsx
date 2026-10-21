import ProductList from "./ProductList";
import cartStore from "../store/cartStore";
export default function Cart() {
    const showCartIcon = cartStore(state => state.showCartIcon)
    const showForm = cartStore(state => state.showForm)



    return (

        // transition-opacity duration-300 ease-in-out ${showCartIcon ? 'opacity-0' : 'opacity-100'}

        <div className={`  ${showCartIcon === false & showForm === false ? '' : 'hidden'}  `}>

            <ProductList/>



        </div>

    )
}
