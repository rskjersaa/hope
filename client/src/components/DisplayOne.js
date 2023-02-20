import React from 'react'
import {useState, useEffect} from 'react';
import axios from "axios"
import {useParams, Link, useNavigate} from 'react-router-dom';
import welcomeImage from "../images/redthanks.jpg";

const DisplayOne = (props) => {

    const [hope, setHope]= useState ({})
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/hope/${id}`)
        .then((res)=>{
            console.log("trying to get one", res.data)
            setHope(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    const deleteHandler =() =>{
        axios.delete(`http://localhost:8000/api/hope/${id}`)
        .then((res)=>{
            console.log("trying to delete one", res.data)
            navigate('/')
        })
        .catch((err)=>{
            console.log(err)
    })
    }
    // const handleClick = event => {
    //     event.currentTarget.disabled = true;
    //     console.log('button clicked');
    // };
    // const [like,setLlike]=useState(false);
    return (
        <div className="App" style= {{backgroundImage: `url(${welcomeImage})`}}>
        <div className = "container">
        <div className="d-flex justify-content-end"><Link to="/">Back to Home</Link></div>
        <h2 className="">View your Donation Details:  {hope.item}</h2>
        <div className=" border border-dark p-3 height-">
            <table className="col-md-10">
                {/* <tr>
                    <th className="p-4">Item(s):</th>
                    <td>{hope.time}</td>
                </tr> */}
                <tr>
                    <th className="p-4">Item 1:</th>
                    <td>{hope.item1}</td>
                    
                </tr>
                <tr>
                    <th className="p-4">Item 2:</th>
                    <td>{hope.item2}</td>
                    
                </tr>
                <tr>
                    <th className="p-4">Item 3:</th>
                    <td>{hope.item3}</td>
                    
                </tr>
                <tr>
                    <th className="p-4">Item 4:</th>
                    <td>{hope.item4}</td>
                    
                </tr>
                <tr>
                    <th className="p-4">Size:</th>
                    <td>{hope.size}</td>
                    
                </tr>
                <tr>
                    <th className="p-4">Delivery:</th>
                    <td>{hope.delivery}</td>
                    
                </tr>
                <tr>
                    <th className="p-4">Description:</th>
                    <td>{hope.description}</td>
                </tr>
            </table>
            <div className="d-flex justify-content-around">
            {/* <div className="d-flex justify-content-end"><button className ="btn btn-danger" onClick={deleteHandler}>Complete Your Request {hope.item}</button></div> */}
            </div>
            <div>
                <p>This is your tax receipt! Please keep for your records.</p>
            </div>
        </div>
    </div>
    </div>
    )
}

export default DisplayOne