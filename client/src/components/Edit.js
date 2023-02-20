import React from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import welcomeImage from "../images/pencil1.jpg";

const Edit = () => {
    const {id} = useParams();
    const [hope, setHope] = useState({})
    const [name, setName] = useState({})
    const [item1, setItem1] = useState ("")
    const [item2, setItem2] = useState ("")
    const [item3, setItem3] = useState ("")
    const [item4, setItem4] = useState ("")
    const [size, setSize] = useState("")
    const [description, setDescription] = useState("")
    const [delivery, setDelivery] = useState ("")

    const navigate = useNavigate ();
    const [errors, setErrors] = useState("")

    useEffect(()=> {
        axios.get (`http://localhost:8000/api/hope/${id}`)
        .then((res) => {
            console.log("trying to get one",res.data);
            setName(res.data.name)
            setItem1(res.data.item1)
            setItem2(res.data.item2)
            setItem3(res.data.item3)
            setItem4(res.data.item4)
            setSize(res.data.size)
            setDelivery (res.data.delivery)
            setDescription(res.data.description)
        })
        .catch((err)=> {
            console.log (err.response)
        });
    }, []);

    const submitHandler = (e) => {
        e.preventDefault()

        axios.put(`http://localhost:8000/api/hope/${id}`, {
            name,
            item1,
            item2,
            item3,
            item4,
            size,
            delivery,
            description,

        })
        .then ((res)=>{
            console.log(res)
            navigate (`/viewdonation/${id}`)
        })
        .catch ((err)=> {
            console.log(err.response.data.error.errors)
            console.log("error is caught on the front end")
        })
    }

    return (
        <div className="App" style= {{backgroundImage: `url(${welcomeImage})`}}>
        <div classname="container">
        {/* <div className="App" style= {{backgroundImage: `url(${welcomeImage})`}}> */}
        
        {/* <div className="d-flex justify-content-end"><Link to="/">Back to Home</Link></div> */}
        <div className="row">
        <h4 className="col-md-8 offset-md-2 p-5">Need to edit your donation?? You can make changes here!</h4>
        
        <div className="col-md-8 offset-md-2 border border-3 ">
            
                    
                    <form className="mb-3" onSubmit={submitHandler}>
                    <div className="col-md-12">
                        {/* <label className = "form-label">Description:</label> */}
                        <input 
                        type="text" 
                        className="form-control" 
                        onChange={(e)=>setName(e.target.value)} 
                        value={name}
                        placeholder="Enter your name here"/>
                        </div>
                    {errors && errors.name ? <span className='text-danger'>{errors.name.message}</span>:null}<br></br>
                    <div className="col-md-12">
                        {/* <label className = "form-label">Item:</label> */}
                        <select className="form-select" onChange={(e)=>setItem1(e.target.value)} value={item1}>
                            <option selected> Choose from listed items</option>
                            <option value="Twin Bed">Twin Bed</option>
                            <option value="Queen Bed">Queen Bed</option>
                            <option value="Nightstand ">Nightstand</option>
                            <option value="Dresser">Dresser</option>
                            <option value="Couch">Couch</option>
                            <option value="Chair">Chair</option>
                            <option value="End Table">End Table</option>
                            <option value="Coffee Table">Coffee Table</option>
                            <option value="Floor Lamp">Floor Lamp</option>
                            <option value="Table Lamp">Table Lamp</option>
                            <option value="Dining Table">Dining Table</option>
                            <option value="Dining Chair">Dining Chair</option>
                            <option value="Barstools">Barstools</option>
                            <option value="Kitchen Essentials">Kitchen Essentials</option>
                            <option value="Bath Essentials">Bath Essentials</option>
                            <option value="Other">Other, will add in description</option>
                            <option value="None">No other donations at this time</option>
                        </select>
                        </div>
                    {errors && errors.item1 ? <span className='text-danger'>{errors.item1.message}</span>:null}<br></br>
                    <div className="col-md-12">
                        {/* <label className = "form-label">Item2:</label> */}
                        <select className="form-select" onChange={(e)=>setItem2(e.target.value)} value={item2}>
                            <option selected> Choose from listed items</option>
                            <option value="Twin Bed">Twin Bed</option>
                            <option value="Queen Bed">Queen Bed</option>
                            <option value="Nightstand ">Nightstand</option>
                            <option value="Dresser">Dresser</option>
                            <option value="Couch">Couch</option>
                            <option value="Chair">Chair</option>
                            <option value="End Table">End Table</option>
                            <option value="Coffee Table">Coffee Table</option>
                            <option value="Floor Lamp">Floor Lamp</option>
                            <option value="Table Lamp">Table Lamp</option>
                            <option value="Dining Table">Dining Table</option>
                            <option value="Dining Chair">Dining Chair</option>
                            <option value="Barstools">Barstools</option>
                            <option value="Kitchen Essentials">Kitchen Essentials</option>
                            <option value="Bath Essentials">Bath Essentials</option>
                            <option value="Other">Other</option>
                        </select>
                        </div>
                    {errors && errors.item2 ? <span className='text-danger'>{errors.item2.message}</span>:null}<br></br>
                    <div className="col-md-12">
                        {/* <label className = "form-label">Item:</label> */}
                        <select className="form-select" onChange={(e)=>setItem3(e.target.value)} value={item3}>
                            <option selected> Choose from listed items</option>
                            <option value="Twin Bed">Twin Bed</option>
                            <option value="Queen Bed">Queen Bed</option>
                            <option value="Nightstand ">Nightstand</option>
                            <option value="Dresser">Dresser</option>
                            <option value="Couch">Couch</option>
                            <option value="Chair">Chair</option>
                            <option value="End Table">End Table</option>
                            <option value="Coffee Table">Coffee Table</option>
                            <option value="Floor Lamp">Floor Lamp</option>
                            <option value="Table Lamp">Table Lamp</option>
                            <option value="Dining Table">Dining Table</option>
                            <option value="Dining Chair">Dining Chair</option>
                            <option value="Barstools">Barstools</option>
                            <option value="Kitchen Essentials">Kitchen Essentials</option>
                            <option value="Bath Essentials">Bath Essentials</option>
                            <option value="Other">Other</option>
                        </select>
                        </div>
                    {errors && errors.item3 ? <span className='text-danger'>{errors.item3.message}</span>:null}<br></br>
                    <div className="col-md-12">
                        {/* <label className = "form-label">Item:</label> */}
                        <select className="form-select" onChange={(e)=>setItem4(e.target.value)} value={item4}>
                            <option selected> Choose from listed items</option>
                            <option value="Twin Bed">Twin Bed</option>
                            <option value="Queen Bed">Queen Bed</option>
                            <option value="Nightstand ">Nightstand</option>
                            <option value="Dresser">Dresser</option>
                            <option value="Couch">Couch</option>
                            <option value="Chair">Chair</option>
                            <option value="End Table">End Table</option>
                            <option value="Coffee Table">Coffee Table</option>
                            <option value="Floor Lamp">Floor Lamp</option>
                            <option value="Table Lamp">Table Lamp</option>
                            <option value="Dining Table">Dining Table</option>
                            <option value="Dining Chair">Dining Chair</option>
                            <option value="Barstools">Barstools</option>
                            <option value="Kitchen Essentials">Kitchen Essentials</option>
                            <option value="Bath Essentials">Bath Essentials</option>
                            <option value="Other">Other</option>
                        </select>
                        </div>
                    {errors && errors.item4 ? <span className='text-danger'>{errors.item4.message}</span>:null}<br></br>
                    <div className="col-md-12">
                    {/* <label className = "form-label">Size:</label> */}
                    <select className="form-select" onChange={(e)=> setSize(e.target.value)} value = {size}>
                        {/* <option selected> Please select the size of the item</option> */}
                        
                        <option selected> What size are the items?</option>
                        <option value= "small"> Small</option>
                        <option value= "medium"> Medium</option>
                        <option value= "large"> Large</option>
                    </select>
                        {/* <input 
                        type="number" 
                        className="form-control" 
                        onChange={(e)=>setSize(e.target.value)} 
                        value={quantity}/> */}
                        </div>
                    {errors && errors.size ? <span className='text-danger'>{errors.size.message}</span>:null}<br></br>
                    <div className="col-md-12">
                    {/* <label className = "form-label">Delivery:</label> */}
                    <select class="form-select" 
                            onChange={(e)=>setDelivery(e.target.value)} 
                            value={delivery}>
                            <option selected> Do you need the donation picked up?</option>
                            <option value="Yes">Yes Please!!</option>
                            <option value="No">No Thanks, I will drop it off.</option>
                            </select>
                        </div>
                    {errors && errors.delivery ? <span className='text-danger'>{errors.delivery.message}</span>:null}<br></br>
                        <div className="col-md-12">
                        {/* <label className = "form-label">Description:</label> */}
                        <input 
                        type="text" 
                        className="form-control" 
                        onChange={(e)=>setDescription(e.target.value)} 
                        value={description}
                        placeholder="Add a brief description here"/>
                        </div>
                    {errors && errors.description ? <span className='text-danger'>{errors.description.message}</span>:null}<br></br>
                    {/* <Link to ={'/viewdonation/:id'}> */}
                        <button className="btn btn-primary col-4" type="submit">Submit</button>
                        {/* </Link> */}
                    </form>
                    
            </div>
        </div>
    </div>
    </div>
    )
}

export default Edit