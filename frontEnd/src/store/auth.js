import {createSlice} from "@reduxjs/toolkit";

const auth = createSlice({
    name:"auth",
    initialState:{isLogin:false},
    reducers:{
        SignIn(state){
            state.isLogin = true
        },
        logout(state){
          state.isLogin=false
        }
    }
})

export const {SignIn,logout} = auth.actions
export default auth.reducer
