import { useState } from "react"
import { useStoreState, useStoreActions } from 'easy-peasy';
export function Signup(props)
{
    const {loginInfo} = useStoreState((state)=>state.signUpModel);
    const {setLoginInfo}= useStoreActions((actions)=> actions.signUpModel)
    const [isFormSubmitted,setIsFormSubmitted] =useState(false);
    const[createId, setCreateId]=useState(
        {
            fName:"",
            lName:"",
            mNumber:"",
            emailId:"",
            address:"",
            pincode:"",
            password:"",
        }
    )
   function handleInput(inputType, e)
   {
    switch(inputType)
    {
        case"fName":
        setCreateId({...createId,fName: e.target.value})
        break;
        case"lName":
        setCreateId({...createId,lName: e.target.value})
        break;
        case"mNumber":
        setCreateId({...createId,mNumber: e.target.value})
        break;
        case"emailId":
        setCreateId({...createId,emailId: e.target.value})
        break;
        case"address":
        setCreateId({...createId,address: e.target.value})
        break;
        case"pincode":
        setCreateId({...createId,pincode: e.target.value})
        break;
        case"password":
        setCreateId({...createId,password: e.target.value})
        break;
    }
   }
   function handleSignup()
   {
    setLoginInfo(createId);
    setIsFormSubmitted(true);
    props.setShowSignUp(false)
   }
    return(
        <>
       <form className="font-monospace" style={{ margin:"5rem", }}>
        <div className="row">
            <div className="col"><label className="form-label">First Name</label><input onChange={(e)=>handleInput("fName", e)} className="focus-ring form-control" type="text" autoFocus="" /></div>
            <div className="col"><label className="form-label">Last Name</label><input onChange={(e)=>handleInput("lName", e)} className="form-control" type="text" /></div>
        </div>
        <div className="row mt-4">
            <div className="col"><label className="form-label">Mobile number</label><input onChange={(e)=>handleInput("mNumber", e)} className="form-control" type="number" /></div>
            <div className="col"><label className="form-label">Email Id</label><input onChange={(e)=>handleInput("emailId", e)} className="form-control" type="email" /></div>
            <div className="col"><label className="form-label">Address</label><input onChange={(e)=>handleInput("address", e)} className="form-control" type="text" /></div>
        </div>
        <div className="row justify-content-center">
            <div className="col-4 mt-4"><label className="form-label">Pincode</label><input onChange={(e)=>handleInput("pincode", e)} className="form-control" type="number" /></div>
            <div className="col"><label className="form-label">Password</label><input onChange={(e)=>handleInput("password", e)} className="form-control" type="password" /></div>
        </div>
        <div className="row text-center justify-content-center mt-4">
            <div className="col-4"><button onClick={()=>handleSignup()}  className="btn btn-primary d-block w-100" type="button">Sign Up</button></div>
        </div>
        </form>

{isFormSubmitted && <h1>{JSON.stringify(loginInfo)}</h1> }

        </>
    )
}