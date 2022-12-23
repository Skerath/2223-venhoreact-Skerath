import "./Home.css";
import {NavLink} from "react-router-dom";
import {useEffect} from "react";
import {useAuth0} from "@auth0/auth0-react";
import HomeLogoutButton from "./HomeLogoutButton";
import HomeLoginButton from "./HomeLoginButton";

const setOnMouseOverIndex = (menu) => {
    Array.from(document.getElementsByClassName("menu-item"))
        .forEach((item, index) => {
            item.onmouseover = () => {
                menu.style.setProperty("--active-index", index);
            }
        })
}


export function Home() {
    useEffect(() => {
        const menu = document.getElementById("menu");
        setOnMouseOverIndex(menu);
    }, []);

    const {
        isAuthenticated,
    } = useAuth0();

    return (
        <div id="menu">
            <div id="menu-items">
                <NavLink key={"1"} id={"1"} className="menu-item" style={{textDecoration: "none", color: "inherit"}}
                         as={NavLink}
                         to="/ingredients" replace>Ingredients</NavLink>
                <NavLink key={"2"} id={"2"} className="menu-item" style={{textDecoration: "none", color: "inherit"}}
                         as={NavLink}
                         to="/items" replace>Items</NavLink>
                <NavLink key={"3"} id={"3"} className="menu-item" style={{textDecoration: "none", color: "inherit"}}
                         as={NavLink} data-cy="menu-item"
                         to="/items/create" replace>Create Item</NavLink>
                {isAuthenticated ?
                    <HomeLogoutButton/> :
                    <HomeLoginButton/>}
            </div>
            <div id="menu-background-pattern"></div>
            <div id="menu-background-image"></div>
        </div>
    );
}