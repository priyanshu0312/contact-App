import React from 'react'
import './style.css'

class AddContact extends React.Component {
  state = {
    name: '',
    email: '',
  }

  add = (e) => {
    e.preventDefault()
    if (this.state.name === '' || this.state.email === '') {
      alert('All Fields are mandatory')
      return
    }
    this.props.addContactHandler(this.state)
    this.setState({ name: '', email: '' })
    console.log(this.state)
   
  }
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col s12 ">
            <div id="content" class="m2">
              <header id="header" class=" pink darken-1">
                Add New Contact
              </header>

              <form class="col s10 offset-s1" onSubmit={this.add}>
                <div class="row">
                  <div class="input-field col s12">
                    <label>Name:</label>
                    <input
                      type="text"
                      value={this.state.name}
                      onChange={(e) => this.setState({ name: e.target.value })}
                    />
                  </div>

                  <div class="input-field col s12">
                    <label>Email:</label>
                    <input
                      type="email"
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                  </div>
                </div>

                {/* <div class="row">
                  <div class="input-field col s12">
                    <label for="message">Message: </label>
                    <textarea
                      id="message"
                      class="materialize-textarea"
                    ></textarea>
                  </div>
                </div> */}

                <div class="row">
                  <div class="col s10">
                    <button class="btn waves-effect waves-light  pink darken-2">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddContact
