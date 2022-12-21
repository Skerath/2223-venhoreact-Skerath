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
        <button
            type="button"
            className="nav-link btn"
            onClick={handleLogin}
        >
            Log In
        </button>
    );
}

export default LoginButton;