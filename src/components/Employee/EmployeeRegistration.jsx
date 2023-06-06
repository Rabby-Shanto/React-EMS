import React, { useEffect } from "react";


class Employee extends React.Component {
  componentDidMount() {

    $(this.dateInput).datepicker({
      format: "mm/dd/yyyy",
      autoclose: true,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    validateForm();
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

            <form id="signup" onSubmit={this.handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="fname">First Name</label>
                  <input
                    type="text"
                    name="fname"
                    className="form-control"
                    id="fname"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="lname">Last Name</label>
                  <input
                    type="text"
                    name="lname"
                    className="form-control"
                    id="lname"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="number">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="form-control"
                    id="number"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                  type="text"
                  name="date"
                  className="form-control date"
                  id="date"
                  placeholder="Enter date"
                  ref={(input) => (this.dateInput = input)}
                />
              </div>

              <label htmlFor="inputGender">Gender</label>
              <div className="d-flex mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="flexRadioDefault1"
                    value="male"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Male
                  </label>
                </div>
                <div className="form-check mx-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="flexRadioDefault2"
                    value="female"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Female
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="flexRadioDefault3"
                    value="other"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault3"
                  >
                    Other
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="comment">Comment:</label>
                <textarea
                  className="form-control"
                  rows="5"
                  id="comment"
                  name="comment"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-block btn-danger"
                value="submit"
              >
                Add Employee
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Employee;
