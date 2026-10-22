import { create } from "zustand";

 const productsStore = create((set , get) => ({

        products :[],

        getProducts: async () => {
            try{

                const response = await fetch('https://shopping-cart-backend-pi.vercel.app/api/products')

                if(!response.ok) {

                    throw new Error ('this is an error')

                }

                const result = await response.json()

                set(() => ({
                    products : result.data
                }))

            }catch(err) {
                console.log(err)
            }
        },

        addProduct : async (title , price , quantity , clearFunction) => {

            // validations
            if(
                title.trim() === '' ||
                price.trim() === '' ||
                quantity.trim() === '' ||
                !Number.isNaN(Number(title)) ||
                Number.isNaN(Number(price)) ||
                Number.isNaN(Number(quantity)) ||
                Number(quantity) < 1 ||
                Number(price) < 1

                )
            {
                alert('Check the form inputs !')
                return
            }

            // add data to server
            try{

                const response = await fetch('https://shopping-cart-backend-pi.vercel.app/api/products' , {
                    method : "POST",
                    headers: {
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify( {
                        title: title ,
                        price: Number(price),
                        quantity : Number(quantity)
                    } )
                })


                if(!response.ok) {
                    console.log(response)
                    throw new Error (`add product filed ! ${response.statusText}`)
                }

                // update state
                const data = await response.json()
                set(state => ({
                    products : [...state.products , data.product]
                }))

                // clear the inputs
                clearFunction()
                console.log(get().products)

            }catch(err) {

                console.log(err)

            }
        },

        increase: async (btnId) => {

                set((state) => ({

                    products : state.products.map(
                    product => product.id === btnId ?
                    {...product , quantity: product.quantity + 1} :
                    product

                )

                }))

            try {

                const response = await fetch(`https://shopping-cart-backend-pi.vercel.app/api/products/${btnId}` , {

                    method : "PATCH" ,

                    headers : {
                        "Content-Type" : "application/json"
                    },

                    body : JSON.stringify({
                         delta : 1
                    })

                })

                if(!response.ok) {
                    throw new Error (`increase quantity filed ! ${response.statusText}`)
                }

            } catch (error) {
                console.log(error)
            }

        },

        decrease : async (btnId) => {

            set((state) => ({

                products : state.products.map(
                    product =>
                    product.id === btnId && product.quantity > 1 ?
                    {...product , quantity: product.quantity - 1} :
                    product

            )}))

            try {

                const response = await fetch(`https://shopping-cart-backend-pi.vercel.app/api/products/${btnId}` , {

                    method : "PATCH" ,

                    headers : {
                        "Content-Type" : "application/json"
                    },

                    body : JSON.stringify({
                         delta : -1
                    })

                })

                if(!response.ok) {

                    throw new Error ('this is an error')

                }

            } catch (error) {

                console.log(error)

            }

        },

        removeProduct: async (btnId) => {

            try {

                const response = await fetch(`https://shopping-cart-backend-pi.vercel.app/api/products/${btnId}`, {
                    method: "DELETE"
                })

                if(!response.ok) {
                    throw new Error ('remove product filed !')
                }

                set(
                    state => ({
                        products : state.products.filter(
                            product =>
                                product.id !== btnId
                        )
                    })
                )

            } catch (error) {

                console.log(error)

            }

        },

        updatePrice : async (btnId) => {

            const newPrice = prompt('enter new price :')

            if(newPrice === null) {
                return
            }

            if(Number.isNaN(Number(newPrice)) || newPrice.trim() === '' || Number(newPrice) < 0 ){
                alert('value is not valid')
                return
            }

            try {

                const response = await fetch(`https://shopping-cart-backend-pi.vercel.app/api/products/${btnId}` , {
                    method : "PATCH" ,

                    headers : {
                        "Content-Type" : "application/json"
                    },

                    body: JSON.stringify({
                        price : Number(newPrice)
                    })

                })


                if(!response.ok) {

                    throw new Error (`add product filed ! ${response.statusText}`)

                }

            } catch (error) {
                console.log(error)
            }

            set((state) => ({
                products : state.products.map(
                    product =>
                        product.id === btnId ?
                        {...product , price : Number(newPrice) } :
                        product
                )
            }))

        },

        clearProducts : async () => {

            if(get().products.length === 0) {
                    return
            }

            try {

                const response = await fetch('https://shopping-cart-backend-pi.vercel.app/api/products' , {
                    method: "DELETE"
                })

                if(!response.ok) {
                    throw new Error(`clear products filed ! ${response.statusText}`)
                }

                set(() => ({
                    products : []
                }))


            } catch (error) {
                console.log(error)
            }

        },

        getTotal : () => {

            return get().products.reduce(
                (total , product) =>
                     total + product.price * product.quantity
                ,0)

        }


}))
export default productsStore
