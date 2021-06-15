// create your App component here
import React from "react"

class App extends React.Component {

  state = {
    list: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          list: data.people
        })
      })
  }


  render() {
    return(
      <div>
        {this.state.list.map(dude => dude.name + ' ')}
      </div>
    )
  }


}

export default App;