import { getProduct, getsProducts } from "../../producto/helpers/producto";
import { setActiveProduct, setProductos } from "./productoSlice";

export const startActiveProducto = ( id ) => {
    return async(dispatch, getState) => {
        const product = await getProduct(id);

        dispatch( setActiveProduct(product) );
        console.log(product)
        return product;
    }
}

export const startLoadingProductos = (type, text) => {
    return async( dispatch, getState ) => {
        const products = await getsProducts(type, text);
        
        dispatch( setProductos(products) )
    };
};

export const startLoadingProducto = (id) => {
    return async(dispatch, getState) => {
        const product = await getProduct(id);
        return product;
    };
};