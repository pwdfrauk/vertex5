import VertexHome from "./containers/VertexHome/VertexHome";
 import AdminDashboard from "./components/Admin/AdminDashboard/AdminDashboard";
 import SubscribeComponent from "./components/Admin/AdminDashboard/SubscriberComponent";
 import InvestorComponent from "./components/Admin/AdminDashboard/InvestrotComponent";
 import { Routes, Route } from "react-router-dom";
 import {AuthProvider, useAuth} from "./contexts/AuthContext"
function App() {
  const {currentUser} = useAuth;
  return (
    <>
    <AuthProvider >
      <Routes>
          <Route path='/' element={ <VertexHome />} />
            <Route path='/admin' element={currentUser? <InvestorComponent/> : <AdminDashboard /> } />
            <Route path="/investorlist" element={currentUser?  <AdminDashboard /> : <InvestorComponent/> } />
            <Route path="/subscribelist" element={ currentUser?  <AdminDashboard /> : <SubscribeComponent />  } />
          <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </AuthProvider>
    </>
  );
}

export default App;

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