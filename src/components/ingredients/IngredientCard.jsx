import './Ingredient.css';

export default function IngredientCard(props) {

    // TODO clean up card layout, use proper HTML! react keys?

    const {
        resourceID,
        name,
        tier,
        level,
        professions,
        modifiers,
        ...remainingProps
    } = props;

    return (
        <div id={resourceID} className="card bg-dark">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="card-text">
                    Crafting level required: {level} <br/>
                    Ingredient Tier: {tier}
                </p>
                <div className="table"></div>
                <table className="table">{Object.keys(modifiers).map((key) => (
                    <tr>
                        <td className="col">{modifiers[key].minimum} {modifiers[key].minimum ? ` to  ${modifiers[key].maximum}` : ""} </td>
                        <td className="col">{key}</td>
                    </tr>))}
                </table>
                <table className="table">{professions.map((use) => (
                    <tr>
                        <td className="col">{use}</td>
                    </tr>))}
                </table>
                <table className="table">{Object.keys(remainingProps).map((key) => {
                    if (remainingProps[key])
                        return (
                            <tr>
                                <td className="col">{key}: {remainingProps[key]}</td>
                            </tr>);
                    else
                        return null;
                })}
                </table>
            </div>
        </div>
    );
};