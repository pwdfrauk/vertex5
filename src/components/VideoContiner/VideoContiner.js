import { Col, Container, Row } from "react-bootstrap";
import Title from "../UI/Title/Title"
import DescriptionText from "../UI/DescriptionText/DescriptionText";
import Video from './Video/Video'
import classes from './VideoContiner.module.css'
const VideoCard = (props)=> {
    return(
        <Container className={classes.VideoContiner} style={{paddingTop:`${props.PaddingTop}`}}>
            <Row style={{justifyContent: `${props.JustifyContent}`}}> 
                <Col lg={7}>
                    <Title Size="30px" Bold="600" PaddingBottom='20px'>{props.Text}</Title>
                    <DescriptionText LineHeight='1.5'  PaddingBottom='20px' Color="#7E7E7E">{props.DesText}</DescriptionText>
                    <Video Url = {props.Url} />
                </Col>
            </Row>
        </Container>
    )
}
export default VideoCard;