import {memo, useState} from "react";
import IngredientCard from "../ingredients/IngredientCard";
import Card from "react-bootstrap/Card";
import {FiEdit2} from "react-icons/fi";
import Button from "react-bootstrap/Button";
import useItems from "../../api/itemService";
import ToastContainer from "react-bootstrap/ToastContainer";
import Toast from "react-bootstrap/Toast";
import Loader from "../Loader/Loader";


const beautifyText = (input) => {
    return input.toLowerCase().split("_").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
};

export default memo(function ItemCard(props) {
    const itemApi = useItems();
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false);

    const closeErrorToast = () => setError(false);

    const {
        ingredientUsed,
        itemId,
        itemType,
        name,
        owner,
    } = props;

    const handleEdit = async (event, itemId) => {
        try {
            setIsLoading(true);
            const itemClicked = await itemApi.getItemById(itemId);
        } catch (err) {
            if (err.request) {
                if (err.request.status === 0)
                    setError("API seems to be offline.");
                else if (err.request.status === 404)
                    setError("This item does not belong to you!");
                else setError(err.response.data.details[0].message || JSON.stringify(err));
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <Loader loading={isLoading} position="absolute"/>
            {error ?
                <ToastContainer className="p-3 fadeIn" position='bottom-center'>
                    <Toast bg="danger" onClose={closeErrorToast}>
                        <Toast.Header closeButton={true}>
                            <strong className="me-auto">Venho</strong>
                            <small>An error occured while submitting item</small>
                        </Toast.Header>
                        <Toast.Body>{error}</Toast.Body>
                    </Toast>
                </ToastContainer> : null}
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
                    <Button id={itemId} variant="outline-light" type="button"
                            onClick={event => handleEdit(event, itemId)}
                            className="d-inline-flex justify-content-center">
                        <FiEdit2/>
                    </Button>
                </Card.Footer>
            </Card>
        </>
    );
});