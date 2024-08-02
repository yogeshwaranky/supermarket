import { createStore as createEasyPeasyStore } from "easy-peasy";
import { HttpService } from "../services/http/http.service";
import { BrandModel, brandModel } from "./Models/brand/brand.model";
import { SignUpModel, signUpModel } from "./Models/signUp/SignUp.model";
import { ProductModel, productModel } from "./Models/product/Product.model";



export interface AppStoreModel{
    productModel: ProductModel,
brandModel: BrandModel;
signUpModel: SignUpModel;
}
export const appStoreModel: AppStoreModel ={
    productModel: productModel,
   brandModel : brandModel,
   signUpModel: signUpModel
}

function createStore(defaultValues?: any){
    return createEasyPeasyStore(appStoreModel,{
        injections:{
            httpService: new HttpService(),
        },
        initialState:{
            ...defaultValues,
        },
    });
}

export const store =createStore();