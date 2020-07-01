import React from "react";
import "./todo.scss";
import Header from "../components/header"


class ToDo extends React.Component {
    constructor(props){
        super(props);
        this.state ={

        }
    }


    render(){
        return(
            <div>
                <Header />
            </div>
        )
    }
}

export default ToDo;