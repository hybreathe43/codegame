

const changenumber =(state=10,action)=>{
switch(action.type){

    case "increament": return state=state+1;
    
    case "dec" : return state=state-action.payload;

    case "add" : return state=state + action.payload;

    case "sub" : return state=state - action.payload;

    default : return state
}
}
export default changenumber;