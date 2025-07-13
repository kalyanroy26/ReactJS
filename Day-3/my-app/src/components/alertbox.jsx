export const Alert = (props)=>{
    let backgroundColor;
    if (props.type === "success"){
        backgroundColor = "#1fab69"
    }
    else if(props.type === "error"){
        backgroundColor = "#d84242"
    }
    else if(props.type === "warning"){
        backgroundColor = "#f6ce1f"
    }
    else{
        backgroundColor = "#e2e2e2"
    }
    

    return (
        <div style={{background: backgroundColor,height:"200px",width:"300px", display:"grid", placeContent:"center"}}>
            <h1>{props.message}</h1>
        </div>
    )
}