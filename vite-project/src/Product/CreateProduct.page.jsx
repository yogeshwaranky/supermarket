import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { useStoreState, useStoreActions } from 'easy-peasy';
export function CreateProduct(props) {
  const {productDetailes} = useStoreState((state)=>state.productModel);
  const {setProductDetailes}= useStoreActions((actions)=> actions.productModel)
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    productID: productDetailes.length+1,
    productNameEng: "",
    productNameTn: "",
    productKgs:"250 g",
    productQty:1,
    productPrice: "",
  });
  // const [responseStatus, setResponseStatus] = useState("");
 
  function handleProductInput(inputType, e) {
    switch (inputType) {
      case "productNameEng":
        setProduct({ ...product, productNameEng: e.target.value });
        break;
      case "productNameTn":
        setProduct({ ...product, productNameTn: e.target.value });
        break;
      case "productPrice":
        setProduct({ ...product, productPrice: e.target.value });
        break;
      // case "cName":
      //   setResponseStatus("")
      //   setProduct({ ...product, cName: e.target.value });
      //   break;
      // case "bName":
      //   setResponseStatus("")
      //   setProduct({ ...product, bName: e.target.value });
      //   break;
    }
  }
  async function handleCreate() {
   
    setProductDetailes([...productDetailes,product])
props.setShowCreateProduct(false)
  }

  function handleNames(inputType){
    if(responseStatus===  ""){
      return "";
    }else {
      switch(inputType){
        case "cName" :
          return responseStatus.includes("Category") ? "is-invalid" : "is-valid"
        case "bName" :
          return responseStatus.includes("Brand") ? "is-invalid" : "is-valid"
      }
        
      }
  }
  return (
    <>
      <div className="row">
        <div className="col">
       
        </div>
      </div>
      <div className="row gy-3 text-center d-flex flex-row justify-content-center">
        <div className="col-auto">
          <label className="form-label float-start form-label form-label" for="productname">Enter Product Name</label>
          <input type="text" onChange={(e) => handleProductInput("productNameEng", e)} className="form-control" name="productname" placeholder="Enter Product name" />
        </div>
        <div className="col-auto">
          <label className="form-label float-start form-label form-label">Enter Product Tamil Name</label>
          <input type="text" onChange={(e) => handleProductInput("productNameTn", e)} className="form-control" placeholder="Enter Product name in tamil" />
         </div>
        <div className="col-auto">
          <label className="form-label float-start form-label form-label">Enter Product Price</label>
          <input type="number" onChange={(e) => handleProductInput("productPrice", e)} className="form-control" placeholder="Enter Product description " />
         </div>
       
      <div className="row d-flex justify-content-center" style={{ marginTop: "28px", }}>
        <div className="col-3" style={{ textAlign: "center", }}><button onClick={() => handleCreate()} className="btn btn-success" type="button" style={{ textAlign: "center", }}>Create</button></div>
        <div className="col-3" style={{ textAlign: "center", }}><button className="btn btn-danger" type="button" style={{ textAlign: "center", }} onClick={()=>props.setShowCreateProduct(false)}>cancel</button></div>
      </div>
      </div>
    </>
  );
}