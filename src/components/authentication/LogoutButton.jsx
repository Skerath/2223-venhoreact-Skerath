import {useAuth0} from '@auth0/auth0-react';

function LogoutButton({type, stylingOptions}) {
    const {logout} = useAuth0();
    return (
        <button
            type="button"
            className={`${type} btn`}
            onClick={() => logout({
                returnTo: window.location.origin,
            })}
            style={stylingOptions ? stylingOptions : {margin: "auto"}}
        >
            Log out
        </button>
    );
}

export default LogoutButton;