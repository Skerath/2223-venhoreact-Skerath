import './Navbar.css';
import {NavLink} from "react-router-dom";
import {useEffect} from 'react';
import {useMediaQuery} from 'react-responsive';

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
            <nav className="autohide navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#main_nav" aria-controls="main_nav"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbar-brand">
                    <NavLink className="navbar-brand" as={NavLink} to="/">Wynngman</NavLink>
                </div>
                <div className="navbar-collapse collapse" id="main_nav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" as={NavLink} to="/locations">
                                Locations
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" as={NavLink} to="#" id="resourcesDropdown"
                                     role="button"
                                     data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Resources
                            </NavLink>
                            <div className="dropdown-menu dropdown-menu-dark" aria-labelledby="resourcesDropdown">
                                <NavLink className="dropdown-item" as={NavLink}
                                         to="/resources/ingredients">Ingredients</NavLink>
                                <NavLink className="dropdown-item" as={NavLink}
                                         to="/resources/materials">Materials</NavLink>
                                <NavLink className="dropdown-item" as={NavLink}
                                         to="/resources/powders">Powders</NavLink>
                                <NavLink className="dropdown-item" as={NavLink}
                                         to="/resources/potions">Potions</NavLink>
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" as={NavLink} to="/items/items">
                                Items
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" as={NavLink} to="/items/custom-items">
                                Custom Items
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};