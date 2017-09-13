import React , {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';


class SearchBar extends Component{

	constructor(props){
		super(props);
		this.state = {term:''};
		this.onInputChange = this.onInputChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}


	onSubmit(event){

		event.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({term:''});
	}



	render(){
		return (
			<form onSubmit = {this.onSubmit} className = "input-group"> 
			<input placeholder = "Get the average forecast for the next five days" 
			className = "form-control"
			value = {this.state.term}
			onChange = {this.onInputChange}/>
			<span className  = "input-group-btn">
				<button type = "submit" className = "btn btn-secondary"> Submit </button>
			</span>
			</form>
			);
	}

onInputChange(event){

this.setState({term:event.target.value});

}

}



function mapDispatchToProps(dispatch){

return bindActionCreators({fetchWeather},dispatch);

}


export default connect(null, mapDispatchToProps)(SearchBar);

// we dont care about the redux state here