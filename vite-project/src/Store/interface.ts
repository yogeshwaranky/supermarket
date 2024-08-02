

export interface Brand {
    brandID?:number;
    brandName?:string;
    brandNameTn?:string;
    brandListOfProduct?:string
}

export interface Category
{
    id?:number,
   categoryName:string,
   categoryNameTamil:string
}
export interface Product
{
    id?:number,
    productNameEng?:string,
   productNameTamil?:string,
   productQuantity?:number,
   productSellingPrice?:number,
   productCostPrice?:number,
   productBrandName?:string,
   productCategoryName?:string
}

export interface SignUp{
            fName?:string,
            lName?:string,
            mNumber?:number,
            emailId?:string,
            address?:string,
            pincode?:number,
            password?:string,
}