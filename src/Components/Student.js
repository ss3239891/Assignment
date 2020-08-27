import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css';
class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      date: '',
      School: '',
      Class: '',
      Division: ''



    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log('Add Student: ' + JSON.stringify(this.state));
    alert('Add Student: ' + JSON.stringify(this.state));
    event.preventDefault();
  }
  render() {
    const ColoredLine = ({ color }) => (
      <hr
        style={{
          color: color,
          backgroundColor: color,
          height: 1
        }}
      />
    );

    return (

      <div className="auth-wrapper">

        <Form onSubmit={this.handleSubmit}>

          <FormGroup row>
            <h3>Add Student</h3>

          </FormGroup>
          <ColoredLine color="lightgrey" />
          <div className="col-md-8">
            <FormGroup row>
              <Label for="name" sm={2}>Full Name</Label>
              <Col sm={10}>
                <Input type="name" name="name" placeholder=""
                  value={this.state.name}
                  onChange={this.handleInputChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Date of Birth</Label>

              <Col sm={9}>
                <Input type="date" name="date" placeholder="/ / "
                  value={this.state.date}
                  onChange={this.handleInputChange} />
              </Col>
              <Col sm={1}>
                <FontAwesomeIcon icon={faCalendarAlt} />

              </Col>

            </FormGroup>
            <FormGroup row>
              <Label for="exampleSelect" sm={2}>School</Label>
              <Col sm={10}>
                <Input type="select" name="School" placeholder="Select"
                  value={this.state.School}
                  onChange={this.handleInputChange}>
                  <option></option>
                  <option>LEAD School Karmala</option>

                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleSelect" sm={2}>Class</Label>
              <Col sm={10}>
                <Input type="select" name="Class" placeholder="Select"
                  value={this.state.Class}
                  onChange={this.handleInputChange}>
                  <option></option>
                  <option>3</option>

                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="exampleSelect" sm={2}>Division</Label>
              <Col sm={10}>
                <Input type="select" name="Division" placeholder="Select"
                  value={this.state.Division}
                  onChange={this.handleInputChange}>
                  <option></option>
                  <option>A</option>

                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <legend className="col-form-label col-sm-2">Status</legend>
              <Col sm={10}>

                <FormGroup check inline>
                  <Label check>

                    <Input type="radio" name="radio2" />{' '}
             Active

          </Label>
                </FormGroup>


                <FormGroup check inline>

                  <Label check>

                    <Input type="radio" name="radio2" />{' '}
             Inactive

           </Label>

                </FormGroup>


              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={{ size: 10, offset: 3 }}>
                <button type="submit" className="borderbuttonform" >Save</button>
              </Col>
            </FormGroup>
          </div>

        </Form>

      </div>


    );

  }

}
export default Student;




