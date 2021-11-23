import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown  } from '@fortawesome/free-solid-svg-icons' 
import Nav from '../../components/Nav/nav'
import Welcome from '../../components/Welcome/Welcome'
import VideoContiner from '../../components/VideoContiner/VideoContiner'
import TrunYourHead from '../../components/TrunYourHead/TrunYourHead'
import Footer from '../../components/Footer/Footer'
import { useState } from 'react'
const arrowDown = <FontAwesomeIcon icon={faArrowDown} /> 

const VertexHome = ()=> {
    const [yourName, setYourName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')


const inputCangeHandler = (e) => {   
    if(e.target.name === 'name'  && e.target.type === 'text') {
        setYourName(e.target.value);
      }
      if(e.target.name === 'companyName' && e.target.type === 'text') {
        setCompanyName(e.target.value);
      }
      if(e.target.type === 'email') {
        setEmail(e.target.value);
      }
      if(e.target.type === 'textarea') {
        setComment(e.target.value);
      }
}

const InvestorFormHandler =(e)=> {
    e.preventDefault();
    console.log(yourName, companyName, email, comment)
}
    return(
        <>
        <Nav icon={arrowDown} />
        <Welcome icon={arrowDown} />
        <VideoContiner 
        JustifyContent = {'flex-start'}
        Text={'Find out more about how and why we’re remodelling the fitness industry'}
        DesText={`We’re very passionate about reshaping the fitness industry to create consumer models 
        that are affordable for all backgrounds, it has never been more popular to exercise
        and we’re creating longevity in health by introducing truly enjoyable workouts.`}
        Url = {"https://www.youtube.com/embed/yqWX86uT5jM"} />
        <VideoContiner 
        JustifyContent = {'flex-end'}
        PaddingTop = '0px'
        Text={`Find out more about our Founder & CEO, Josh Brooks`}
        DesText={`VERTEX 5 is lead by Dorset based entrepreneur Josh Brooks. Josh has previously
        lead marketing and growth teams from corporate businesses right through to
        startups going through their own successful fundraises. `}
        Url = {"https://www.youtube.com/embed/yqWX86uT5jM"} />
         <TrunYourHead 
          InputChange={inputCangeHandler}
          SubmitInForm = {InvestorFormHandler}
          stateName={yourName}
          stateEmail = {email}
          stateCompanyName = {companyName}
          stateComment = {comment} />
          <Footer />
        </>

    )
}
export default VertexHome;