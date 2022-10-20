export default function Ingredient(props) {

    let {ingredientID, name, modifiers, level_requirement, uses} = props;

    // Turning modifiers & uses into list items to display
    modifiers = modifiers.map(({naam, level, maxlevel}) =>
        (<li>{naam}: min {level} max {maxlevel}</li>));
    uses = uses.map((txt) =>
        (<li>{txt}</li>));


    return (
        <div class={ingredientID}>
            <p>{ingredientID} - {name} | {level_requirement}</p>
            <ul class="modifiers">
                {modifiers}
            </ul>
            <ul class="uses">
                {uses}
            </ul>
        </div>
    );
}