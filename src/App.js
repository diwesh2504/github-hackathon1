import './App.css';
import Logo from './images/logo.jpg';
import {useState} from "react";
import Repo from "./Repo";
import RepoAndUser from './RepoAndUser';
import Files from './Files';
function App() {
  let [displayState,setPage]=useState("defaultpage");
  const changePage=(e)=>{
    setPage(e.target.id);
  }
  return (
    <>
    <div>
      <img src={Logo} className="logo" alt="logo.png"/>
    </div>
    <div className="container-fluid" style={{marginTop:"40px"}}>
      <div className="row">
         <div className="col">
          <button type="button" id="repo" onClick={changePage} className="btn btn-info">List Repository Names of User</button>
          </div>
          
          <div className="col">
          <button type="button" id="files" onClick={changePage} className="btn btn-info">files in the repository</button>
          </div>
      </div>
    </div>
    {displayState==="defPage"?"":""}
    {displayState==="repo"?<Repo/>:""}
    {displayState==="files"?<Files/>:""}
    </>
  );
}

export default App;
