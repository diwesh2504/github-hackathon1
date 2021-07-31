import {useState} from "react";
import CardFirst from "./CardFirst";

export default function Repo(){
    let [user,setUser]=useState([]);
    async function getRepo(e){
        e.preventDefault();
        let user=document.getElementById("userinfo").value;
        let data=await fetch(`https://api.github.com/users/${user}/repos`)
        let d=await data.json();
        setUser(d)
        console.log(d);
    }
    return(
        <>
        <div className="container-fluid">
            <div className="row" style={{marginTop:"50px"}}>
                
                <div className="col-9">
                
                    <form className="form-inline" onSubmit={getRepo}>
                    <div class="form-group mx-sm-3 mb-2">
                            <input type="text" class="form-control" id="userinfo" placeholder="Enter username.."/>
                    </div>
                    <button type="submit" class="btn btn-secondary mb-2">Search</button>
                    </form>
                </div>
                
            </div>
        </div>
        <div className="display-repo" style={{margin:"20px"}}>
            {user.map((repo)=>{
                return <CardFirst userRepoData={repo}/>
            })}
        </div>
        </>
    )
}