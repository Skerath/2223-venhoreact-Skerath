import {useAuth0} from '@auth0/auth0-react';
import {useCallback} from 'react';

function LoginButton() {
    const {loginWithRedirect} = useAuth0();

    const handleLogin = useCallback(
        async () => {
            loginWithRedirect();
        },
        [loginWithRedirect],
    );

    return (
        <button className="btn bg-dark" style={{padding: 8, maxHeight: "40px", paddingLeft: "0", paddingRight: "0"}}
                onClick={handleLogin}>
            Log in
        </button>
    );
}

export default LoginButton;