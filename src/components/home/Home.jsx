import "./Home.css";
import {NavLink} from "react-router-dom";
import {useEffect} from "react";

const setOnMouseOverIndex = (menu) => {
    Array.from(document.getElementsByClassName("menu-item"))
        .forEach((item, index) => {
            console.log(item)
            console.log(index)
            item.onmouseover = () => {
                menu.dataset.activeIndex = String(index);
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
                         to="/resources/ingredients" replace>Ingredients</NavLink>
                <NavLink key={"2"} id={"1"} className="menu-item" style={{textDecoration: "none", color: "inherit"}}
                         as={NavLink}
                         to="/resources/custom-items" replace>Custom Items</NavLink>
                <NavLink key={"3"} id={"1"} className="menu-item" style={{textDecoration: "none", color: "inherit"}}
                         as={NavLink}
                         to="/resources/locations" replace>Locations</NavLink>
                <NavLink key={"4"} id={"1"} className="menu-item" style={{textDecoration: "none", color: "inherit"}}
                         as={NavLink}
                         to="/account/" replace>Ingredients</NavLink>
            </div>
            <div id="menu-background-pattern"></div>
            <div id="menu-background-image"></div>
        </div>
    )
}