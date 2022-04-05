import React, {Component} from "react";
 class College extends Component{
     render(){
         return(
         <div>
         <p> Student name : {`${this.props.Studentname}`} </p>
         <p> Student id : {`${this.props.Studentid}`} </p>

         </div>
     )
 }
}
class Student extends React.Component{
    render(){
        return(
            <div>
                <College Studentname = "Shayana"/>
                <College Studentid = "123"/>

            </div>
        )
    }
}
export default Student

