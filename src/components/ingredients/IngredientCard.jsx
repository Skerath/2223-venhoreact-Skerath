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

const checkColor = (input) => {
    return input < 0 ? "red" : "green";
}

const checkPositive = (input) => {

    return input < 0 ? input : `+${input}`;
}

export default function IngredientCard(props) {

    const {
        resourceID,
        name,
        tier,
        level,
        professions,
        modifiers,
        ...remainingProps
    } = props;

    useEffect(() => {
        console.log(`${resourceID} ingredient loaded in`)
    });

    return (
        <div className="card cssanimation text-white bg-dark">
            <div className="card-header" style={{height: "10rem"}}>
                <div className="w-100">
                    {stars(tier)}
                </div>
                <h2 className="card-title text-center">{name}</h2>
                <h3 className="card-subtitle">&lt;&nbsp;Level&nbsp;{level}&nbsp;&gt;</h3>
            </div>
            <div className="card-body">
                <table className="table">
                    <tbody>
                    {Object.keys(modifiers).map((key, i) => (
                        <tr>
                            <td className="text-left">
                                <span
                                    style={{color: checkColor(modifiers[key].minimum)}}>{checkPositive(modifiers[key].minimum)}</span>
                                &nbsp;to&nbsp;
                                <span
                                    style={{color: checkColor(modifiers[key].maximum)}}>{checkPositive(modifiers[key].maximum)}</span>
                            </td>
                            <td className="text-right">
                                {key}
                            </td>
                        </tr>))}
                    </tbody>
                </table>


                {/*<table className="table">{professions.map((use) => (*/}
                {/*    <tr>*/}
                {/*        <td className="col">{use}</td>*/}
                {/*    </tr>))}*/}
                {/*</table>*/}
                {/*<table className="table">{Object.keys(remainingProps).map((key) => {*/}
                {/*    if (remainingProps[key])*/}
                {/*        return (*/}
                {/*            <tr>*/}
                {/*                <td className="col">{key}: {remainingProps[key]}</td>*/}
                {/*            </tr>);*/}
                {/*    else*/}
                {/*        return null;*/}
                {/*})}*/}
                {/*</table>*/}
            </div>
        </div>
    );
};