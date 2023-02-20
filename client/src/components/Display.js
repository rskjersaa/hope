import React from 'react'
import {useState, useEffect} from 'react';
import axios from "axios"
import {Link, useNavigate, useParams} from 'react-router-dom'
import welcomeImage from "../images/frame.jpg";

const Display = (props) => {

    const [list, setList]= useState ([])
    const [hope, SetHope]= useState({})
    const [order,setOrder]= useState("ASC")
    const navigate=useNavigate()
    const {id} = useParams()


    useEffect(()=>{
        axios.get("http://localhost:8000/api/hope")
        .then((res)=>{
            console.log(res)
            setList(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]);
    const deleteHandler =(id) =>{
        axios.delete(`http://localhost:8000/api/hope/${id}`)
        .then((res)=>{
            console.log("trying to delete one", res.data)
            const filteredHope = list.filter((hope) => {
                return hope._id !== id;
            });
            setList (filteredHope)
            navigate('/')
        })
        .catch((err)=>{
            console.log(err)
    })
}
    const sorting=(col)=>{
        if(order==="ASC"){
            const sorted = [...list].sort((a,b)=>
            a[col].toLowerCase() > b [col].toLowerCase() ? 1 :-1
            );
            setList(sorted);
            setOrder("DSC")
        }
        // if(order==="DSC"){
        //     const sorted = [...list].sort((a,b)=>
        //     a[col].toLowerCase() < b [col].toLowerCase() ? 1 :-1
        //     );
        //     setList(sorted);
        //     setOrder("DSC")
        // }
    }

console.log(list)

    return (
        <div className="img2" style= {{backgroundImage: `url(${welcomeImage})`}}>
        <div className="container">
        <div className ="row">
        
            <div className="col-10 mx-auto">
            
            {/* <div className="d-flex justify-content-end"><Link to="/donate">Donate</Link></div> */}
                {/* <h4 className="purple-text">List of Donations</h4> */}
                <p className="text-danger">click on "Name" to sort</p>
        <table className= "table table-bordered">
        <thead>
            <tr >
                <th onClick={()=> sorting("name")}className="display-5" >Name</th>
                {/* <th className="display-5">Order ID</th> */}
                <th className="display-5">Item</th>
                <th className="display-5">Modify Your Donation</th>
                {/* <th className="display-5">Item 2</th> */}
                {/* <th className="display-5">Actions </th> */}
            </tr>
        </thead>
        <tbody>
            {list.map((hope, index)=> {
                return (
                    <tr key={index}>
                        {/* <td>{hope._id}</td> */}
                        <td>{hope.name}</td>
                        
                        <td>
                            <tr className="text-start">{hope.item1}</tr>
                            <tr className="text-start">{hope.item2}</tr>
                            <tr className="text-start">{hope.item3}</tr>
                            <tr className="text-start">{hope.item4}</tr>
                            
                        </td>
                        <td>
                        <Link to ={`/edit/${hope._id}`}>
                            <button className ="btn btn-info">Edit
                            </button></Link>
                            <Link to ={`/viewdonation/${hope._id}`}> <button className="btn btn-primary" >Details
                            </button></Link>
                            {/* <Link to ={`/inventory/${hope._id}`}>  */}
                            
                            <button className="btn btn-danger" onClick= {()=>deleteHandler(hope._id) }>Delete
                            </button>
                            {/* </Link> */}
                        </td>
                    </tr>
                )
            })}
        </tbody>

        </table>
        
            </div>
        </div>
    </div>
    </div>
    )
}

export default Display