import {useEffect,useState}from 'react'
import {Link, useParams } from "react-router-dom";

const StudentDetails = () => {
  const {id} = useParams();
  const [stdData, setStdData] = useState({});
  useEffect(() => {
    fetch("http://localhost:8000/student/" + id)
      .then((res) => res.json())
      .then((data) => {
        setStdData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  
  return (
    <div className="row">
      <div className="offset-lg3 col-lg-6">
        <div className="container">
          <div className="card row">
            <div className="card-title">
              <h2>Student Details</h2>
            </div>
            {stdData && (
              <div className="card-body">
                <img src={stdData.photo + "&" + stdData.id} alt="student" />
                <div className="card-text">
                  <h3 className="std-center">
                    {stdData.name} - ({stdData.id})
                  </h3>
                  <h4>Contact Details:</h4>
                  <h5>Email:{stdData.email}</h5>
                  <h5>Phone:{stdData.phone}</h5>
                  <h5>Birthday:{stdData.birthday}</h5>
                  <h5>Section:{stdData.section}</h5>
                  <h5>Major:{stdData.major}</h5>
                  <h5>Admission Year:{stdData.admissionYear}</h5>
                </div>
                <Link className="btn btn-danger" to="/">
                  Back to Listing
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDetails