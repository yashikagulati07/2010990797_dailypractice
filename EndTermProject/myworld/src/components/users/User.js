import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    indate: "",
    checkin: "",
    outdate: "",
    checkout: "",
    number: "",
    payment:"",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/details"> Back to details </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item my-1 mx-4 my-2" >Name : {user.name}</li>
        <li className="list-group-item my-1 mx-4 my-2" >Entry Date : {user.indate}</li>
        <li className="list-group-item my-1 mx-4 my-2" >Check-In : {user.checkin}</li>
        <li className="list-group-item my-1 mx-4 my-2" >Exit Date : {user.outdate}</li>
        <li className="list-group-item my-1 mx-4 my-2" >Check-Out : {user.checkout}</li>
        <li className="list-group-item my-1 mx-4 my-2" >Number : {user.number}</li>
        <li className="list-group-item my-1 mx-4 my-2" >Payment : {user.payment}</li>
      </ul>
    </div>
  );
};

export default User;