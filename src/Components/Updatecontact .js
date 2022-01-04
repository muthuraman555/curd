import React  from "react";

class Updatecontact extends React.Component{
    constructor(props) {
        super(props);
        const { id, name, img, location } = props.location.state.curditems;
        this.state = {
          id,
          name,
          img,
          location
        };
      }
    add = (e) =>
    {
        e.preventDefault(); 
    if(this.state.name === "" || this.state.location === "" || this.state.img ==="") 
    {
        alert("fill the all box")
        return;
    }  
    this.props.updateContactHandler(this.state);

    this.setState({
        name:"",
        img:"",
        location:""
    });
    this.props.history.push("/");
  
 }
    render()
    {
        return(
            <div className="ui main">
              <h2>Update Item</h2>
                <form className=" ui form" onSubmit={this.add}>
                    <div className="table">
                        <label>Name:</label>
                        <input type='text' name="Name" placeholder="Name" 
                        value={this.state.name}
                        onChange={(e)=>this.setState({name:e.target.value})}></input>
                    </div>
                    <br></br>
                    <div className="table">
                        <label>Image:</label>
                        <input type="url" name="url" placeholder="Url"
                          value={this.state.img}
                          onChange={(e)=>this.setState({img:e.target.value})}>
                        </input>
                    </div>
                    <br></br>
                    <div className="table">
                        <label>Location:</label>
                        <input type='text' name="Name" placeholder="Location"
                          value={this.state.location}
                          onChange={(e)=>this.setState({location:e.target.value})}></input>
                    </div>
                   <br></br>
                    <button className=" ui large button blue " style={{width:"300px" , marginLeft:"80px"}}>
                        Update
                        </button>
                </form>

            </div>

        );
    }
}
export default Updatecontact;