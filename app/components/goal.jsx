import React from 'react'
import { render } from 'react-dom'


module.exports = function(data) {
	
	class Goal extends React.Component {
		constructor() {
      super();
      this.data = data;
    }

	  render() {
	    return (
	      <div>
	      </div>
	    )
	  }
	}

	module.exports = Goal;
};