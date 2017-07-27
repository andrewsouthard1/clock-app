var React = require('react');

class Toolbar extends React.Component {
  
  render() {
    var food = ['New York', 'London', 'Paris', 'Cape Town'];
    return(
      <ul>
       {food.map(function(item){
        return(
          <li key={item}>
            {item}
          </li>
        )
       })}
      </ul>
    )

  }
}

module.exports = Toolbar;