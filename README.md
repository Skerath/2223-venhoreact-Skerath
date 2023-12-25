# Examenopdracht Front-end Web Development

- Student: MAURICE CANTAERT
- Studentennummer: /
- E-mailadres: /

## Vereisten

Ik verwacht dat volgende software reeds geïnstalleerd is:

- [NodeJS](https://nodejs.org)
- [Yarn](https://yarnpkg.com)
- [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)

## Opstarten

1. maak ".env" aan in root folder.
1a. het bestand moet volgende structuur hebben:
```
REACT_APP_API_URL=https://myproductionapi.com:9001/api
REACT_APP_AUTH0_DOMAIN=dev-mydeveloperdomain.us.auth0.com
REACT_APP_AUTH0_CLIENT_ID=RandomTekenszeijazoejapoeiHOAOoaRandomTekens
REACT_APP_AUTH0_API_AUDIENCE=https://mywebapicom.projectbeheerde.be
```

2. In package.json kan je het start script gebruiken om de web app op te starten of het test script gebruiken om de Cypress testen op te starten.
Of je gebruikt de commando's `react-scripts start` en `npx cypress open` in de root folder.

## Testen

1. maak ".env" aan in root folder.
1a. het bestand moet volgende structuur hebben:
```
REACT_APP_API_URL=http://mydevelopmentapi:9000/api
REACT_APP_AUTH0_DOMAIN=dev-mydeveloperdomain.us.auth0.com
REACT_APP_AUTH0_CLIENT_ID=RandomTekenszeijazoejapoeiHOAOoaRandomTekens
REACT_APP_AUTH0_API_AUDIENCE=https://mywebapicom.projectbeheerde.be
```

2. start de api op (zie readme webservices)
3. gebruik de "test" script in package.json of voer het commando `npx cypress open` uit in de root folder 
