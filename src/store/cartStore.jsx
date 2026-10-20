import { create } from "zustand";

const cartStore = create((set) => ({
    showIcon : true,

    setShowIcon : () => {

        set( (state) => ({
            showIcon : !state.showIcon
        }) )
    }


}))

export default cartStore
