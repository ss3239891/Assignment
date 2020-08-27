import React, {useState} from 'react'  
import {Table, Collapse, Navbar, NavbarBrand, Nav, NavItem,
        NavLink, UncontrolledDropdown } from 'reactstrap';
import {TabContent, TabPane} from 'reactstrap';
import Student from './Student';
import TabContainer from 'react-bootstrap/TabContainer'
import DataTable from './Table';
import { BrowserRouter as  Link } from "react-router-dom";
import { faUser, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ViewStudent() {  

        const [activeTab, setActiveTab] = useState('1');

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
                        
                <div className="container borderC"> 
                        <div>
                        <Navbar color="light" light expand="md">
                                <NavbarBrand  className="border border-dark col-md-2 " >LEAD logo</NavbarBrand>
                        
                                <Collapse  navbar>
                                <Nav className="mr-auto" navbar>
                                
                                <UncontrolledDropdown nav inNavbar>
                                
                                </UncontrolledDropdown>
                                </Nav>
                                <FontAwesomeIcon icon={faBell} />
                                <NavLink className="link" href="#"><FontAwesomeIcon icon={faUser} />Person Name</NavLink>        </Collapse>
                        </Navbar>
                        <ColoredLine color="lightgrey" />
                        </div>
                        
                        <div className="row ">
                        <TabContainer id="left-tabs-example" defaultActiveKey="first" className="activeTab" >
                                <div className="col-md-2 ">
                              
                                <Table className="cell" border="2" >
                                <thead>
                                <tr>
                                <td>Students</td>
                                
                                </tr>
                                </thead>
                                <tbody className="tbody">
                     
                               <Nav  className="flex-column">
                               
                              <NavItem className="borderC ">
                              <tr >
                             <Link   to={"/Students"}   className={activeTab === '1' ? 'active '  : ''} onClick={() => setActiveTab('1')} > -View Students</Link>
                                </tr>
                              </NavItem>
                               
                                <NavItem className="borderC">
                                <tr>
                               <Link  to="/Students/add" className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}> -Add Student</Link>
                                </tr>
                                </NavItem>
                        </Nav>
                        <tr>
                         <td></td>
                        </tr> 
                        <tr>
                         <td></td>
                        </tr>
                        <tr>
                         <td></td>
                        </tr>
                        <tr>
                         <td></td>
                        </tr>
                        <tr>
                         <td></td>
                        </tr>
                        <tr>
                         <td></td>
                        </tr>
                        <tr>
                         <td></td>
                        </tr>
                        <tr>
                         <td></td>
                        </tr>
                        <tr>
                         <td></td>
                        </tr>
                        <tr>
                         <td></td>
                        </tr>
                        <tr>
                         <td></td>
                        </tr>
                        <tr>
                         <td></td>
                        </tr>
                        <tr>
                         <td></td>
                        </tr>
                        <tr>
                         <td></td>
                        </tr>
                        <tr>
                         <td></td>
                        </tr>
                        <tr>
                         <td></td>
                        </tr>
                        <tr>
                         <td></td>
                        </tr>
                        <tr>
                         <td></td>
                        </tr>
                        <tr>
                         <td></td>
                        </tr>
                        <tr>
                         <td></td>
                        </tr>       
                      
                        </tbody>
                       </Table>
                    </div>
                    <div className="col-md-10">
                        <TabContent activeTab={activeTab} >
                                <TabPane tabId="1" >
                                        
                                        <DataTable />
                                                                
                                
                                                </TabPane>
                                        
                                        <TabPane tabId="2" >
                                                <Student />
                                                </TabPane>
                                        
                                        </TabContent>
                                        </div>
                                </TabContainer>
                                        
                </div>  
                
   </div>
        )  
   }  
  
 