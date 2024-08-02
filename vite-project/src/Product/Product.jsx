import { useEffect, useState } from "react";
import { useStoreState, useStoreActions } from 'easy-peasy';
import { CreateProduct } from "./CreateProduct.page";
import { ProductModel } from "./Components/productModel.component";

export function Product() {
    const {productDetailes, storeProduct} = useStoreState((state)=>state.productModel);
    const {setProductDetailes, setStoreProduct}= useStoreActions((actions)=> actions.productModel)
    
    // const [productList, setProductList] = useState([])
//     // const [responseStatus, setResponseStatus] = useState('')
//     const [selectedProduct, setSelectedProduct] = useState([])
    const [showModel, setShowModel] = useState(false)
    const [product, setProduct] = useState({})
    const [showCreateProduct, setShowCreateProduct] = useState(false)
//     const [showCart, setShowCart]=  useState(false)
//     const[productQTY, setProductQTY]=useState(1)
    const[quantity, setQuantity]=useState({})

//     function handleQty(item,e)
//     {
//         setProductQTY(e.target.value)
//        productList.map((product)=>{
//         if(product.productID===item.productID)
//         {
//     product.productQty=e.target.value;
//     return product
//         }
//        }
    
//     )
//     }
    
 function fetchProductDetails() {
    
        // setProductList(productll)
        setProductDetailes(productll)
    }

    useEffect(() => {
        fetchProductDetails();
    }, [setProductDetailes])
    function handleProductKgs(productKgs){
        switch(productKgs){
            case "250 g":
                return 1;
            case "500 g":
                return 2;
            case "1 kg":
                return 4;
        }
    }

//// Edit Button function

    function handleEditButton(item) {

        setShowModel(!showModel);
        setStoreProduct(item)
    }

/// Delete Button function

    function handleDeleteButton(item)
    {
        const temp = productDetailes.filter((productDetailes) => productDetailes.productNameEng !== item.productNameEng)
        setProductDetailes(temp);
    }
    function handleQuantity(item,e)
    {
    setQuantity(e.target.value)
    productDetailes.map((product) => {
            if (product.productID === item.productID) {
                    product.productKgs= e.target.value;
                return product;
            }
        });
    
    }
    
    const productll = [
        {
            productID: 1,
            productNameEng: "Beens",
            productNameTn: "பீன்ஸ்",
            productKgs:"250 g",
            productQty:1,
            productPrice: 25,

        },
        {
            productID: 2,
            productNameEng: "Butter",
            productNameTn: "வெண்ணெய்",
            productKgs:"250 g",
            productQty:1,
            productPrice: 50,
        },
        {
            productID: 3,
            productNameEng: "Dried Fruits",
            productNameTn: "உலர்ந்த பழங்கள்",
            productKgs:"250 g",
            productQty:1,
            productPrice: 125,
        },
        {
            productID: 4,
            productNameEng: "Pasta",
            productNameTn: "பாஸ்தா",
            productKgs:"250 g",
            productQty:1,
            productPrice: 80,
        },
        {
            productID: 5,
            productNameEng: "Biryani Rice",
            productNameTn: "பிரியாணி சாதம்",
            productKgs:"250 g",
            productQty:1,
            productPrice: 75,
        },
        {
            productID: 6,
            productNameEng: "Red chilli powder",
            productNameTn: "சிவப்பு மிளகாய் தூள்",
            productKgs:"250 g",
            productQty:1,
            productPrice: 15,
        },
        {
            productID: 7,
            productNameEng: "Sambar powder",
            productNameTn: "சாம்பார் பொடி",
            productKgs:"250 g",
            productQty:1,
            productPrice: 10,

        },
        {
            productID: 8,
            productNameEng: "Pepper",
            productNameTn: "மிளகு",
            productKgs:"250 g",
            productQty:1,
            productPrice: 45,
        },
        {
            productID: 9,
            productNameEng: "Ragi flour",
            productNameTn: "ராகி மாவு",
            productKgs:"250 g",
            productQty:1,
            productPrice: 75,
        },
        {
            productID: 10,
            productNameEng: "Noodles",
            productNameTn: "நூடுல்ஸ்",
            productKgs:"250 g",
            productQty:1,
            productPrice: 40,
        }, 
        {
            productID: 11,
            productNameEng: "Tea powder",
            productNameTn: "தேயிலை தூள்",
            productKgs:"250 g",
            productQty:1,
            productPrice: 120,
        },
        {
            productID: 12,
            productNameEng: "Sugar",
            productNameTn: "சர்க்கரை",
            productKgs:"250 g",
            productQty:1,
            productPrice: 30,
        },
        {
            productID: 13,
            productNameEng: "Baking powder",
            productNameTn: "பேக்கிங் பவுடர்",
            productKgs:"250 g",
            productQty:1,
            productPrice: 65,
        },
        {
            productID: 14,
            productNameEng: "Almonds",
            productNameTn: "பாதாம்",
            productKgs:"250 g",
            productQty:1,
            productPrice: 250,
        },
        {
            productID: 15,
            productNameEng: "Dates",
            productNameTn: "பேரிச்சை",
            productKgs:"250 g",
            productQty:1,
            productPrice: 200,
        },
    
    ]

    return (
        <div className="container">

            <div className="row mb-5">
                <div className="col-8 col-xl-9 text-center mx-auto">
                    <h2><br /><strong>Products</strong><br /></h2>
                    <p className="w-lg-50"><br />Here You can find the groups of products that meet a similar consumer need or that can substitute for each<br /></p>
                </div>
                <div className="col align-self-center" style={{ textAlign: "center", }}>
                    <a className="btn btn-outline-info btn-lg" role="button" onClick={() => setShowCreateProduct(true)}>Create New Product</a>
                </div>
            </div>

            <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">

                {productDetailes.map((item) => (
                    <div className="col item">
                        <div className="card">
                            <div className="card-body text-center d-flex flex-column align-items-center p-0">
                                <div className="row row-cols-1" style={{ margin: "0px", marginRight: "0px", marginBottom: "10px", marginTop: "0px", }}>
                                    <div className="col">
                                     
                                        <h4 className="card-title">{item.productNameEng}</h4>
                                        <h4 className="card-title">{item.productNameTn}</h4>
                                    </div>
                                    <br />
                                    <div className="col align-self-center">
                                    <select  onChange={(e)=>handleQuantity(item,e)}>
                                        <option value="250 g" >250 g</option>
                                            <option  value="500 g" >500 g</option>
                                            <option  value="1 kg" >1 kg</option>
                                        </select>
                                        </div>
                                        <h4 className="card-title">Rs.{item.productPrice*handleProductKgs(item.productKgs)}</h4>

                                </div>

                                <div className="row" style={{ marginRight: "-20px", marginBottom: "10px", }}>
                                    <div className="col"><input type="number" id="points" name="points" min="1" max="10" onChange={(e)=>handleQty(item,e)} style={{ width: "100px", }} /></div>


                                </div><button onClick={() => handleCart(item)} className="btn btn-primary" type="button" style={{ width: "57%", }}>Add to Cart</button>


                            </div>
                            <div className="row" style={{ marginTop: "20px" }}>
                                <div className="col"><button className="btn btn-primary" onClick={() => handleEditButton(item)} type="button">Edit</button></div>
                                <div className="col"><button className="btn btn-danger" type="button" onClick={() => handleDeleteButton(item)} >Delete</button></div>
                            </div>
                        </div>
                    </div>
                ))}

                {showModel && <ProductModel setShowModel={setShowModel} />}




                {/* <Cart cartItems={selectedProduct} showCart={showCart} setShowCart={setShowCart}/> */}
                {   showCreateProduct &&       <div className="modal fade show" id="modal-1" role="dialog" tabindex="-1" style={{ display:"block", }}>
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
            <h4 className="modal-title">Create Product Details</h4>
                <button
                onClick={()=>setShowCreateProduct(false)}
                className="btn-close"
                type="button"
                aria-label="Close"
                data-bs-dismiss="modal" />
                   </div>
                 <div className="modal-body">
               <CreateProduct setShowCreateProduct={setShowCreateProduct}/>
                </div>

                </div>
                </div>
                </div>}

      


            </div>

        </div>



    )

}