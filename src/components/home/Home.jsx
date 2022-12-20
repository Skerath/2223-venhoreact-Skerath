import "./Home.css";
import {NavLink} from "react-router-dom";
import {useEffect} from "react";

const setOnMouseOverIndex = (menu) => {
    Array.from(document.getElementsByClassName("menu-item"))
        .forEach((item, index) => {
            console.log(item)
            console.log(index)
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
                         as={NavLink}
                         to="/items/new" replace>Create Item</NavLink>
                <NavLink key={"4"} id={"4"} className="menu-item" style={{textDecoration: "none", color: "inherit"}}
                         as={NavLink}
                         to="/account" replace>Login/Register</NavLink>
            </div>
            <div id="menu-background-pattern"></div>
            <div id="menu-background-image"></div>
        </div>
    );
}