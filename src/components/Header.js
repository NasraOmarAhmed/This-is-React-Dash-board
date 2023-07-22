import React from "react";




function Header (props){
  return(
    <div>
      <div className="header-parent" >
        <label style={{color:"white",paddingLeft:"2px",fontSize:"18px"}}>{props.name}</label><br></br> 
        <input type="text" placeholder={props.forms} style={{height: "30px", width: "440px", borderRadius:"5px", paddingLeft:"10PX" }}></input>
       
          </div>
          
        </div> 

    )
}


export default Header;














