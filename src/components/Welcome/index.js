import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    isSubscribe: false,
  }

  isSubscribeFunction = () => {
    this.setState(state => ({isSubscribe: !state.isSubscribe}))
  }

  getButtonText = () => {
    const {isSubscribe} = this.state

    return isSubscribe ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="des">Thank you! Happy Learning</p>
        <button
          type="button"
          className="button"
          onClick={this.isSubscribeFunction}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
