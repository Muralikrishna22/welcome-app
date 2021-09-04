import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  subscribeBtn = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="welcome-container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        {isSubscribed ? (
          <button className="subscribe-btn" onClick={this.subscribeBtn}>
            Subscribe
          </button>
        ) : (
          <button className="subscribe-btn" onClick={this.subscribeBtn}>
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
