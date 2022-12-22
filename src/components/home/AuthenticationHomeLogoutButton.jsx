import {useAuth0} from '@auth0/auth0-react';

function AuthenticationHomeLogoutButton() {
    const {logout} = useAuth0();
    return (
        <button id="4"
                style={{color: "white"}}
                className={`menu-item btn`}
                onClick={() => logout({
                    returnTo: window.location.origin,
                })}
        >
            Log out
        </button>
    );
}

export default AuthenticationHomeLogoutButton;