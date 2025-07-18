export const FormInput = (props)=>{
    return(
        <>
        <h2>{props.count}</h2>
        <input type="text"  id="textbox" onChange={(e)=> props.setText(e.target.value)} placeholder="type here" />
        </>
    )
}