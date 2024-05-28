import {createSlice} from "@reduxjs/toolkit";

const auth = createSlice({
    name:"auth",
    initialState:{isLogin:false},
    reducers:{
        SignIn(state){
            state.islogin = true
        },
        logout(state){
          state.islogin=false
        }
    }
})

export const {SignIn,logout} = auth.actions
export default auth.reducer
