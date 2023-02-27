import React from "react";
import { Link , useNavigate} from "react-router-dom";



const AddCandidate=()=>{
    return(
        <div className="container">
            <Link to={"/home"} className="nav-link">
                <h2>Back</h2>
            </Link>
        </div>
    );

}

export default AddCandidate;