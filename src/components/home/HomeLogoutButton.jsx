import {useAuth0} from '@auth0/auth0-react';

function HomeLogoutButton() {
    const {logout} = useAuth0();
    return (
        <button id="4"
                style={{color: "white"}}
                className={`menu-item btn`}
                data-cy="authenticationbutton"
                onClick={() => logout({
                    returnTo: window.location.origin,
                })}
        >
            Log out
        </button>
    );
}

export default HomeLogoutButton;