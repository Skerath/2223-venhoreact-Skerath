import './Ingredient.css';
import {IoStar, IoStarOutline} from "react-icons/io5";
import {useEffect} from "react";

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

const defineModifierColor = (input) => {
    return input < 0 ? "red" : "green";
};

const defineRequirementColor = (input) => {
    return input < 0 ? "green" : "red";
};

const addPositivePrefix = (input) => {
    return input < 0 ? input : `+${input}`;
};

const beautifyText = (input) => {
    return input.toLowerCase().split("_").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
};

const modifiersTable = (modifiers) => {
    if (Object.keys(modifiers).length !== 0) {
        return (
            <table key={'modifiersTable'} className="table bg-dark">
                <tbody>
                {Object.keys(modifiers).map((key, i) => (
                    <tr key={i}>
                        <td key={`${i}_left`} style={{textAlign: "left"}}>
                                <span key={'minimum_value'}
                                      style={{color: defineModifierColor(modifiers[key].minimum)}}>{addPositivePrefix(modifiers[key].minimum)}</span>
                            &nbsp;to&nbsp;
                            <span key={'maximum_value'}
                                  style={{color: defineModifierColor(modifiers[key].maximum)}}>{addPositivePrefix(modifiers[key].maximum)}</span>
                        </td>
                        <td key={`${i}_right`} style={{textAlign: "right"}}>
                            {beautifyText(key)}
                        </td>
                    </tr>))}
                </tbody>
            </table>
        );
    } else return <></>;
}


function requirementsTable(requirements) {
    return <table key={'requirements'} className="table bg-dark">
        <tbody>
        {Object.keys(requirements).map((key, i) => {
            if (requirements[key])
                return (
                    <tr key={i}>
                        <td key={`${i}_left`}
                            style={{
                                color: defineRequirementColor(requirements[key]),
                                textAlign: "left"
                            }}>{addPositivePrefix(requirements[key])}</td>
                        <td key={`${i}_right`} style={{textAlign: "right"}}>{beautifyText(key)}</td>
                    </tr>);
            else
                return null;
        })}
        </tbody>
    </table>;
}

export default function IngredientCard(props) {

    const {
        resourceID,
        name,
        tier,
        level,
        professions,
        modifiers,
        ...requirements
    } = props;

    return (
        <div className="card fadeIn bg-dark">
            <div className="card-header" style={{height: "10rem"}}>
                <div className="w-100">
                    {stars(tier)}
                </div>
                <h2 className="card-title text-center mb-0">{name}</h2>
                <h3 className="card-subtitle w-100">&lt;&nbsp;Level&nbsp;{level}&nbsp;&gt;</h3>
            </div>
            <div className="card-body">
                {modifiersTable(modifiers)}
                {requirementsTable(requirements)}
            </div>
            <div className="card-footer py-3 px-0">
                <h6 className="mb-0">{professions.map((profession, i) => {
                    return beautifyText(profession);
                }).join(", ")}</h6>
            </div>
        </div>
    );
};