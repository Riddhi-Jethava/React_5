import { INCREMENT , DECREMENT } from "./action";

const initialState = {
    count : 0
}

const counterReducer = (state = initialState , action) => {
    switch(action.type){
        case INCREMENT : return {
            ...state,
        }
    }
}
//riddhiiee08 up work