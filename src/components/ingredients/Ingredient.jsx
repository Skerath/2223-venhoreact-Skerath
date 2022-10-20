export default function Ingredient(props) {

    let {id, name, modifiers, level_requirement, uses} = props;

    // Turning modifiers & uses into list items to display
    modifiers = modifiers.map(({name, min, max}) =>
        (<li className="list-group-item">{name}: {min} - {max}</li>));
    uses = uses.map((txt) =>
        (<li className="list-group-item">{txt}</li>));

    return (
        <div id={id} className="card" style={{width: "18rem", margin: "10px"}}>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="card-text">
                    Crafting level required: {level_requirement} <br/>
                    Ingredient ID: {id}
                </p>
                <ul className="list-group" style={{margin:"2px"}}>{modifiers}</ul>
                <ul className="list-group" style={{margin:"2px"}}>{uses}</ul>
            </div>
        </div>
    );
}