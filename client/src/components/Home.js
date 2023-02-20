

import React from 'react'
import {useState, useEffect} from 'react';
import axios from "axios"
import {useParams, Link, useNavigate} from 'react-router-dom';
import welcomeImage from "../images/homewheart.jpg";
import furnishLogo from"../images/Logo_black_CMYK+(PRINT).png"

const Home = () => {
    return (
    <div className="img" position="fixed" style= {{backgroundImage: `url(${welcomeImage})`}}>
    {/* <img src={furnishLogo} width="80" height="80" class="d-inline-block align-center" alt=""></img> */}
    {/* <h1 className='text-dark'>Thank you for creating homes for people in need.  </h1> */}
    <p className="mt-4">Click on the word donate above to start your donation</p>
    <div>
    
    {/* <Link to ={`/donate`}>
        <button className="btn btn-secondary">Donate Furnishings</button>
        </Link> */}
    </div>
    {/* <div>
    <p> Click here if you are a recipient</p>
    <Link to ={'/request'}><button className="btn btn-primary">Request Furnishings</button></Link>
    </div> */}
    </div>
    )
}

export default Home