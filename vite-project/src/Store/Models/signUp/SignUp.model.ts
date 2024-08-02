import { Action, Thunk, action, thunk } from "easy-peasy";
import { SignUp } from "../../interface";

interface SignUpState{     // variables
    loginInfo: SignUp; 
}

interface SignUpActions{       // value setter  => function => action
    setLoginInfo: Action<this, SignUp>;
}


export interface SignUpModel extends SignUpState, SignUpActions{

}

export const signUpModel: SignUpModel={
    loginInfo: {},
    
    setLoginInfo: action((state, loginInfo) => {
        state.loginInfo = loginInfo;
    }),
}