import { getProduct } from "../../producto/helpers/producto";


export const startLoadingProducto = (id) => {
    return async(dispatch, getState) => {
        const product = await getProduct(id);
        return product;
    };
}