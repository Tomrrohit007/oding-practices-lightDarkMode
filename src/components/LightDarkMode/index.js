import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {background: 'light'}

  onTap = () => {
    const {background} = this.state
    if (background === 'light') {
      this.setState({background: 'dark'})
    } else {
      this.setState({background: 'light'})
    }
  }

  render() {
    const {background} = this.state
    let backgroundStatus
    if (background === 'light') {
      backgroundStatus = (
        <div className="card light-card">
          <h1 className="light-heading">Click to Change Mode</h1>
          <button type="button" onClick={this.onTap}>
            Dark Mode
          </button>
        </div>
      )
    } else {
      backgroundStatus = (
        <div className="card dark-card">
          <h1 className="dark-heading">Click to Change Mode</h1>
          <button type="button" onClick={this.onTap}>
            Light Mode
          </button>
        </div>
      )
    }
    return <div className="container">{backgroundStatus}</div>
  }
}

export default LightDarkMode
