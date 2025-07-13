export const Item = (props)=>{
    return (
        <li>{props.item}</li>
    )
}

export const Todo = (props)=>{
    return(
        <ul><Item key={props.index} item = {props.task}></Item></ul>
    )
}