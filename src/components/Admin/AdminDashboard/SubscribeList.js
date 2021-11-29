import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import app from "../../../Firebase/config";
import { getFirestore } from "firebase/firestore";
const SubscribeList =()=> {
    const [subscribeForm, setSubscribeForm] = useState([])
    const db = getFirestore(app);
    useEffect(() => {
      const collections = collection(db, "subscribelist");
      const q= query(collections, orderBy('timestamp', 'desc'))
      const unsub = onSnapshot(q, (snapshot)=>
      setSubscribeForm(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))));
    return unsub
  }, []);

    const showDate =(time)=> {
    let stringified = time;
    let split1 = stringified.split('T');
    let createdDate = split1[0].replace(/\-/g, '-');
     return createdDate;
  }
    return (
        <Container>
            <Row className="my-4">
                <h2 className="text-center heading-title-shadow">Subscribe List</h2>
            </Row>
            <Row className="mb-4">
                <table className="table table-bordered investorTable">
                    <thead>
                        <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Eamil</th>
                        </tr>
                    </thead>
                    <tbody>
                    {subscribeForm.map((data)=>(
                        <tr key={Math.random()} >
                            <th scope="row">{showDate(data.timestamp.toDate().toISOString())}</th>
                            <td>{data.email}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </Row>
        </Container>
    )
} 
export default SubscribeList;