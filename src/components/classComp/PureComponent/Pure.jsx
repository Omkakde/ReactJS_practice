import React, { PureComponent } from 'react'
// update only when data recive in change from parent 
export class Pure extends PureComponent {

  render() {
    return (
      <div>
        <h1>{this.props.text}</h1> 
      </div>
    )
  }
}

export default Pure
