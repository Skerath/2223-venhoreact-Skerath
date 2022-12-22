import {useAuth0} from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import {Image} from "react-bootstrap";

export default function AuthenticationButton() {
    const {
        isAuthenticated,
        user,
    } = useAuth0();

    if (isAuthenticated) {
        const {picture, givenName} = user;
        return (
            <>
                <LogoutButton/>
                &emsp;
                <Image rounded style={{maxHeight: "40px"}} src={picture} alt={givenName}/>
            </>
        );
    }

    return <LoginButton/>;
}