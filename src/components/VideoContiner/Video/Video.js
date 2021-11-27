
const Video =(props)=> {
    return(
        <div className={props.Class}>
             <iframe src={props.Url} title="video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}
export default Video ;