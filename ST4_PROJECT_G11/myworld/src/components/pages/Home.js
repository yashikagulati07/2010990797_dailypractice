
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";



// const Home = () => {
const Home = () => {
    const [users, setUser] = useState([]);
    const [searchApiData, setSearchApiData] = useState([]);
    const [filterVal, setFilterVal] = useState('');
    useEffect(() => {
        const fetchData = () => {
            fetch('http://localhost:3003/users')
                .then(response => response.json())
                .then(json => {
                    setUser(json);
                    setSearchApiData(json);
                })
        }
        fetchData();
    }, [])
    const handleFilter=(e) => {
        if(e.target.value === ''){
            setUser(searchApiData)
        } else{
            const filterResult = searchApiData.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
            setUser(filterResult)
        }
        setFilterVal(e.target.value)        
    }

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data.reverse());

    };


    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    };
    return (
        <div className="container">
            <div className="py-4">
                <h2>Home Page</h2>

                <div>
                    <input className="submit-text my-3" placeholder="Search" value={filterVal} onInput={(e) => handleFilter(e)} />
                </div>
                <table className="table border shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className="btn btn-primary mr-2 mx-2" to={`/users/${user.id}`}> View </Link>
                                    <Link className="btn btn-outline-primary mr-2 mx-2" to={`/users/edit/${user.id}`} > Edit </Link>
                                    <Link className="btn btn-danger mx-2" onClick={() => deleteUser(user.id)} > Delete  </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;