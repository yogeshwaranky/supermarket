import { Action,  action } from "easy-peasy";
import { Product } from "../../interface";

interface ProductState{     // variables
    storeProduct: Product;
    productDetailes: Array<Product>; 
}

interface ProductActions{       // value setter  => function => action
    setStoreProduct:Action<this, Product> ;
    setProductDetailes: Action<this, Array<Product>>;
}


export interface ProductModel  extends ProductState , ProductActions{

}

export const productModel: ProductModel={
    storeProduct:{},
    productDetailes:[],
    
    setProductDetailes: action((state, productDetailes) => {
        state.productDetailes = productDetailes;
    }),
    setStoreProduct: action((state, storeProduct) => {
        state.storeProduct = storeProduct;
    }),
}

















