import React, { Component } from 'react';
import Name from './Users';



class Welcome extends Component {
  state = {

    usersList: [
      { name: "Suresh", age: 30 },
      { name: "Ravi", age: 28 },
      { name: "Sarath", age: 30 }

    ],
    title: "User List From Component"
  }

  clickMe = () => {

    const value = this.state.usersList.map((user) => {
      const temp = user;
      return temp.age -= 10;

    });

    this.setState({ value });
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.clickMe}> Click Me</button>
        <br />
        {

          this.state.usersList.map((users) => {
            return <Name age={users.age}>{users.name}</Name>
          })

        }
     </div>
    )
  }

}


export default Welcome;