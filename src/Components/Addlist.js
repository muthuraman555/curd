import React, {useRef} from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const Addlist = (props) => {
  const inputEl = useRef("");
    const deletHandler=(id)=>
    {
        props.getContactId(id);
    };
const Rendercruditem =props.Additem.map((curditems)=>{
    return(
  <ContactCard 
curditems={curditems}
  Clickhandler = {deletHandler} 
  key={curditems.key}/>
    );
})
const getSearch = () => {
props.searchKeyword(inputEl.current.value);
}
    return(
      <div className="main-contact">
      <h2>
        CRUD List  </h2>
        <Link to="/add">
          <button className="main-button">Add Item</button>
        </Link>
        <div className="ui search">
          <div className="search">
          <div className="ui icon input">
            <input ref={inputEl} type="text" placeholder="Search item" className="prompt"  value={props.searh} onChange={getSearch}/>
            <i className="search icon" style={{marginLeft:"-20px",marginTop:"8px"}}></i>
          </div>
          </div>
          </div>
           {Rendercruditem}
        </div>

    );
}
export default Addlist;