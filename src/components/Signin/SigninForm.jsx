import React from "react";

class Signin extends React.Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-6 mt-5">
            <h5>
              <span style={{ color: "red", fontSize: "1.5rem" }}>
                <b>E</b>
              </span>
              mployee Management System
            </h5>
            <hr style={{ borderTop: "1px solid red" }} />

            <form id="loginForm" className="form" method="POST">
              <div className="form-row">
                <label htmlFor="emailLogin">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="emailLogin"
                  placeholder="Email"
                />
              </div>

              <div className="form-row">
                <label htmlFor="passwordLogin">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="passwordLogin"
                  placeholder="Password"
                />
              </div>

              <button
                type="submit"
                className="btn btn-block btn-danger mt-2"
                value="submit"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
