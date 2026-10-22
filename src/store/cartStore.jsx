import { create } from "zustand";

const cartStore = create((set) => ({
    showCartIcon : true,
    showAdminIcon : true ,
    showProductList : false ,
    showForm : false ,

    setShowCartIcon : () => {

        set( (state) => ({
            showCartIcon : !state.showCartIcon
        }) )

    },

    setShowProductList :  () => {  set((state) => ({
            showProductList : !state.showProductList
        }))},


    setShowAdminIcon : () => {

        set( (state) => ({
            showAdminIcon : !state.showAdminIcon
        }) )

    },

    setShowForm : () => {
        set( (state) => ({
            showForm : !state.showForm
        }) )
    }



}))

export default cartStore
