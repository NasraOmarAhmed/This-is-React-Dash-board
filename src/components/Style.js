import React from "react";
import Header from "./Header";


function Style (){
    return(
        <div>
<Header name="Name" forms="Enter your name" /> 
<Header name="Email" forms="Enter your email" /> 
<Header name="Age/Optional" forms="Age" /> 
<Header name="Which option best describes your current role?" forms="Select current role" /> 
</div> 
    )
}
export default Style;