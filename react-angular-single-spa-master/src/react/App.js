import React from 'react'
import e from '../event-bus'

export default class Root extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: ''
    }

    this.messageHandler = this.messageHandler.bind(this)
  }

  componentDidMount() {
    e.on('received', this.messageHandler)
  }

  componentDidUnmount() {
    e.off('received', this.messageHandler)
  }

  messageHandler(message) {
    this.setState({
      message: message.text
    })
  }

  sendMessage() {
    e.emit('message', { text: 'Hello from React 👋' })
  }

  render() {
    return (
      <div className="container-fluid pl-0 pr-0">
        <nav className="navbar navbar-light bg-primary">
          <span className="navbar-brand mb-0 h1" style={{ color: "white" }}>Micro Frontend</span>
          <span><button className="btn btn-success">{this.state.message}</button></span>
          <span className="float-right" style={{ color: "white" }}><button className="btn btn-secondary" onClick={this.sendMessage}>Create form in angular app</button></span>
        </nav>
      </div >
    )
  }
}
