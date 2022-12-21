import {useAuth0} from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

export default function AuthenticationButton({type, stylingOptions}) {
    const {
        isAuthenticated,
        user,
    } = useAuth0();

    if (isAuthenticated) {
        const {picture, givenName} = user;
        return (
            <>

                <li className={type ? type : "nav-item"} style={{margin: "auto"}}>
                    <LogoutButton type={type ? type : "nav-link"}
                                  stylingOptions={stylingOptions ? stylingOptions : {margin: "auto"}}/>
                </li>
                {type ? null : <li className="nav-item">
                    <img style={{maxHeight: "45px", margin: "auto", borderRadius: "50%"}} src={picture} alt={givenName}
                         className="nav-link"/>
                </li>}

            </>
        );
    }

    return <LoginButton type={type ? type : "nav-link"}
                        stylingOptions={stylingOptions ? stylingOptions : {margin: "auto"}}/>;
}