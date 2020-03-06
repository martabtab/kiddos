import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lastname: "",
      firstname: "",
      email: ""
    };

    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    fetch("https://post-a-form.herokuapp.com/api/employees/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Employee #${res} has been successfully added!`);
        }
      })
      .catch(e => {
        console.error(e);
        alert("There was an error when adding the employee.");
      });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // to "disable" the browser's default behavior when submitting a form
  submitForm(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="FormEmployee">
        <h1>Scrivici!</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Information</legend>
            <div className="form-data">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                onChange={this.onChange}
                value={this.state.lastname}
              />
            </div>

            <div className="form-data">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                onChange={this.onChange}
                value={this.state.firstname}
              />
            </div>

            <div className="form-data">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={this.onChange}
                value={this.state.email}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Send" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;
