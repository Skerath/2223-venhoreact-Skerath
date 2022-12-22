import {memo} from "react";
import IngredientCard from "../ingredients/IngredientCard";
import Card from "react-bootstrap/Card";


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
        <Card key={itemId} className="fadeIn" bg="dark">
            <Card.Header className="p-3">
                <Card.Title>{name}</Card.Title>
            </Card.Header>
            <Card.Body>
                <IngredientCard key={itemId} {...ingredientUsed}/>
            </Card.Body>
            <Card.Footer className="p-2">
                <Card.Text className="mb-0">{beautifyText(itemType)} submitted by</Card.Text>
                <Card.Text>{owner}</Card.Text>
            </Card.Footer>
        </Card>
    );
});