import {Auth0Provider} from '@auth0/auth0-react';

function MyAuth0Provider({children}) {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={`${window.location.origin}/ingredients`}
            cacheLocation="localstorage"
        >
            {children}
        </Auth0Provider>
    );
}

export default MyAuth0Provider;