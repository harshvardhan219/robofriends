import React ,{Component} from 'react';
import Cardlist from '../components/Cardlist.js';
import {robots} from '../components/robots';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll.js';
import './App.css';
const state = {
	
}
class App extends Component {
	constructor(){
	super()
	this.state = {
		robots : robots,
		searchfield: ''
	}

}

  componentDidMount () {
  	fetch('https://jsonplaceholder.typicode.com/users')
  	.then(response=>response.json())
  	.then(users => {this.setState({robots: users})});
  }

onSearchChange = (event) => {
	this.setState({searchfield : event.target.value})
	
}

	render(){

		const filterRobots = this.state.robots.filter(robots => 
	{
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	})

	return (
		<div className='tc'>
		<h1 className='f1'>RoBO that</h1>
		<Searchbox searchChange={this.onSearchChange}/>
		<Scroll>
		<Cardlist robots={filterRobots}/>
		</Scroll>
		</div>
		);
    }
} 

export default App;