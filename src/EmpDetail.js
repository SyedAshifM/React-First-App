import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetail = () => {

    const { empid } = useParams();

    const [empdata, empdatachange] = useState({})

    useEffect(() => {
        fetch("http://localhost:8000/employees/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div>

            <div className="container">
                <div className="card row" style={{ "textAlign": "left" }}>
                    <div className="card-title">
                        <h2>Employee Create</h2>
                    </div>
                    <div className="card-body"></div>

                    {empdata &&

                        <div>
                        <h2>The Employee Name is : <b>{empdata.name}</b> ({empdata.id})</h2>
                        <h3>Contact Details</h3>
                        <h5>Email is : {empdata.email}</h5>
                        <h5>Contact is : {empdata.mobile}</h5>
                       <Link to="/"  className="btn btn-danger"> Back to Listing </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default EmpDetail;