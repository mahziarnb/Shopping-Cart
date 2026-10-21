import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import cartStore from "../store/cartStore";
export default function AdminPanel() {

    const showAdminIcon = cartStore(state => state.showAdminIcon)
    const setShowAdminIcon = cartStore(state => state.setShowAdminIcon)
    const showCartIcon = cartStore(state => state.showCartIcon)
    const setShowCartIcon = cartStore(state => state.setShowCartIcon)
    const showProductList = cartStore(state => state.showProductList)
    const setShowForm = cartStore(state => state.setShowForm)

    function handleClick() {
        setShowCartIcon();
        setShowAdminIcon();
        setShowForm()
    }


    return (
    <div className={` ${showCartIcon === true & showProductList === false & showAdminIcon === true ? '' : 'hidden'}  `}>

        <FontAwesomeIcon onClick={handleClick} icon={faUser} className="text-[80px] cursor-pointer"  />



    </div>
    )
}
