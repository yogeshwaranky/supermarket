import {  useState } from "react";
import axios from "axios";
import { useStoreState, useStoreActions } from 'easy-peasy';

export function ProductModel(props)
{
    const {productDetailes, storeProduct} = useStoreState((state)=>state.productModel);
    const {setProductDetailes, setStoreProduct}= useStoreActions((actions)=> actions.productModel)

    const [responseStatus, setResponseStatus] = useState('')


function handleProductName(e,inputType)

{ 
    if(inputType === "productNameTn")
    {
        setProductDetailes({...productDetailes,productNameTn:e.target.value})
    }
    else
    {
        setProductDetailes({...productDetailes,productNameEng:e.target.value})
    }
}
 function UpdateProductDetail(){

    props.productList.map((productDetailes)=>
    {
        if(storeProduct.productID===productDetailes.productID) 
        { 
            storeProduct.productName= productDetailes.productName; 
            storeProduct.productNameTn=productDetailes.productNameTn;
            return productDetailes; 
        }
    }
)

    props.setShowModel(false)

}


    return (     
          <div className="modal fade show" id="modal-1" role="dialog" tabindex="-1" style={{ display:"block", }}>
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">Edit Product Details</h4>
                <button
                onClick={()=> props.setShowModel(false)}
                className="btn-close"
                type="button"
                aria-label="Close"
                data-bs-dismiss="modal" />
            </div>
            <div className="modal-body">
                <div className="row row-cols-1">
                    <div className="col">
                        <label className="form-label" style={{ marginRight:"80px", }}>Product Name</label>
                        <input type="text" onChange={(e)=>handleProductName(e,"productName")} value={storeProduct.productNameEng}/></div>
                    <div className="col">
                        <label className="form-label" style={{ marginRight:"36px", }}>Product Name Tamil</label>
                    <input type="text" onChange={(e)=>handleProductName(e,"productNameTn")} value={storeProduct.productNameTn} style={{ marginLeft:"4px", }} /></div>
                    {responseStatus === "failed" && <div className="invalid-feedback">
            Sorry, Product update failed. Try again?
          </div>}
                </div>
            </div>
            <div className="modal-footer">
            <button className="btn btn-light" type="button" data-bs-dismiss="modal" onClick={()=> props.setShowModel(false)}>Close</button>
            <button className="btn btn-primary" onClick={()=>UpdateProductDetail()}type="button">Save</button></div>
          
        </div>
    </div>
</div>)
}