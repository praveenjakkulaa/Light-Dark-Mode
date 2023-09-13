import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  modeChange = () => {
    this.setState(prev => ({isDarkMode: !prev.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClass = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="app-container">
        <div className={`container ${modeClass}`}>
          <h1 className="heading"> Click To Change Mode </h1>
          <button className="button" onClick={this.modeChange}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
