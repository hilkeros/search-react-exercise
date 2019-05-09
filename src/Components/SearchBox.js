import React, { Component } from 'react';
import Results from './Results'


class SearchBox extends Component {
	constructor(props){
		super(props);
		this.state = {
			query: "",
			results: [],
			cursor: 0
		};
		this.api_url = "https://api.github.com/search/users?access_token=8c4fff076152b5fad83f6a26a82ed0f40bdf9be8&q="
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.getUsersOnGithub = this.getUsersOnGithub.bind(this);
	}

	handleKeyDown(event) {
		const { results, cursor } = this.state
		// arrow up/down buttons selects next/previous item
    if (event.keyCode === 38 && cursor > 0) {
      this.setState( prevState => ({
        cursor: prevState.cursor - 1
      }))
    } else if (event.keyCode === 40 && cursor < results.length - 1) {
      this.setState( prevState => ({
        cursor: prevState.cursor + 1
      }))
    } else if (event.keyCode === 13) {
    	//enter key redirects to the selected result
    	window.location.href = results[cursor].html_url;
    }
		else {
			//typed text triggers a search on the Github API
			this.setState({
				query: event.target.value
			});
			if (this.state.query.length > 0) {
				this.getUsersOnGithub(this.state.query)
			}
		}
	}

	getUsersOnGithub(query) {
		fetch(this.api_url + query)
		.then(results => {
			return results.json();
		}).then(data => {
			this.setState({
				results: data['items']
			})
		})
	}

	render() {
		return (
			<div>
				<input type="text" className="SearchInput"
									placeholder="type a github username"
									onKeyDown={this.handleKeyDown}
				/>
				
				<div className="Results">
					<Results results={this.state.results} cursor={this.state.cursor}/> 
				</div>
			</div>
		)
	}
}

export default SearchBox