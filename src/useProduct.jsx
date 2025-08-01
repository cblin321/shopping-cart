import { useEffect, useState } from "react"
export const useProducts = async () => {
    const [loading, setLoading] = useState(false)
    const [productData, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            const controller = new AbortController()
            try {
                const request = await fetch("https://fakestoreapi.com/products", controller.signal)
                const data = await request.json()
                setData(data)
                console.log(data)
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