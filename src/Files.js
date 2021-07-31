import {useState} from "react";
export default function Files(){
    let [user_file,setName]=useState("");
    let [repos,setRepos]=useState([]);
    let [unique,setUnique]=useState([]);
    let [files,setFiles]=useState([]);
    async function getRepo(e){
        e.preventDefault();
        let user=document.getElementById("username").value;
        setName(user);
        console.log("USER_FILE",user_file)
        let data=await fetch(`https://api.github.com/users/${user}/repos`)
        let d=await data.json();
        setRepos(d)
        
    }
    async function getFiles(e){
        let repo_id=e.target.id;
        setUnique(repos.filter((rep)=>rep.id==repo_id));
        console.log("UNIQUE",unique[0],user_file)
        // let data=await fetch(`https://api.github.com/repos/${user_file}/${unique[0]['name']}/contents`)
        // let d=await data.json();
        // setFiles(d)
        fetch(`https://api.github.com/repos/${user_file}/${unique[0]['name']}/contents`)
        .then(res=>res.json())
        .then(res=>setFiles(res))
        .catch(err=>console.error(err))
        

    }
    return(
        <>
        <div className="display-files">
            <h6 className="display-4">Search user</h6>
            <h6 className="display-4">Repositories</h6>
            <h6 className="display-4">Files</h6>
        </div>
         <div className="display-files">
             <div id="1">
                    <form className="form-row" onSubmit={getRepo}>
                        <div className="form-group mx-sm-3 mb-2">
                            <input type="text" className="form-control" id="username" placeholder="Enter username.."/>
                        </div>
                        <button type="submit" className="btn btn-secondary mb-2">Search</button>
                    </form>
             </div>
            <div id="2">
                
                 <div className="card" style={{width:"20rem"}}>
                    <ul className="list-group list-group-flush">
                    {repos.map((rep)=>{
                     return <li className="list-group-item"><span>{rep.name}</span><span className="float-right"><button id={rep.id} className="btn btn-outline-success btn-sm" onClick={getFiles} type="button">View Files</button></span></li>
                    })}
                    </ul>
                 </div>
            </div>
             <div id="3">
             <div className="card" style={{width:"20rem"}}>
                    <ul className="list-group list-group-flush">
                    {files.map((file)=>{
                     return <li className="list-group-item"><span>{file.name}</span></li>
                    })}
                    </ul>
                 </div>
             </div>
         </div>
        </>
    )
}