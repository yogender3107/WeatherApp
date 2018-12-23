import { FETCH_WHEATHER } from "../actions";

export default function (state=[], action){
    switch(action.type){
        case FETCH_WHEATHER:
            return [action.payload.data,...state];  
    }
    return state;
}