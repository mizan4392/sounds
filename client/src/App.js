import React from 'react';
import axios from 'axios'



class App extends React.Component{


  componentDidMount(){
    axios.get('/api/product/woods').then(res=>{
      console.log(res)
    })
  }

  render(){
    return (
      <div className="App">
        My App
      </div>
    );
  }
}

export default App;
