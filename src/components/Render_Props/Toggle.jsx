
import React from "react";
import useState from 'react';


function Toggle (){

    const [isOn, setIsOn]= useState(false);

    const toggle =()=>{
        setIsOn((prev) => !prev);
    }

    return render ({isOn,toggle});

}
export default Toggle;