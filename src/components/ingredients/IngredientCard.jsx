import './Ingredient.css';
import {IoStar, IoStarOutline} from "react-icons/io5";

const stars = (amount) => {
    if (amount === 0)
        return (<IoStarOutline size={25}/>);

    let color;

    if (amount === 1)
        color = "#B55800"
    else if (amount === 2)
        color = "silver"
    else
        color = "gold"
    return (<>{[...new Array(amount)].map((_, i) => <IoStar key={i} size={25} color={color}/>)}</>);
};

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
                {stars(tier)}
                <h2 className="card-title text-center">{name}</h2>
                <h3 className="card-subtitle">&lt;&nbsp;Level&nbsp;{level}&nbsp;&gt;</h3>
                <div className="table"></div>
                <table className="table">
                    {Object.keys(modifiers).map((key) => (
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