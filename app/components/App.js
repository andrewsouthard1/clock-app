var React = require('react');
var Toolbar = require('./Toolbar');
var Clock = require('./Clock');

class App extends React.Component {
  render() {
    return (
      <div> 
        <Toolbar />
        <Clock />
      </div>
    )
  }
}

module.exports = App;