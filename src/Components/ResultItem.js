import React, { Component } from 'react';

class ResultItem extends Component {
	render() {
		var item = this.props.item;
		return (
			<a href={item.html_url}>
				<img className="Avatar" src={item.avatar_url} alt={item.login}/>
				{item.login}
			</a>
		)
	}
}

export default ResultItem