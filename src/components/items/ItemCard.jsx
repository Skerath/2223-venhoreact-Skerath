import '../ingredients/Ingredient.css';
import {memo} from "react";
import IngredientCard from "../ingredients/IngredientCard";


const beautifyText = (input) => {
    return input.toLowerCase().split("_").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
};

export default memo(function ItemCard(props) {
    const {
        ingredientUsed,
        itemId,
        itemType,
        name,
        owner,
    } = props;

    return (
        <div key={itemId} className="card fadeIn bg-dark">
            <div className="card-header" style={{height: "10rem"}}>
                <h2 className="card-title text-center mb-0">{name}</h2>
                <h4 className="card-subtitle w-100">{beautifyText(itemType)}</h4>
            </div>
            <div className="card-body">
                <IngredientCard key={itemId} {...ingredientUsed}/>
            </div>
            <div className="card-footer py-3 px-0">
                <h6 className="mb-0">Submitted by {owner}</h6>
            </div>
        </div>
    );
});