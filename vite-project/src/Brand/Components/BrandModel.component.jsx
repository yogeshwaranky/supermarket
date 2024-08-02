export function BrandModel(props)
{
    function handleBrandName(e, inputType)
    {
if(inputType==="brandNameTn")
{
    props.setBrand({...props.brand,brandNameTn:e.target.value})
}
else
{
    props.setBrand({...props.brand,brandName:e.target.value})
}
    }
    function UpdateProductDetail()
    {
props.brandList.map((brand)=>
{
    if(brand.brandID === props.brand.brandID)
    {
brand.brandName=props.brand.brandName;
brand.brandNameTn=props.brand.brandNameTn;
return brand;

    }
    props.setShowEditModel(false)
})
    }
    return(
        <>
        
        <div className="modal fade show" id="modal-1" role="dialog" tabindex="-1" style={{ display:"block", }}>
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">Edit Brand Details</h4>
                <button
                onClick={()=> props.setShowEditModel(false)}
                className="btn-close"
                type="button"
                aria-label="Close"
                data-bs-dismiss="modal" />
            </div>
            <div className="modal-body">
                <div className="row row-cols-1">
                    <div className="col">
                        <label className="form-label" style={{ marginRight:"80px", }}>Product Name</label>
                        <input type="text" onChange={(e)=>handleBrandName(e,"brandName")} value={props.brand.brandName} /></div>
                    <div className="col">
                        <label className="form-label" style={{ marginRight:"36px", }}>Product Name Tamil</label>
                    <input type="text" onChange={(e)=>handleBrandName(e,"brandNameTn")} style={{ marginLeft:"4px", }} value={props.brand.brandNameTn} /></div>
                   
                </div>
            </div>
            <div className="modal-footer">
            <button className="btn btn-light" type="button" data-bs-dismiss="modal" onClick={()=> props.setShowEditModel(false)}>Close</button>
            <button className="btn btn-primary" onClick={()=>UpdateProductDetail()}type="button">Save</button></div>
          
        </div>
    </div>
</div>

        </>
    )
}