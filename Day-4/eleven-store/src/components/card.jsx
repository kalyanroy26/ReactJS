export const ProductCard = (props)=>{
    return(
        <>
        <div className="card">
            <img src={props.image} alt={props.title} />
            <p className="title">{props.title}</p>
            <p className="price">Price: $ {props.price}</p>
        </div>
        </>
    )
}