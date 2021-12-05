import { Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import app from "../../../Firebase/config";
import { getFirestore } from "firebase/firestore";
const InvestList =()=> {
    const [investList, setInvestList] = useState([]);
    const db = getFirestore(app);
useEffect(() => {
      const collections = collection(db, "inveslist");
      const q= query(collections, orderBy('timestamp', 'desc'))
      const unsub = onSnapshot(q, (snapshot)=>
      setInvestList(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))));
    return unsub
  }, []);

    const showDate =(time)=> {
    let stringified = time;
    let split1 = stringified.split('T');
    let createdDate = split1[0].replace(/\-/g, '-');
     return createdDate;
  }
    return (<>
        <Container>
            <Row className="my-4">
                <h2 className="text-center heading-title-shadow">Investor List</h2>
            </Row>
            <Row className="mb-4">
                <table className="table table-bordered investorTable">
                    <thead>
                        <tr>
                        <th scope="col">Submited Date</th>
                        <th scope="col">Name</th>
                        <th scope="col">Eamil</th>
                        <th scope="col">Company Name</th>
                        <th scope="col">Comment</th>
                        <th scope="col">Subscribe</th>
                        </tr>
                    </thead>
                    <tbody>
                    {investList.map((data)=>(
                        <tr key={Math.random()} >
                            <th scope="row">{showDate(data.timestamp.toDate().toISOString())}</th>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.companyname}</td>
                            <td>{data.comment}</td>
                            <td>{data.subscribe? 'Yes': 'No'}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </Row>
        </Container>
        </>
    )
} 
export default InvestList;