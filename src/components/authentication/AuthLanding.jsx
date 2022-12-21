import {useAuth0} from '@auth0/auth0-react';
import {Navigate} from 'react-router-dom';
import {Error} from '../alert/Error';
import LoginButton from './LoginButton';
import {Message} from "../alert/Message";

export default function AuthLanding() {
    const {error, isAuthenticated, isLoading} = useAuth0();

    if (error) return (<div className="container">
        <div className="row">
            <div className="col">
                <Message message={"Sorry, we were unable to sign you in, the error below might be useful."}
                         style={{marginLeft: "15vw", marginRight: "15vw", marginTop: "20vh", marginBottom: "50vh"}}/>
                <Error error={error}/>
                <LoginButton type={"nav-link"}/>
            </div>
        </div>
    </div>);

    if (!isLoading && isAuthenticated) return <Navigate to="/"/>;

    if (!isLoading && !isAuthenticated) return (<>
        <Message message={"You need to login to access this page."}
                 styling={{marginLeft: "15vw", marginRight: "15vw", marginTop: "20vh", marginBottom: "50vh"}}>
            <LoginButton type={"nav-link"}/>
        </Message>
    </>);

    return (<div className="container">
        <div className="row">
            <div className="col">
                <Message message={"Please wait while we sign you in!"} styling={{
                    marginLeft: "15vw", marginRight: "15vw", marginTop: "20vh", marginBottom: "50vh"
                }}/>
            </div>
        </div>
    </div>);
}