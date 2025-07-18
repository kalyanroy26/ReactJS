export const Mybutton = (props)=>{
    return (
        <>
        <button className="btn" onClick={props.onClick} style={{backgroundColor:props.color}}>{props.type}</button>
        </>
    )
}