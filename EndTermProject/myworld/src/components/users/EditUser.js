import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import './EditUser.css';

const EditUser = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    indate: "",
    checkin: "",
    outdate: "",
    checkout: "",
    number: "",
    payment:"",
  });
  const { name, indate, checkin, outdate, checkout, number, payment } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadUser();
  }, []);
  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    alert("Updated");
    navigate("/details");
  };
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);    
  };
  function Update(e) {
    e.preventDefault();
    axios.put(`http://localhost:3003/users/${id}`,user).then(navigate("/details"));
  }
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input type="text" className="form-control form-control-lg" placeholder="Enter Your Name" name="name" value={name} onChange={e => onInputChange(e)}/>
          </div>
          <div className="form-group">
            <input type="date" className="form-control form-control-lg my-3" placeholder="Date of entry" name="indate" value={indate} onChange={e => onInputChange(e)} /> 
          </div>
          <div className="form-group">
            <input type="time" className="form-control form-control-lg my-3" placeholder="Enter Check-In time" name="checkin" value={checkin}  onChange={e => onInputChange(e)} />
          </div>
          <div className="form-group">
            <input type="date" className="form-control form-control-lg my-3" placeholder="Date of exit" name="outdate" value={outdate} onChange={e => onInputChange(e)} /> 
          </div>
          <div className="form-group">
            <input type="text" className="form-control form-control-lg my-3"  placeholder="Enter Check-Out time " name="checkout" value={checkout} onChange={e => onInputChange(e)} />
          </div>
          <div className="form-group">
            <input type="number" className="form-control form-control-lg my-3" placeholder="Enter Your Number" name="number" value={number}  onChange={e => onInputChange(e)}  />
          </div>
          <div className="form-group">
            <input type="text" className="form-control form-control-lg my-3" placeholder=" Payment" name="payment" value={payment}  onChange={e => onInputChange(e)}  />
          </div>
          <button className="btn btn-warning btn-block my-3"type="submit" onClick={Update}>Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;