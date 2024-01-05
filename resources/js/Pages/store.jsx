// Import the reducer from the "reducer" file
import rootRed from '../Pages/reducer/index';
import { createStore } from "redux";

// Create the Redux store using the imported reducer
const store = createStore(rootRed);

export default store
