
import { useSelector,useDispatch } from 'react-redux';

import {incnum,dec,add, sub} from "../action/index";

function ShowName() {
  const state=useSelector((state)=>state.changenumber);
  const dispatch=useDispatch();
  return (
    <div className="App">
     <a
      name=""
      id=""
      class="btn btn-primary"
      href="#"
      role="button"
      onClick={()=>dispatch(incnum())}
      >+</a>
        <input
          type="text"
          class="form-control"
          name=""
          id=""
          aria-describedby="helpId"
          value={state}
        />

     <a
      name=""
      id=""
      class="btn btn-primary"
      href="#"
      role="button"
      onClick={()=>dispatch(dec(5))}
      >-</a>
     <a
      name=""
      id=""
      class="btn btn-primary"
      href="#"
      role="button"
      onClick={()=>dispatch(add(10))}
      >add by 10 </a>
     <a
      name=""
      id=""
      class="btn btn-primary"
      href="#"
      role="button"
      onClick={()=>dispatch(sub(10))}
      >Sub by 10 </a>

    </div>
  );
}

export default ShowName;
