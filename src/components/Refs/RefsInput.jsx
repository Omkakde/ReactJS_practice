import React, { Component } from 'react'
//default select my input box without click on input box user can type text
export class RefsInput extends Component {
    constructor(){
        super()
        this.inputRef = React.createRef;
    }
    componentDidMount(){
        this.inputRef.current.focus();
        console.log(this.inputRef.value);
    }

    clickHandler(){
        alert(this.inputRef.value)
    }
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef.value}/>
        <button omClick={this.clickHandler}>Sumbit</button>
        
      </div>
    )
  }
}

export default RefsInput
