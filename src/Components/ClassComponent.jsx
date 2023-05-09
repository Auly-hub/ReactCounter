/* eslint-disable no-unused-vars */
//rce - shortcut

//  import { Component } from 'react'

//  export class ClassComponent extends Component {
//      constructor (props) {
//          super(props)
//          this.state = {
//              count : 0,
//          }

//          this.handleIncrease = ()=>{
//              this.setState({
//                  count: this.state.count + 1            
//              })
//          }

//          this.handleDecrease = ()=>{
//              this.setState({
//                  count: this.state.count - 1             
//              })
//          }
//      }
//    render() {
//      return (
//        <div>
//          <h1>Counter App</h1>
//          <h2>Count:{this.state.count} </h2>
//          <button onClick={this.handleIncrease}>increase</button>
//          <button onClick={this.handleDecrease}>decrease</button>
//        </div>
//      )
//    }
//  }

//  export default ClassComponent

import React, { Component } from 'react'

class ClassComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 },

      this.handleincrement = () => { 
        this.setState({
          count: this.state.count + 5 
        }) 
      }

    this.handledecrement = () => {
      this.setState({
        count: this.state.count - 5
      })

    }
  }



  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleincrement}>increment</button>
        <button onClick={this.handledecrement}>decrement</button>
      </div>
    )
  }
}

export default ClassComponent




