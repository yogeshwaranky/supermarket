import { useState } from "react";
import { Signup } from "./Signup";

import { useStoreState } from 'easy-peasy';
import { useNavigate } from "react-router-dom";
function Login() {
  const [userId, setUserId] = useState({});
  const [showSignUp, setShowSignUp] = useState(false);
  const {loginInfo} = useStoreState((state)=>state.signUpModel);
const navigate = useNavigate()
  function handleInput(inputType, e) {
    switch (inputType) {
      case "emailId":
        setUserId({ ...userId, emailId: e.target.value });
        break;
      case "password":
        setUserId({ ...userId, password: e.target.value });
        break;
    }
  }
  function handleLogin(){

if((loginInfo.emailId === userId.emailId) && (loginInfo.password === userId.password)){
    navigate("/product")
}
  }
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 col-xl-4">
          <div className="card mb-5">
            <div className="card-body d-flex flex-column align-items-center">
              <div className="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-person"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"></path>
                </svg>
              </div>

              <div className="mb-3">
                <input
                  onChange={(e) => handleInput("emailId", e)}
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <input
                  onChange={(e) => handleInput("password", e)}
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className="mb-3">
                <button
                  onClick={() => handleLogin()}
                  className="btn btn-primary d-block w-100"
                  type="submit"
                >
                  Login
                </button>
              </div>
              <p className="text-muted">Forgot your password?</p>
              <button
                className="text-muted"
                onClick={() => setShowSignUp(true)}
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>

      {showSignUp && (
        <div
          className="modal fade show"
          id="modal-1"
          role="dialog"
          tabindex="-1"
          style={{ display: "block" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Edit Product Details</h4>
                <button
                  onClick={() => setShowSignUp(false)}
                  className="btn-close"
                  type="button"
                  aria-label="Close"
                  data-bs-dismiss="modal"
                />
              </div>
              <div className="modal-body">
                <Signup setShowSignUp={setShowSignUp}/>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Login;