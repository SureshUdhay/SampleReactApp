import React from 'react';
import axios from 'axios';
export default class Test extends React.Component{
 
  constructor(props){
    super(props);
    this.state={
      persons:[]
    };
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
      this.setState({persons:res.data});
      console.log(this.state.persons.persons);
      
    }).catch(error=>console.log(error));
  }


  print=()=>{
   
     console.log("hellooo from function");

    
     return(
    <div>
      hellooo
      </div>
  
     )
  }

  render(){

    return(
      <div>
        <h2>Data from API</h2>
        
        <button type="button" onClick={this.print}>Click Me</button>
       
        <ul>
     {this.state.persons.map((person,key)=>
     <div key={key}>
     <li>{person.userId}</li>
     <li>{person.title}</li>
     
     </div>
     )}
    </ul>

        </div>

    );
  }

}