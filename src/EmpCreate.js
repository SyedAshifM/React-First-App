import { Link } from "react-router-dom";

const EmpCreate = () => {
    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <div className="container">
                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title">
                                <h2>Employee Create</h2>

                            </div>
                            <div className="card-body" >
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input className="form-control"></input>
                                    </div>

                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-check">
                                    <input  type="checkbox" className="form-check-input"></input>
                                        <label className="form-check-label">Is Active</label>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                    <button className="btn btn-success" type="submit">Save</button>
                                    <Link  to="/" className="btn btn-danger">Back</Link>
                                        
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default EmpCreate;