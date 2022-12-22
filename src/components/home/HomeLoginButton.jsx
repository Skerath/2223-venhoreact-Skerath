import {useAuth0} from '@auth0/auth0-react';
import {useCallback} from 'react';

function HomeLoginButton() {
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
            style={{color: "white"}}
            className={`menu-item btn`}
            onClick={handleLogin}
        >
            Log in
        </button>
    );
}

export default HomeLoginButton;