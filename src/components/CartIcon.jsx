import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import  cartStore  from "../store/cartStore";

export default function CartIcon () {

    const showCartIcon = cartStore(state => state.showCartIcon)
    const setShowCartIcon = cartStore(state => state.setShowCartIcon)
    const setShowProductList = cartStore(state => state.setShowProductList)

    function handleClick() {
        setShowCartIcon();
        setShowProductList();
    }

    return(

        <div className={` h-screen flex justify-center items-center ${showCartIcon ? '' : 'hidden'} `}>

            <FontAwesomeIcon onClick={handleClick} icon={faCartShopping} className={`text-[80px] cursor-pointer `} shake />

        </div>
    )
}
