import {useAuth0} from '@auth0/auth0-react';

function LogoutButton() {
    const {logout} = useAuth0();
    return (
        <button type="button" className="btn bg-dark" style={{padding: 8, maxHeight: "40px", paddingLeft: "0", paddingRight:"0"}}
                onClick={() => logout({returnTo: window.location.origin,})}>
            Log out
        </button>
    );
}

export default LogoutButton;