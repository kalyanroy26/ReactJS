export const ProfileCard = (props)=>{
    return(
        <div className="card">
            <img height={props.height} src={props.pic} alt="user" />
            <h2>{props.name}</h2>
            <p>{props.role}</p>
        </div>
    )
}