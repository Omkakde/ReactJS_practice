import React from 'react'

export default function useCounter( initialValue=0) {
    const[count, setCount]=(initialValue);

    const Increment = () => {
        setCount(prev => prev+1)
    }
    const Decrement = () => {
        setCount(prev => prev-1)
    }
    const reset = () => {
        setCount(initialValue)
    }
}
