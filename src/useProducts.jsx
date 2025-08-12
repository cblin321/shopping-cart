import { useEffect, useState } from "react"
export const useProducts = () => {
    const [loading, setLoading] = useState(true)
    const [productData, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true)
            const controller = new AbortController()
            try {
                const request = await fetch("https://fakestoreapi.com/products", controller.signal)
                let data = await request.json()
                data = data.map(item => ({
                    ...item,
                    price: item.price.toFixed(2)
                }))
                setData(data)
            } catch(err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }

        return () => {
            controller.abort()
        }
            
 
        }
        
        fetchProducts()
    }, [])

    return {
        loading: loading,
        data: productData,
        error: error
    }

}