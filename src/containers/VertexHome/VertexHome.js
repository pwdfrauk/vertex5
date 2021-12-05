import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown  } from '@fortawesome/free-solid-svg-icons' 
import Nav from '../../components/Nav/nav'
import Welcome from '../../components/Welcome/Welcome'
import VideoContiner from '../../components/VideoContiner/VideoContiner'
import TrunYourHead from '../../components/TrunYourHead/TrunYourHead'
import Footer from '../../components/Footer/Footer'
import PopUpbox from '../../components/PopUpBox/PopUpBox'
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import app from  "../../Firebase/config";
import { getFirestore } from "firebase/firestore";
import {  useEffect, useState } from 'react'
import spinner from '../../assets/img/spinnertrasnfer.gif'
import WOW from 'wowjs'

const arrowDown = <FontAwesomeIcon icon={faArrowDown} /> 

const VertexHome = ()=> {

    const [yourName, setYourName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')
    const [isSubscribe, setIsSubscribe] = useState(true);
    const [loading, setLoading] = useState(false);
    const [subsEmail, setSubsEmail] = useState('');
    const [formPopUpBox, setFormPopUpBox] = useState(false);
    const [subscribePopUpBox, setSubscribePopUpBox] = useState(false);

    const db = getFirestore(app);

    useEffect(()=>{
      new WOW.WOW().init();
    }, [] )

    const subsInputChangeHandler =(e)=> {
      if(e.target.type === 'email') {
        setSubsEmail(e.target.value);
      }
    }
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
      if(e.target.type === 'checkbox') {
          setIsSubscribe(e.target.checked)
      }
}
const InvestorFormHandler = async (e)=> {
    e.preventDefault();
    if(yourName && companyName && email) {
          setLoading(true)
        try {
          const docRef = await addDoc(collection(db, "inveslist"), {
            name: yourName,
            email: email,
            comment: comment,
            companyname:companyName,
            subscribe: isSubscribe,
            timestamp: serverTimestamp()
          })
          if(isSubscribe) {
             investorSubscribeHandler(email);
            console.log(isSubscribe)
          }
          setLoading(false);
          setFormPopUpBox(true);
          setYourName('');
          setCompanyName('');
          setEmail('');
          setComment('');
          setIsSubscribe(false);
          return docRef
        } catch(err) {
          alert('!Not Complate Please Submite again', err);
          setIsSubscribe(false);
          setLoading(false);
        }
      } 
  }
const subscribeFormHandler =async (e)=> {
  e.preventDefault();
  setLoading(true)
  if(subsEmail) {
    try {
      const docRef = await addDoc(collection(db, "subscribelist"), {
        email: subsEmail,
        timestamp: serverTimestamp()
      })
      setLoading(false);
      setSubscribePopUpBox(true);
      setSubsEmail('');
      return docRef;
    } catch(err) {
      alert('!Not Complate Please Submite again', err);
      setLoading(false);
      setSubscribePopUpBox(false);
    }
  }
}
const investorSubscribeHandler = async (email)=> {
  const subDocRef = await addDoc(collection(db, "subscribelist"), {
    email: email,
    timestamp: serverTimestamp()
  })
  return subDocRef;
}


const popUpBoxClose=()=> {
  setFormPopUpBox(false)
}
const sPopUpBoxClose=()=> {
  setSubscribePopUpBox(false)
}
return(
        <>
        {loading? <div className="spinner"><img src={spinner} alt="spinner" /></div> : ''}
        {formPopUpBox? 
        <PopUpbox
         popupTitle='Well done!'
         popupinfo="Form Submited Successfully"
         ClassName = 'alert-success'
         OnClick={popUpBoxClose}
         /> : '' }
        {subscribePopUpBox? 
        <PopUpbox
          popupTitle='Well done!'
         popupinfo="Subscribed Successfully"
         ClassName = 'alert-success'
         OnClick={sPopUpBoxClose}
         /> : ''}  
        <Nav icon={arrowDown} />
        <Welcome icon={arrowDown}
        animateClass='wow animate__animated animate__slideInLeft'
         />
        <VideoContiner 
        animateClass='wow animate__animated animate__slideInLeft'
        JustifyContent = {'flex-start'}
        Text={'Find out more about how and why we’re remodelling the fitness industry'}
        DesText={`We’re very passionate about reshaping the fitness industry to create consumer models 
        that are affordable for all backgrounds, it has never been more popular to exercise
        and we’re creating longevity in health by introducing truly enjoyable workouts.`}
        Url = {"https://www.youtube.com/embed/yqWX86uT5jM"} />
        <VideoContiner 
         animateClass='wow animate__animated animate__slideInRight'
        JustifyContent = {'flex-end'}
        PaddingTop = '0px'
        Text={`Find out more about our Founder & CEO, Josh Brooks`}
        DesText={`VERTEX 5 is lead by Dorset based entrepreneur Josh Brooks. Josh has previously
        lead marketing and growth teams from corporate businesses right through to
        startups going through their own successful fundraises. `}
        Url = {"https://www.youtube.com/embed/yqWX86uT5jM"} />
        <TrunYourHead 
        animateClass='wow animate__animated  animate__flash'
        InputChange={inputCangeHandler}
        SubmitInForm = {InvestorFormHandler}
        stateName={yourName}
        stateEmail = {email}
        stateCompanyName = {companyName}
        stateIsSubscribe = {isSubscribe}
        stateComment = {comment} 
        stateLoading = {loading}
        />
        <Footer
        Onchage={subsInputChangeHandler}
        Value={subsEmail}
        subscribFormHandler = {subscribeFormHandler}
        stateLoading = {loading}
        />
        </>

    )
}
export default VertexHome;

// import React from "react";
// import { useState, useEffect } from "react";
// import { collection, getDocs, addDoc, serverTimestamp } from "firebase/firestore";
// import { db } from "./Firebase/config";

// function App() {
//   const [investForm, setInvestForm] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//       const investFormData = await getDocs(collection(db, "inveslist"));
//       // console.log(parkingData);
//       setInvestForm(investFormData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };
    
//     getData();
//   }, []);
//  const addingDataToFirebase = async ()=> {
//   const docRef = await addDoc(collection(db, "inveslist"), {
//     name: "rubel",
//     email: "Roubel@gmail.com",
//     comment: 'Hello this one is my comment',
//     timestamp: serverTimestamp()
//   });
//   console.log("Document written with ID: ", docRef);
//   }
//  const showTime =(time)=> {
//     let stringified = time;
//     let split1 = stringified.split('T');
//     let Time = split1[1].split('.');
//     let createdTime = Time[0];
//      return createdTime
//   }
//   const showDate =(time)=> {
//     let stringified = time;
//     let split1 = stringified.split('T');
//     let createdDate = split1[0].replace(/\-/g, '-');
//      return createdDate;
//   }
//   return (
//     <div className="App">
//       <div className="header">
//         <h1>Parking Data</h1>
//       </div>

//       <div className="parking-data">
//         <div className="car-info">
//           <h3>Car Name</h3>
//           <h3>Car Number</h3>
//           <h3>Owner Name</h3>
//         </div>
//         {investForm.map((data) => (
//           <div className="invesFormData" key={Math.random()}>
//             <p>{data.name}</p>
//             <p>{data.email}</p>
//             <p>{data.comment}</p>
//             <p>{showTime(data.timestamp.toDate().toISOString())}</p>
//             <p>{showDate(data.timestamp.toDate().toISOString())}</p>
//           </div>
//         ))}
//         <button onClick={addingDataToFirebase} >Add Dta </button>
//       </div>
//     </div>
//   );
// }

// export default App;