import React, { Component } from 'react';
import {Pagination, PaginationItem, PaginationLink, Table, Button } from 'reactstrap';
import {  Collapse, Navbar,Nav,  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';   
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class DataTable extends Component {
    render() {
        return (
            <div>
                <Navbar light expand="md">

                    <Collapse navbar>
                        <Nav className="mr-auto" navbar>


                            <UncontrolledDropdown nav inNavbar>
                                <input className="input" type="Name" placeholder="Name" />

                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>

                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <input className="input" type="Age" placeholder="Age" />
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle className="inputdropdown border grey" nav caret >
                                    School
                    </DropdownToggle>
                                <DropdownMenu right >

                                    <DropdownItem>
                                        School Name
                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle className="inputdropdown border grey" nav caret>
                                    Class
                    </DropdownToggle>
                                <DropdownMenu right >

                                    <DropdownItem>
                                        3
                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle className="inputdropdown border grey" nav caret>
                                    Division
                    </DropdownToggle>
                                <DropdownMenu right >

                                    <DropdownItem>
                                        A
                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                        <Button className="btn btn-secondary ">Search</Button>
                    </Collapse>
                </Navbar>


                <Table striped border="2" id="emp" >
                    <thead>
                        <tr style={{ backgroundColor: "#9babf1" }}>
                            <th>ID^v</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>School</th>
                            <th>Class^v</th>
                            <th>Division</th>
                            <th>Status</th>
                            <th>      </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Student Name</td>
                            <td>10</td>
                            <td>LEAD School Karmala</td>
                            <td>3</td>
                            <td>A</td>
                            <td>Active</td>
                            <td><a href="http://localhost:3000/Students/add">Edit </a> <a href="#">Delete </a></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Student Name</td>
                            <td>10</td>
                            <td>LEAD School Karmala</td>
                            <td>3</td>
                            <td>A</td>
                            <td>Active</td>
                            <td><a href="http://localhost:3000/Students/add">Edit </a> <a href="#">Delete </a></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Student Name</td>
                            <td>10</td>
                            <td>LEAD School Karmala</td>
                            <td>3</td>
                            <td>A</td>
                            <td>Active</td>
                            <td> <a href="http://localhost:3000/Students/add">Edit </a> <a href="#">Delete </a></td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Student Name</td>
                            <td>10</td>
                            <td>LEAD School Karmala</td>
                            <td>3</td>
                            <td>A</td>
                            <td>Active</td>
                            <td> <a href="http://localhost:3000/Students/add">Edit </a> <a href="#">Delete </a></td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Student Name</td>
                            <td>10</td>
                            <td>LEAD School Karmala</td>
                            <td>3</td>
                            <td>A</td>
                            <td>Active</td>
                            <td>  <a href="http://localhost:3000/Students/add">Edit </a> <a href="#">Delete </a></td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>Student Name</td>
                            <td>10</td>
                            <td>LEAD School Karmala</td>
                            <td>3</td>
                            <td>A</td>
                            <td>Active</td>
                            <td> <a href="http://localhost:3000/Students/add">Edit </a> <a href="#">Delete </a></td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>Student Name</td>
                            <td>10</td>
                            <td>LEAD School Karmala</td>
                            <td>3</td>
                            <td>A</td>
                            <td>Active</td>
                            <td>  <a href="http://localhost:3000/Students/add">Edit </a> <a href="#">Delete </a></td>
                        </tr>


                    </tbody>
                </Table>



                <div className="row">
                    <div className="offset-4">
                        <Pagination >
                           
                            <PaginationItem>
                                <PaginationLink previous href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                    1
                              </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                    2
                              </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                    3
                               </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                    4
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                    5
                               </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink next href="#" />
                            </PaginationItem>
                          
                        </Pagination>
                    </div>
                </div>

                <div className="borderbutton">
                <FontAwesomeIcon size="lg" icon={faFileExcel} />
                    <ReactHTMLTableToExcel
                        className="btn "
                
                        table="emp"
                        filename="ReportExcel"
                        sheet="Sheet"
                        buttonText="Download Excel" 
                        icon="faFileExcel"
                        />
                   

                </div>
            </div>
        );
    }
}
export default DataTable;