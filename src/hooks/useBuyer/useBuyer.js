import { useEffect, useState } from "react"

const useBuyer = email => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [buyerLoading, setBuyerLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://assignment-12-server-theta.vercel.app/users/buyer/${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.isBuyer) {
                        setIsBuyer(data.isBuyer)
                        setBuyerLoading(false)
                    }
                })
        }
    }, [email])
    return [isBuyer, buyerLoading]
}

export default useBuyer;