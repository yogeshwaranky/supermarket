import { useState, useEffect } from "react"
import { CreateBrand } from "./CreateBrand.page"
import { BrandModel } from "./Components/BrandModel.component"
import { useStoreState, useStoreActions } from 'easy-peasy';
export function Brand()
{
    const {brandList} = useStoreState((state)=>state.brandModel)
    const {setBrandList} = useStoreActions((actions)=>actions.brandModel)

    const[showCreateModel, setShowCreateModel] = useState(false)
    const[showEditModel, setShowEditModel] = useState(false)
    const[brand, setBrand] = useState({})
// setter=> setBrandList
function fetchBrandtDetails(){
    setBrandList(brandli)
}

    useEffect(() => {
        fetchBrandtDetails();
    }, [setBrandList])


// array of objects
    const brandli = [
        {
brandID:1,
brandName:"AACHI",
brandNameTn:"ஆச்சி",
brandListOfProduct:"10",
        },
{
brandID:2,
brandName:"SUGUNA FOODS",
brandNameTn:"சுகுணா உணவுகள்",
brandListOfProduct:"10",
},
{
brandID:3,
brandName:"SAKTHI",
brandNameTn:"சக்தி",
brandListOfProduct:"10",
    }, 
    {
brandID:4,
brandName:"ARUN",
brandNameTn:"அருண்",
brandListOfProduct:"10",
        }, 
        {
brandID:5,
brandName:"AVT",
brandNameTn:"ஏவிடி",
brandListOfProduct:"10",
            }, 
            {
brandID:6,
brandName:"HATSUN",
brandNameTn:"ஹட்சன்",
brandListOfProduct:"10",
},        
    ]
    function handleCreateButton()
    {
        setShowCreateModel(true)
    }
    function handleEditButton(item)
    {
        setShowEditModel(true)
        setBrand(item)
    }
    function handleDeleteButton(item)
    {
        const temp=brandList.filter((brand)=> brand.brandName !== item.brandName)
        setBrandList(temp)
    }
    return(
        <>
        
        <div className="container">

<div className="row mb-5">
    <div className="col-8 col-xl-9 text-center mx-auto">
        <h2><br /><strong>Brand</strong><br /></h2>
        <p className="w-lg-50"><br />Here You can find the groups of Brands that meet a similar consumer need or that can substitute for each<br /></p>
    </div>
    <div className="col align-self-center" style={{ textAlign: "center", }}>
        <a className="btn btn-outline-info btn-lg" role="button" onClick={()=>handleCreateButton()}>Create New Brand</a>
    </div>
</div>

<div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">

    {brandList.map((item) => (
        <div className="col item">
            <div className="card">
                <div className="card-body text-center d-flex flex-column align-items-center p-0">
                    <div className="row row-cols-1" style={{ margin: "0px", marginRight: "0px", marginBottom: "10px", marginTop: "0px", }}>
                        <div className="col">
                            <h4 className="card-title">{item.brandName}</h4>
                            <h4 className="card-title">{item.brandNameTn}</h4>
                            <h4 className="card-title">List Of Product : 10</h4>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: "20px", marginLeft:"60px" }}>
                                <div className="col"><button className="btn btn-primary" onClick={() => handleEditButton(item)} type="button">Edit</button></div>
                                <div className="col"><button className="btn btn-primary" type="button" onClick={() => handleDeleteButton(item)} >Delete</button></div>
                            </div>
            </div>
        </div>
    ))}

{   showCreateModel &&       <div className="modal fade show" id="modal-1" role="dialog" tabindex="-1" style={{ display:"block", }}>
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
            <h4 className="modal-title">Edit Product Details</h4>
                <button
                onClick={()=>setShowCreateModel(false)}
                className="btn-close"
                type="button"
                aria-label="Close"
                data-bs-dismiss="modal" />
                   </div>
                 <div className="modal-body">
               <CreateBrand setShowCreateModel={setShowCreateModel} brandList={brandList} setBrandList={setBrandList} />
                </div>

                </div>
                </div>
                </div>}
           {showEditModel && <BrandModel setShowEditModel={setShowEditModel} brand={brand} setBrand={setBrand} brandList={brandList} setBrandList={setBrandList} />}     
</div>
</div>
        </>
    )
}