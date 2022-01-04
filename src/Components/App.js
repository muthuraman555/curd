import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import {uuid} from "uuidv4"
import Header from './Header';
import api from '../api/Curditem';
import Addcontact from './Addcontact';
import Addlist from './Addlist';
import Updatecontact from './Updatecontact ';

function App() {
const LOCAL_STORAGE_KEY = "Curditem";
const [Curditem, setCurditem] = useState([]); 
const [searchData, setSearchData] = useState("");
const [searchresult, setSearchResult] = useState([]);

const retraiveCurditem = async () => {
  const response = await api.get("/Curditem");
  return response.data;
};

const AddcontactHanler = async (Curditems) => {
  console.log(Curditems);
  const request = { 
    id: 
    uuid(),
     ...Curditems,
  }
  const response = await api.post("/Curditem", request);
  setCurditem([...Curditem, response.data]);
  console.log(Curditems)  
};

const searchHandeler = (searchData) => {
  setSearchData(searchData);
  if (searchData !== ""){
    const newContactlist = Curditem.filter((curditems) => {
      return  Object.values(curditems).join("").toLocaleLowerCase().includes(searchData.toLocaleLowerCase());
    });
    setSearchResult(newContactlist);
  } else
  {
    setSearchResult(Curditem)
  }
}
  const  RemovecontactHandeler = async (id) => {
    await api.delete(`/Curditem/${id}`);
    const  newContactlist = Curditem.filter((curditems) => {
      return curditems.id !== id;
    });
setCurditem(newContactlist);
  };
  const updateContactHandler = async (curditems) => {
    const response = await api.put(`/Curditem/${curditems.id}`, curditems);
    const { id, name, img, location} = response.data;
    setCurditem(
     Curditem.map((curditems) => {
        return curditems.id === id ? { ...response.data } : curditems;
      })
    );
  };
useEffect(() =>{
 const getAllCurditem = async () => {
const allCurditem = await  retraiveCurditem();
if (allCurditem) setCurditem(allCurditem); 
 };

  getAllCurditem();

},[]);

useEffect(() => {

}, [Curditem]);

  return (
<div className='ui container'>
  <Router>
  <Header/>
    <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Addlist
                {...props}
                Additem={searchData.length < 1 ?  Curditem : searchresult}
                getContactId={RemovecontactHandeler}
                searh={searchData}
                searchKeyword={searchHandeler}
                />
                )}
                />
          <Route
            path="/add"
            render={(props) => (
              < Addcontact {...props} AddcontactHanler={AddcontactHanler}/>
            )}
          />
              <Route
            path="/edit"
            render={(props) => (
              <Updatecontact
                {...props}
                updateContactHandler={updateContactHandler}
              />
            )}
          />
    </Switch>
   </Router>
</div>
  );
}
export default App;
