export function Footer() {
    return (
        <footer className="d-flex align-items-center bg-dark" style={{marginTop: "35%", padding: "10px"}}>
            <img className="align-bottom" style={{
                height: "30px",
                width: "50px",
                margin: "10px"
            }}
                 src="https://hogent-web.github.io/webservices-slides/img/logo_white.png" alt="logo of HOGENT"/>
            <p className="col mb-0 text-muted" style={{paddingLeft: "2%"}}
            >Project
                made by Maurice Cantaert for HOGENT Front-end Web Development and Web Services</p>
        </footer>
    )
}