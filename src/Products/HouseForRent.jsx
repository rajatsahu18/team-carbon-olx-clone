import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {getRentHouseData} from "../Redux/products/action"
import {LoadingIndicator} from "../Components/LoadingIndicator"
import { HouseCard } from './Cards/HouseCard'

export const HouseForRent = () => {
    const dispatch = useDispatch()
    const {products, isLoading} = useSelector(state => state.products, shallowEqual)

    React.useEffect(() => {
        showData()
    }, [dispatch])
    
    const showData = () => {
        dispatch(getRentHouseData())
    }
    
    return isLoading ? (
        <LoadingIndicator/>
    ) : (
        <div style={{border: "2px solid red", display: 'flex', flexWrap: "wrap", justifyContent: "space-around"}}>
            {products.map((item) => {
                return <HouseCard {...item} />
            })}
        </div>
    )
}