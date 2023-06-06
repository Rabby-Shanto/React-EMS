import React from "react";

class Registration extends React.Component {
  componentDidMount() {

    $(this.dateInput).datepicker({
      format: "mm/dd/yyyy",
      autoclose: true,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    adminRegistration();
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <h5>
              <span style={{ color: "red", fontSize: "1.5rem" }}>
                <b>E</b>
              </span>
              mployee Management System
            </h5>
            <hr style={{ borderTop: "1px solid red" }} />

            <form id="adminSign" className="form" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">UserName</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  id="username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password2">Retype Password</label>
                <input
                  type="password"
                  name="password2"
                  className="form-control"
                  id="password2"
                  placeholder="Retype Password"
                />
              </div>
            </form>
            <button
              type="submit"
              className="btn btn-block btn-danger"
              value="submit"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
