export const Card =({urlToImage, title, children})=>{
    return (
        <>
        <div className="card">
            <div className="img-container">
                <img src={urlToImage} alt={title} />
            </div>
            <div className="news-container">
                <p>{title}</p>
            </div>
            {children}
        </div>
        </>
    )
}