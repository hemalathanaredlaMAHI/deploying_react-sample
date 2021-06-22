import './App.css';
import React, { Component } from 'react';
import './Myprofile.css';


class Myprofile extends Component {
  render() {
    return (
        <div>
          <form method="POST" action="/Myprofile">
            <div class="row">
              <div class="col-25">
                <label for="fname">Full Name:</label>
              </div>
              <div class="col-75">
                <input type="text" id="fname" name="FullName" placeholder="Enter your full name" required/>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="parentname">Parent Name:</label>
              </div>
              <div id="fm" class="col-75">
                <input type="text" id="parentname" name="pname" placeholder="Enter your parent name" required/>
                <select id="fm" name="number" id="number">
                  <option value="Mother">Mother</option>
                  <option value="Father">Father</option>
                  <option value="Sister/Brother">Sister/Brother</option>
                  <option value="Guardian">Guardian</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="Nation">Nationality:</label>
              </div>
              <div class="col-75">
                  <select name="Nation" id="Nation">
                    <option value="India">India</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Korea">Korea</option>
                    <option value="USA">USA</option>
                  </select>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="gender">Gender:</label>
              </div>
              <div class="col-75" name="gender">
                <input type="radio" required/>
                <span> Male</span>
                &nbsp;<input type="radio" required/>
                <span> Female</span><br/>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="dob">Date of Birth:</label>
              </div>
              <div class="col-75">
                  <input type="Date" id="dob" name="dob" placeholder="Enter your DOB" required/>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="address">Address:</label>
              </div>
              <div class="col-75">
                  <input type="textarea" id="address" name="address" placeholder="Enter Address" required/>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="Phone">Phone:</label>
              </div>
              <div class="col-75">
                  <input type="tel" id="Phone" name="Phone" placeholder="Enter Mobile Number" required/>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="course">B.Tech Branch</label>
              </div>
              <div class="col-75">
                    <select name="course" id="course">
                          <option value="CSE">CSE</option>
                          <option value="IT">IT</option>
                          <option value="ECE">ECE</option>
                          <option value="Mechanical">Mechanical</option>
                          <option value="EEE">EEE</option>
                          <option value="Civil">Civil</option>
                          <option value="Others">Others</option>
                    </select>
              </div>
            </div>
              <div class="row">
              <div class="col-25">
                <label for="passed">B.Tech Passed Out:</label>
              </div>
              <div class="col-75">
                    <select name="passed" id="passed">
                          <option value="2021">2021</option>
                          <option value="2020">2020</option>
                          <option value="2019">2019</option>
                          <option value="2018">2018</option>
                          <option value="2017">2017</option>
                          <option value="2016">2016</option>
                          <option value="2015">2015</option>
                    </select><br/>
              </div>
            </div>
            <div class="row" align="center">
              <input type="submit" value="Submit"/>
            </div>
            <br/>
            <br/>
            <br/>
        </form>
      </div>
      );
    }

    SaveEdits = () => {
        alert("Your details has been saved successfully.");
 
    }

};

export default Myprofile;