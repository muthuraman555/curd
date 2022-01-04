import React from "react";
import { Link } from "react-router-dom";


const ContactCard= (props) =>
{
 const {id,name, img, location} = props.curditems;
    return(
        <div className="item">
        <div className="content">
                <img className="ui image container center " src={img} alt="home" style={{width:'450px'}} ></img>
                <br></br>
                <div className="header" style={{textAlign:'center',fontSize:"25px"}}>{name}</div>
                <br></br>
                <div style={{textAlign:'center',fontSize:"25px"}}>{location}</div>
                <br></br>
                <hr></hr>
               
            </div>
            <br></br>
            <div className="icon">
            <Link to={{ pathname: `/edit`, state: { curditems: props.curditems } }}>
        <i
          className="edit alternate outline icon"
          style={{color:"green",fontSize:'25px'}}
        ></i>
      </Link>
            <i className="trash alternate outline icon" style={{color:"red",fontSize:'25px'}}
          onClick={() => props.Clickhandler(id)}></i>
      </div>
        </div>
       
    );

}
export default ContactCard;