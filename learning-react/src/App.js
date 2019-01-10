import React from 'react';

// state :

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       name: 'Vj',
//       age: 25
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//         <h2>{this.state.age}</h2>
//       </div>
//     );
//   }
// }

// changing State: 

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Changing the state
    // this.setState({ count: 10 })

    // Checking Previous state and adding the count
    this.setState(prevState => {
      return {
        count: prevState.count+1
      }
    })
  }
  render() {
    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
      </div>
    )
  }
}
export default App;
