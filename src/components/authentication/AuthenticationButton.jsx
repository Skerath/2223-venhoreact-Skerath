import {useAuth0} from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

export default function AuthenticationButton() {
    const {
        isAuthenticated,
        user,
    } = useAuth0();

    if (isAuthenticated) {
        const {picture, givenName} = user;
        return (
            <>

                <li className="nav-item">
                    <LogoutButton/>
                </li>
                <li className="nav-item">
                    <img style={{maxHeight: "40px"}} src={picture} alt={givenName} className="rounded"/>
                </li>
            </>
        );
    }

    return <LoginButton/>;
}