import React, {Component} from "react";

class Studentdetails extends Component{
    constructor(){
        super()
        this.state={
            name : "Shayana",
            id : "123"
        }
    }
    Change()
    {
        this.setState(
         {
             id : "456"
         }   
        )
    }
    render()
    {
        return(
            <div>
                <h4>Studentdetails</h4>
                <p>Id :{`${this.state.id}`}</p>
                <p>Name :{`${this.state.name}`}</p>
                <button onClick={()=>{this.Change()}}></button>
            </div>
        );
    }
}
extends default Studentdetails