export const Card =(props,children)=>{
    return (
        <>
        <div className="card">
            {children}
            <h4>Username: {props.username}</h4>
            <p>Username: {props.gender}</p>
            <p>{props.title}</p>
            <p>{props.city}</p>
        </div>
        </>
    )
}