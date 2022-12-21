import './Navbar.css';
import {NavLink} from "react-router-dom";
import {useEffect} from 'react';
import {useMediaQuery} from 'react-responsive';
import AuthenticationButton from "../authentication/AuthenticationButton";

let isMobile;

export default function Navbar() {
    // TODO fix autoscroll
    isMobile = useMediaQuery({query: `(max-width: 760px)`});

    useEffect(() => {
        if (isMobile) {
            let el_autohide;
            el_autohide = document.querySelector('.autohide');

            if (el_autohide) {
                let last_scroll_top = 0;
                window.addEventListener('scroll', function () {
                    let scroll_top = window.scrollY;
                    if (scroll_top < last_scroll_top) {
                        el_autohide.classList.remove('scrolled-down');
                        el_autohide.classList.add('scrolled-up');
                    } else {
                        el_autohide.classList.remove('scrolled-up');
                        el_autohide.classList.add('scrolled-down');
                    }
                    last_scroll_top = scroll_top;
                });
            }
        }
    });

    return (
        <header>
            <nav className="autohide navbar navbar-expand-sm navbar-dark bg-dark fixed-top px-3">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#main_nav" aria-controls="main_nav"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbar-brand">
                    <NavLink className="navbar-brand" as={NavLink} to="/" replace>Venho</NavLink>
                </div>
                <div className="navbar-collapse collapse" id="main_nav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        </li>
                        <li className="nav-item" style={{margin: "auto"}}>
                            <NavLink className="nav-link" as={NavLink} to="/ingredients" replace>
                                Ingredients
                            </NavLink>
                        </li>
                        <li className="nav-item" style={{margin: "auto"}}>
                            <NavLink className="nav-link" as={NavLink} to="/items" replace>
                                Items
                            </NavLink>
                        </li>
                        <li className="nav-item" style={{margin: "auto"}}>
                            <NavLink className="nav-link" as={NavLink} to="/items/create" replace>
                                Create Item
                            </NavLink>
                        </li>
                        <AuthenticationButton/>
                    </ul>
                </div>
            </nav>
        </header>
    );
};