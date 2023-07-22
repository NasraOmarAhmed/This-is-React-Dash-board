import React from "react";
import { useState } from "react";



function Footer (){
    const [check, setCheck] =useState() 
    return( 
        <div className="check">
            <label style={{marginLeft:"27px" , color:"white",paddingTop:"20px"}}> What would you like to see improved? (check all that apply) </label> <br></br>
        <input type="checkBox" name="check" value="Front-end projects" onChange={e=> setCheck (e.target.value)} style={{marginLeft:"27px" , color:"white" }} /> Front-end projects<br></br> 
        <input type="checkBox" name="check" value="Back-end project" onChange={e=> setCheck (e.target.value)} style={{marginLeft:"27px" , color:"white" }} /> Back-end project<br></br> 
        <input type="checkBox" name="check" value="Data visualization" onChange={e=> setCheck (e.target.value)} style={{marginLeft:"27px" , color:"white" }} /> Data visualization<br></br> 
        <input type="checkBox" name="check" value="Challenges" onChange={e=> setCheck (e.target.value)} style={{marginLeft:"27px" , color:"white" }} /> Challenges<br></br> 
        <input type="checkBox" name="check" value="Open source community" onChange={e=> setCheck (e.target.value)} style={{marginLeft:"27px" , color:"white" }} /> Open source community<br></br> 
        <input type="checkBox" name="check" value="Giter help rooms" onChange={e=> setCheck (e.target.value)} style={{marginLeft:"27px" , color:"white" }} /> Giter help rooms<br></br> 
        <input type="checkBox" name="check" value="Videos" onChange={e=> setCheck (e.target.value)} style={{marginLeft:"27px" , color:"white" }} /> Videos"<br></br> 
        <input type="checkBox" name="check" value="City Meetups" onChange={e=> setCheck (e.target.value)} style={{marginLeft:"27px" , color:"white" }} /> City Meetups<br></br> 
        <input type="checkBox" name="check" value="Wiki" onChange={e=> setCheck (e.target.value)} style={{marginLeft:"27px" , color:"white" }} /> Wiki<br></br> 
        <input type="checkBox" name="check" value="Forum" onChange={e=> setCheck (e.target.value)} style={{marginLeft:"27px" , color:"white" }} /> Forum<br></br> 
        <input type="checkBox" name="check" value="Additional Courses" onChange={e=> setCheck (e.target.value)} style={{marginLeft:"27px" , color:"white" }} /> Additional Courses<br></br> 
        <div className="last">
        <label style={{marginLeft:"27px" , color:"white",paddingTop:"20px"}} > Any Comments or Suggestions?</label>
        <input type="text" placeholder="Enter your comment here" style={{height: "90px", width: "440px", borderRadius:"5px", paddingLeft:"10PX", marginLeft:"25px" }}></input>
      
     <div className="btn">
     <button style={{ marginLeft:"25px", color:"white", backgroundColor:"green" , height:"40px", width:"455px",border:"none",borderRadius:"5px"}}>Submitt</button>
     </div>
     </div>
        </div>





    )

}

export default Footer;












