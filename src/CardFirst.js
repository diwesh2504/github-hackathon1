export default function CardFirst(props){
    return (
        <div className="card" style={{margin:"10px"}}>
            <div className="card-body">
                <h5 className="card-title">{props.userRepoData.name}</h5>
                <p className="card-text">{props.userRepoData.description===null ?"No description available":props.userRepoData.description}</p>
                <a href={props.userRepoData.html_url} target="_blank" rel="noreferrer" className="card-link">View </a>
            </div>
        </div>
    )
}