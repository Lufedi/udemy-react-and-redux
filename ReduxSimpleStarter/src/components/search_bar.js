/**
 * Created by luisfediaz on 9/04/17.
 */


import React , {Component} from 'react';
//const  Component = React.component

/*const SearchBar = () => {
 return <input/>
};*/

class SearchBar extends Component{

 //create state
 constructor(props){
   super(props);
   this.state  = { term : 'initial value'};

 }
 onInputchange(term){
     this.setState({term});
     this.props.onSearchTermChange(term);
 }
 render(){
  return (
      <div className="search-bar">
      <input

          onChange={event => this.onInputchange(event.target.value)}/>
       Value of state : {this.state.term}
      </div>
  );
 }

}

export default  SearchBar;