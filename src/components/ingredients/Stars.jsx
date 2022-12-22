import {IoStar, IoStarOutline} from "react-icons/io5";

export default function Stars({amount}) {
    if (amount === 0)
        return (
            <div className="w-100">
                <IoStarOutline size={25}/>
            </div>
        );

    let color;
    if (amount === 1)
        color = "#B55800"
    else if (amount === 2)
        color = "silver"
    else
        color = "gold"
    return (
        <div className="w-100">
            {[...new Array(amount)].map((_, i) => <IoStar key={i} size={25} color={color}/>)}
        </div>);
}