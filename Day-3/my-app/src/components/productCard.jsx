export const ProductCard = (props) => {
    return (
        <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: "1rem", 
            border: "2px solid #e2e2e2", 
            borderRadius: "5px", 
            width: "22%",
            height: "300px",
            padding:"1rem"
            }}>
            <img style={{ height: "30" }} src={props.src} alt={props.alt} />
            <h2>{props.title}</h2>
            <p style={{ fontWeight: "bold" }}>{props.price}</p>
        </div>
    )
}