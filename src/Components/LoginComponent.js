import React, { Component } from "react";
import { Card} from "reactstrap";
import { Media } from 'reactstrap';
import envelope from '../assets/envelope.jpeg';

class Login extends Component {

    render() {
        var imgStyle = {
            maxHeight: 128,
            maxWidth: 128
        };
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <div className="offset-4">
                        <Media>
                            <Media top href="#">
                                <Media style={imgStyle} object src={envelope} alt="Generic placeholder image" />
                            </Media>
                        </Media>
                    </div>
                    <Card style={{ backgroundColor: 'lightgrey' }} >

                        <form>
                            <h3>Login to your account</h3>

                            <div className="form-group">
                                <label>Email ID / Phone Number</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>

                            <div className="row">
                                <div className="form-group offset-4">
                                    <button type="submit" className="btn btn-secondary "
                                    >Submit</button>
                                </div>
                            </div>
                            <p className="forgot-password text-center">
                                <a href="#" >  Forgot password/Claim your account </a>
                            </p>
                        </form>

                    </Card>

                </div>
            </div>

        );
    }
}
export default Login;