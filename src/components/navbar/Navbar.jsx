import './Navbar.css';

export default function Navbar() {

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top" >
            <a className="navbar-brand" href="/">Venho</a>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/locations">
                        Locations
                    </a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/items/ingredients" id="itemsDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Items
                    </a>
                    <div className="dropdown-menu" aria-labelledby="itemsDropdown">
                        <a className="nav-link active" href="/ingredients">Ingredients</a>
                        <a className="nav-link" href="items/resources">Resources</a>
                    </div>
                </li>
            </ul>
        </nav>
    );

}