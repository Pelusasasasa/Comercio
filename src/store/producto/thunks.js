import { getProduct, getsProducts } from "../../producto/helpers/producto";
import { setProductos } from "./productoSlice";

export const startLoadingProductos = (type, text) => {
    return async( dispatch, getState ) => {
        const products = await getsProducts(type, text);
        
        dispatch( setProductos(products) )
    };
}

export const startLoadingProducto = (id) => {
    return async(dispatch, getState) => {
        const product = await getProduct(id);
        return product;
    };
};