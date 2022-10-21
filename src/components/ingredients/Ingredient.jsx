import './Ingredient.css';

export default function Ingredient(props) {

    let {id, name, modifiers, level_requirement, uses} = props;

    return (
        <div id={id} className="card">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="card-text">
                    Crafting level required: {level_requirement} <br/>
                    Ingredient ID: {id}
                </p>
                <div className="table"></div>
                <table className="table">{modifiers.map((modifier) => (
                    <tr>
                        <td className="col">{modifier.min} {modifier.max ? ` to  ${modifier.max}` : ""} </td>
                        <td className="col">{modifier.name}</td>
                    </tr>))}
                </table>
                <table className="table">{uses.map((use) => (
                    <tr>
                        <td className="col">{use}</td>
                    </tr>))}
                </table>
            </div>
        </div>
    );
}