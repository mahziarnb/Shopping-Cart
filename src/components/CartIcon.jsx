import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import  cartStore  from "../store/cartStore";

export default function CartIcon () {

    const showIcon = cartStore(state => state.showIcon)
    const setShowIcon = cartStore(state => state.setShowIcon)


    return(

        <div className={`h-screen flex justify-center items-center ${showIcon ? '' : 'hidden'} `}>

            <FontAwesomeIcon onClick={() => setShowIcon()} icon={faCartShopping} className={`text-[80px] cursor-pointer `} shake />

        </div>
    )
}
