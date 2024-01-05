import { combineReducers } from "redux";
import changenumber from "./Updown";
import changeSkelton from "./SkeltonSHow";

const rootred=combineReducers({
    changenumber,
    changeSkelton

});
export default rootred
