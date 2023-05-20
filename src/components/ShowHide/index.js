// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstName: true, isLastName: true}

  firstName = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  lastName = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state

    let FirstBox
    if (isFirstName) {
      FirstBox = (
        <div className="name-box">
          <p className="name">Joe</p>
        </div>
      )
    } else {
      FirstBox = null
    }

    let LastBox
    if (isLastName) {
      LastBox = (
        <div className="name-box">
          <p className="name">Jonas</p>
        </div>
      )
    } else {
      LastBox = null
    }

    return (
      <div className="full-page">
        <div className="container">
          <h1 className="heading">Show/Hide</h1>
          <div className="names-container">
            <div className="name-section">
              <button
                className="name-btn"
                type="button"
                onClick={this.firstName}
              >
                Show/Hide Firstname
              </button>
              <div>{FirstBox}</div>
            </div>
            <div className="name-section">
              <button
                className="name-btn"
                type="button"
                onClick={this.lastName}
              >
                Show/Hide Lastname
              </button>
              <div>{LastBox}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
