import React from "react";
import { useState } from "react";



function Body (){    
    const [friend , setFriend] = useState()
    return(
        <div>
        <div className="forms">
            <label style={{color:"white",fontSize:"18px"}}>Would you recomended freecodecamp your current role?</label><br></br>
         <input type="radio" name="friend" value="Definitely" onChange={e=> setFriend (e.target.value)} />Definitely<br></br>
         <input type="radio" name="friend" value="May be" onChange={e=> setFriend (e.target.value)} />May be<br></br>
         <input type="radio" name="friend" value="Not sure" onChange={e=> setFriend (e.target.value)} />Not sure<br></br>
        </div> 
        <label style={{marginTop:"5px",marginLeft:"27px" , color:"white",fontSize:"18px"}} >What is favorite feature of freecodecamp?</label> <br></br>
        <input type="text" placeholder="Select an option" style={{height: "30px", width: "440px", borderRadius:"5px", paddingLeft:"10PX", marginLeft:"25px",border:"none"}} />
        </div>
    )
}

export default Body;