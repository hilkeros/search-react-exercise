import React, { Component } from 'react';
import ResultItem from './ResultItem'

class Results extends Component {
	render() {
		const { results, cursor } = this.props;
		if (results && results.length > 0) {
			return (
				<div>
					<div className='ResultsTitle'>GITHUB USERS</div>
					{results.map((item, i) => 
						<div key={i} className={cursor === i ? "ResultItem--Selected" : "ResultItem"}>
							<ResultItem item={item}/>
						</div>
					)}
				</div>
			)
		} else {
			return (<div></div>)
		}
	}
}

export default Results