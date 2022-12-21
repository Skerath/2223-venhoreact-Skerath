import {useAuth0} from '@auth0/auth0-react';
import {useCallback} from 'react';

function LoginButton({type, stylingOptions}) {
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
            className={`${type} btn`}
            onClick={handleLogin}
            style={stylingOptions ? stylingOptions : {margin:"auto"}}
        >
            Log in
        </button>
    );
}

export default LoginButton;