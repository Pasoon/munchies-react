// /* 
//     All of the scripts in the app are written in jsx. They are put into bundle.min.js using webpack.
//     To add a new script file, you must add it to the entry line in the webpack.config.js file.
// */
// import React from 'react';
// import ReactDOM from 'react-dom';
// require ('../sass/main.scss');


// class App extends React.Component {
//   constructor()
//   {
//     super();
//     this.state={
//       data: ''
//     }
//   }

//   componentDidMount(){
//     console.log("YOOOO")
//     fetch('127.0.0.1:5000/restaurants/')
//     .then((response) => response.json())
//     .then((findresponse) => {
//       console.log(findresponse.name)
//       this.setState({
//         data:findresponse.name
//       })
//     })

//   }

//   render(){
//     return(
//         <div>
//         {
//             this.state.data.map((dynamicData,i) =>
//           <div>
//             <span>{dynamicData.name}</span>
//             <span>{dynamicData.type}</span>
//           </div>
//           )
//         }
//         </div>
//     )
//   }
// }

// export default App;



// class showInfo extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       information: [],
//     }
//   }
// }

// class SearchBar extends React.Component {
//     constructor() {
//       super();
//       this.state = {
//         restaurantName: null,
//       };

//       this.search = this.search.bind(this);
//       this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange({ target }) {
//       this.setState({
//         [target.name]: target.value
//       });
//     }

//     search() {
//       fetch('http://127.0.0.1:5000/restaurantByName/'+this.state.restaurantName)
//     .then(response => {
//       return response.json();
//     }).then(data => {
//       let information = data.response.map((test) => {
//         <div key={test.results}>
//         </div>
//       })
//       this.setState({information: information});
//       console.log("state", this.state.information)
//     })
//   }

//     render() {
//       return <div>
//         <input
//           type="text"
//           name="restaurantName"
//           placeholder="Restaurant Name..."
//           value={ this.state.restaurantName }
//           onChange={ this.handleChange }
//         />


//         <button value="Send" onClick={ this.search }>search</button>
//         <div>{this.state.information}</div>
//       </div>
//     }
//   }

// export default SearchBar

// ReactDOM.render(
//     <SearchBar />,
//     document.getElementById('header')
// );
