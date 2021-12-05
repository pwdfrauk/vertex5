
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import comingSoon from '../../../assets/video/comingsoon.mp4'

const playCircleIcon = <FontAwesomeIcon icon={faPlayCircle} /> 
const Video =(props)=> {

    const videoPlayRef = useRef(null);
    const videoPlaceholderRef =useRef(null)

    const vidoePlay=()=> {
        videoPlayRef.current.play()
        videoPlaceholderRef.current.style.zIndex = "-10";
        console.log('viedeo click for play ')
    }
    const whenVideoFinish =()=> {
        videoPlaceholderRef.current.style.zIndex= "10";
    }
    return(

        <div className="videoPlyaArea">
            <video ref={videoPlayRef} width="100%" height="250" controls onEnded={whenVideoFinish}>
                <source src={comingSoon} type="video/mp4" />
                {/* <source src="movie.ogg" type="video/ogg" /> */}
                video not supported
            </video>
            <div ref={videoPlaceholderRef} className="videoPlaceholder">
               <i onClick={vidoePlay}> {playCircleIcon}</i>
            </div>
        </div>
        


    )
}
export default Video ;