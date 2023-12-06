import {FC, useEffect} from 'react';
import {useSelector} from "react-redux";

import {productsSelector} from "../../store/products/ProductsSelector.ts";
import ProductCardComponent from "../../components/ProductCardComponent";
import {getProductsThunk} from "../../store/products/ProductsThunk.ts";
import {useThunkDispatch} from "../../hooks/useThunkDispatch.tsx";


const ProductsContainer: FC = () => {
    const {products, loading} = useSelector(productsSelector)
    // TypeScript miatt letre kell hozni a dispatch-nak egy kulon hook-et, mert automatikusan nem ismeri fel hogy o egy thunk -ot fog kapni.
    const dispatch = useThunkDispatch()

    useEffect(() => {
        dispatch(getProductsThunk()).then();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    if (loading) {
        return <h2>Please wait...</h2>
    }

    return (
        <div style={{display: 'flex', flexWrap: 'wrap', gap: 15}}>
            {products.map((product) => <ProductCardComponent key={product.id} {...product}/>)}
        </div>
    )
}

export default ProductsContainer;