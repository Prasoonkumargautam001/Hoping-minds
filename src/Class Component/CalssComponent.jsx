import React from "react";
import { Link } from "react-router-dom";
class ClassComponent extends React.Component{
    render(){
        return(
            <div>
                <h2 className="text-center text-4xl">This is a Class Component</h2>
                <Link to={"/"}>Back To Home</Link>
            </div>
        )
    }
}
export default  ClassComponent