export default function Ingredient(props) {

    let {id, name, modifiers, level_requirement, uses} = props;

    // Turning modifiers & uses into list items to display
    modifiers = modifiers.map(({name, min, max}) =>
        (<li>{name}: {min} - {max}</li>));
    uses = uses.map((txt) =>
        (<li>{txt}</li>));

    return (
        <div id={id}>
            <p>{id} - {name} | Crafting level required: {level_requirement}</p>
            <ul>{modifiers}</ul>
            <ul>{uses}</ul>
        </div>
    );
}