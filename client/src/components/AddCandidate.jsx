import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";



const AddCandidate = () => {
    const navigate =  useNavigate();

    const [user, setUser] = useState({
        name:"",email:"",phone:""
    });

    let name, value;
    const handleInput =(event) =>{
        name=event.target.name;
        value= event.target.value;
        
        setUser({
            ...user,[name]:value
        });
    }

    const handleClick= async()=>{
        // const res = await axios.post("/addcandidate", user);

        // if(!res || res.data.status === 422){
        //     console.log("Invalid Data");
        // }else{
        //     // navigate('/home');
        //     console.log("Successfull");
        // }
    }



    const handleSubmit = (event) => {
        event.preventDefault();
    }



    return (
        <div className="container">
            <Link to={"/home"} className="nav-link">
                <h2>Back</h2>
            </Link>
            <div className="input-form">
                <form method="POST" onSubmit={handleSubmit}>


                    <div className="txt_field">
                        <input type="text" autoComplete="off"
                            name="name"
                            value={user.name}
                            onChange={handleInput}
                        />
                        <span />
                        <label>Name</label>
                    </div>

                    <div className="txt_field" >
                        <input type="email" autoComplete="off"
                            name="email"
                            value={user.email}
                            onChange={handleInput}
                        />
                        <span />
                        <label>Email</label>
                    </div>

                    <div className="txt_field" >
                        <input type="Number" autoComplete="off"
                            name="phone"
                            value={user.phone}
                            onChange={handleInput}
                        />
                        <span />
                        <label>Phone Number</label>
                    </div>

                    <button type="submit" onClick={handleClick}>Save</button>

                </form>
            </div>
        </div>
    );

}

export default AddCandidate;