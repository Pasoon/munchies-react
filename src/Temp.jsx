/* 
    All of the scripts in the app are written in jsx. They are put into bundle.min.js using webpack.
    To add a new script file, you must add it to the entry line in the webpack.config.js file.
*/
import React from 'react';
import ReactDOM from 'react-dom';


class Temp extends React.Component {
  constructor()
  {
    super();
    this.state={
      data:[],
    }
  }

  componentDidMount(){
    console.log("YOOOO")
    fetch('http://127.0.0.1:5000/restaurants')
    .then((response) => response.json())
    .then((findresponse) => {
      this.setState({
        data:findresponse.items,
      })
    })

  }

  render(){
    return(
        <div>
        {
            this.state.data.map((dynamicData,i) =>
          <div>
            <span>{dynamicData.name}: </span>
            <span>{dynamicData.type}</span>
          </div>
          )
        }
        </div>
    )
  }
}

//export default Temp;