import {useAuth0} from '@auth0/auth0-react';
import {Navigate} from 'react-router-dom';
import {Error} from '../alert/Error';
import LoginButton from './LoginButton';
import {Message} from "../alert/Message";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

export default function AuthLanding() {
    const {error, isAuthenticated, isLoading} = useAuth0();

    if (error)
        return (
            <Container>
                <Row>
                    <Col>
                        <Message message={"Sorry, we were unable to sign you in, the error below might be useful."}
                                 style={{
                                     marginLeft: "15vw",
                                     marginRight: "15vw",
                                     marginTop: "20vh",
                                     marginBottom: "50vh"
                                 }}/>
                        <Error error={error}/>
                        <LoginButton type={"nav-link"}/>
                    </Col>
                </Row>
            </Container>
        );

    if (!isLoading)
        if (isAuthenticated)
            return <Navigate to="/"/>;
        else return (
            <Container>
                <Row>
                    <Col>
                        <Message message={"You need to login to access this page."}
                                 styling={{
                                     marginLeft: "15vw",
                                     marginRight: "15vw",
                                     marginTop: "20vh",
                                     marginBottom: "50vh"
                                 }}>
                            <div className="w-100">
                                <hr/>
                                <LoginButton type={"nav-link"}/>
                            </div>
                        </Message>
                    </Col>
                </Row>
            </Container>
        );

    return (
        <Container>
            <Row>
                <Col>
                    <Message message={"Please wait while we sign you in!"} styling={{
                        marginLeft: "15vw", marginRight: "15vw", marginTop: "20vh", marginBottom: "50vh"
                    }}/>
                </Col>
            </Row>
        </Container>
    );
}