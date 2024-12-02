import React, { Component } from 'react'
import Pure from './Pure'
// Parent class send props data same again & again in Child class if declare PureComponent class
// then it only update if props is change from parent

export class Parent extends Component {
    constructor(){
        super(props)

        this.state={
            text:"Om"
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                text:"om"
            })
        },2000)
    }
  render() {
    console.log("parent class");
    return (
      <div>
         <Pure text={this.state.text}/>    
      </div>
    )
  }
}

export default Parent
