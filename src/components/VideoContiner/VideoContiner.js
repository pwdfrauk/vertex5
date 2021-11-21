import { Col, Container, Row } from "react-bootstrap";
import Title from "../UI/Title/Title"
import DescriptionText from "../UI/DescriptionText/DescriptionText";
import Video from './Video/Video'
import classes from './VideoContiner.module.css'
const VideoCard = (props)=> {
    return(
        <Container className={classes.VideoContiner} style={{paddingTop:`${props.PaddingTop}`}}>
            <Row style={{justifyContent: `${props.JustifyContent}`}}> 
                <Col md={6} lg={6} xl={6}>
                    <Title Size="25px" Bold="600" PaddingBottom='7px'>{props.Text}</Title>
                    <DescriptionText LineHeight='1.5'  PaddingBottom='10px' Color="#7E7E7E">{props.DesText}</DescriptionText>
                    <Video Url = {props.Url} />
                </Col>
            </Row>
        </Container>
    )
}
export default VideoCard;