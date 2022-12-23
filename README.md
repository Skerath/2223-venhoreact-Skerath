# Examenopdracht Front-end Web Development / Web Services

> Schrap hierboven wat niet past

- Student: MAURICE CANTAERT
- Studentennummer: 202181905
- E-mailadres: maurice.cantaert@student.hogent.be

## Vereisten

Ik verwacht dat volgende software reeds geïnstalleerd is:

- [NodeJS](https://nodejs.org)
- [Yarn](https://yarnpkg.com)
- [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)

## Opstarten

1. maak ".env" aan in root folder.
1a. het bestand moet volgende structuur hebben:
`REACT_APP_API_URL=http://localhost:9000/api (of voor production db: https://51.89.23.246:9001/api)
REACT_APP_AUTH0_DOMAIN=dev-0zesadwtf74rit5f.us.auth0.com
REACT_APP_AUTH0_CLIENT_ID=wJznJLgDubQ5Hdysbu8dMR9n6atrUy4s
REACT_APP_AUTH0_API_AUDIENCE=https://wsproject.mauricec.be`

2. In package.json kan je het start script gebruiken om de web app op te starten of het test script gebruiken om de Cypress testen op te starten.
Of je gebruikt de commando's `react-scripts start` en `npx cypress open` in de root folder.

## Testen

1. maak ".env" aan in root folder.
1a. het bestand moet volgende structuur hebben:
`REACT_APP_API_URL=http://localhost:9000/api
REACT_APP_AUTH0_DOMAIN=dev-0zesadwtf74rit5f.us.auth0.com
REACT_APP_AUTH0_CLIENT_ID=wJznJLgDubQ5Hdysbu8dMR9n6atrUy4s
REACT_APP_AUTH0_API_AUDIENCE=https://wsproject.mauricec.be`

2. start de api op (zie readme webservices)
3. gebruik de "test" script in package.json of voer het commando `npx cypress open` uit in de root folder 
