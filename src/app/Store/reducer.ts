import { createReducer, on } from "@ngrx/store";
import { add } from "./action";
export const initialState= {name:'myName',email:'myEmail',city:'myCity'};


const _counterReducer= createReducer(initialState, 
   
    on(add, (state,action) =>{
        console.log(action);
        console.log(state.name);
        return{
            
            name:action.name,
            email:action.email,
            city:action.city
        };
    }),
    )
export function newReducer(state:any,action: any){
    return _counterReducer(state,action);
}