import { useState } from "react";

export function CreateBrand(props)
{
const[brand, setBrand]=useState(
    {

    }
)
/// ...brand=> prev value
    function handleBrandtInput(inputType, e)
    {
        switch (inputType) {
            case "brandName":
                setBrand({ ...brand, brandName: e.target.value });
              break;
              case "brandNameTn":
         setBrand({...brand, brandNameTn: e.target.value })
         break;
         case "brandId":
            setBrand({...brand, brandId: e.target.value })
            break;
          
        }
    }
    function handleCreateBrand()
    {
        props.setBrandList([...props.brandList,brand])
        // props.setBrandlist([...props.brandList,brand])
        props.setShowCreateModel(false)
    }

    return(
        <>
        
        <div className="row">
        <div className="col">
       
        </div>
      </div>
      <div className="row gy-3 text-center d-flex flex-row justify-content-center">
        <div className="col-auto">
          <label className="form-label float-start form-label form-label" for="productname">Enter Brand Name</label>
          <input type="text" onChange={(e) => handleBrandtInput("brandName", e)} className="form-control" name="productname" placeholder="Enter Brand name" />
        </div>
        <div className="col-auto">
          <label className="form-label float-start form-label form-label">Enter Brand Tamil Name</label>
          <input type="text" onChange={(e) => handleBrandtInput("brandNameTn", e)} className="form-control" placeholder="Enter Brand Tamil Name" />
         </div>
         <div className="col-auto">
          <label className="form-label float-start form-label form-label">Enter Brand ID</label>
          <input type="text" onChange={(e) => handleBrandtInput("brandId", e)} className="form-control" placeholder="Enter Brand ID" />
         </div>
        
      <div className="row d-flex justify-content-center" style={{ marginTop: "28px", }}>
        <div className="col-3" style={{ textAlign: "center", }}><button onClick={() => handleCreateBrand()} className="btn btn-success" type="button" style={{ textAlign: "center", }} >Create</button></div>
        <div className="col-3" style={{ textAlign: "center", }}><button className="btn btn-danger" type="button" style={{ textAlign: "center", }} onClick={()=>props.setShowCreateModel(false)} >cancel</button></div>
      </div>
      </div>

        </>
    )
}