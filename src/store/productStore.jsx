import { create } from "zustand";

 const productsStore = create((set , get) => ({

        products :[],

        getProducts: async () => {
            try{

                const response = await fetch('http://localhost:4000/api/products')

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

        setProducts : (value) => {
            set( () => ({
                products : value
            }))
        },

        addProduct: (title , price , quantity , clearFunction) => {
            // validations
            if(
                title.trim() === '' ||
                price.trim() === '' ||
                quantity.trim() === '' ||
                !Number.isNaN(Number(title)) ||
                Number.isNaN(Number(price)) ||
                Number.isNaN(Number(quantity))

                )
            {
                alert('Check the form inputs !')
                return
            }

            set(state => ({
                products : [...state.products , { id: state.products.length + 1 , title : title , price : Number(price), quantity : Number(quantity)}]
            }))
            clearFunction()

        },

        increase: (btnId) => {

            set((state) => ({

                products : state.products.map(
                product => product.id === btnId ?
                {...product , quantity: product.quantity + 1} :
                product

            )
        }))

        },

        decrease : (btnId) => {
            set((state) => ({
                products : state.products.map(
                    product =>
                    product.id === btnId && product.quantity > 1 ?
                    {...product , quantity: product.quantity - 1} :
                    product
                )
            }))
        },

        removeProduct: (btnId) => {
            set(
                state => ({
                    products : state.products.filter(
                        product =>
                            product.id !== btnId
                    )
                })
            )
        },

        updatePrice : (btnId) => {

            const newPrice = prompt('enter new price :')

            if(newPrice === null) {
                return
            }

            if(Number.isNaN(Number(newPrice)) || newPrice.trim() === ''){
                alert('value is not valid')
                return
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

        clearProducts : () => {
            set(() => ({
                products : []
            }))
        },

        getTotal : () => {
            return get().products.reduce(
                (total , product) =>
                     total + product.price * product.quantity
                ,0)

        }


}))
export default productsStore
