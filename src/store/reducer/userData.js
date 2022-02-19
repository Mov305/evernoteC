const initialState = {
    userData: {}
}

const userDataReducer= (state=initialState,{type,payload})=>{
    switch(type){
        case 'ADD_DATA':
            return payload;
        default:
            return state
    }
}
export default userDataReducer