import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsPlusSquareFill, BsHouseDoorFill, BsInfoSquareFill, BsTelephoneFill } from 'react-icons/bs';
import './EmpListing.css';

const EmpListing = () => {
    const [empdata, setEmpdata] = useState(null);
    const [selectedEmpId, setSelectedEmpId] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        setSelectedEmpId(selectedEmpId === id ? null : id);
    }

    const LoadEdit = (id) => {
        navigate("/employee/edit/" + id);
    }

    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:8000/employees/" + id, {
                method: "DELETE"
            })
            .then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            })
            .catch((err) => {
                console.log(err.message)
            })
        }
    }

    useEffect(() => {
        fetch("http://localhost:8000/employees")
            .then((res) => res.json())
            .then((resp) => setEmpdata(resp))
            .catch((err) => console.log(err.message));
    }, []);

    const rowColors = ["#f9f9f9", "#E2F5F5", "#dee2e6", "#CDDFEF", "#d8d6d6", "#f0f8ff"];

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-1 mb-2">
                    <div className="d-flex flex-column">
                        <Link to="/employee/create" className="btn btn-success mb-4">
                            <BsPlusSquareFill />
                        </Link>
                        <Link to="/" className="btn btn-primary mb-4">
                            <BsHouseDoorFill />
                        </Link>
                        <Link to="/about" className="btn btn-info mb-4">
                            <BsInfoSquareFill />
                        </Link>
                        <Link to="/contact" className="btn btn-warning mb-4">
                            <BsTelephoneFill />
                        </Link>
                    </div>
                </div>
                <div className="col-md-11">
                    <div className="card" style={{ background: "#0dcaf0" }}>
                        <div className="card-title">
                            <h2>Employee Listing</h2>
                        </div>
                        <div className="card-body">
                            <div className="divbtn">
                                <Link to="employee/create" className="btn btn-success">
                                    Add New (+)
                                </Link>
                            </div>
                            <table style={{ borderCollapse: 'collapse', width: '100%', border: '1px solid black', }}>
                                <thead>
                                    <tr>
                                        <th style={{ border: '1px solid black' }}>ID</th>
                                        <th style={{ border: '1px solid black' }}>Name</th>
                                        <th style={{ border: '1px solid black' }}>Email</th>
                                        <th style={{ border: '1px solid black' }}>Mobile</th>
                                        <th style={{ border: '1px solid black' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {empdata && empdata.map((item, index) => (
                                        <tr key={item.id} style={{ backgroundColor: rowColors[index % rowColors.length], border: '1px solid black' }}>
                                            <td style={{ border: '1px solid black' }}>{item.id}</td>
                                            <td style={{ border: '1px solid black' }}>{item.name}</td>
                                            <td style={{ border: '1px solid black' }}>{item.email}</td>
                                            <td style={{ border: '1px solid black' }}>{item.mobile}</td>
                                            <td style={{ border: '1px solid black' }}>
                                                <button onClick={() => LoadEdit(item.id)} className="btn btn-success">
                                                    Edit
                                                </button>
                                                <button onClick={() => Removefunction(item.id)} className="btn btn-danger">
                                                    Remove
                                                </button>
                                                <button onClick={() => LoadDetail(item.id)} className="btn btn-primary">
                                                    {selectedEmpId === item.id ? "Hide Details" : "Show Details"}
                                                </button>
                                                {selectedEmpId === item.id && (
                                                    <div className="dropdown-details">
                                                        <h3>Details:</h3>
                                                        <p><strong>ID:</strong> {item.id}</p>
                                                        <p><strong>Name:</strong> {item.name}</p>
                                                        <p><strong>Email:</strong> {item.email}</p>
                                                        <p><strong>Mobile:</strong> {item.mobile}</p>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmpListing;
