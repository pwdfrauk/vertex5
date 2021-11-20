import classes from './Video.module.css'
const Video =(props)=> {
    return(
        <div className={classes.VideoSize}>
             <iframe src={props.Url} title="video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}
export default Video ;