import {memo, useState} from "react";
import IngredientCard from "../ingredients/IngredientCard";
import Card from "react-bootstrap/Card";
import {FiDelete, FiEdit2} from "react-icons/fi";
import Button from "react-bootstrap/Button";
import useItems from "../../api/itemService";
import ToastContainer from "react-bootstrap/ToastContainer";
import Toast from "react-bootstrap/Toast";
import Loader from "../loader/Loader";
import {EditItemForm} from "./EditItemForm";

const beautifyText = (input) => {
    return input.toLowerCase().split("_").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
};

export default memo(function ItemCard({props}) {
    const itemApi = useItems();
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [itemClicked, setItemClicked] = useState(null);
    const [isDeleted, setIsDeleted] = useState(false);

    const closeErrorToast = () => setError(false);
    const closeSuccessToast = () => setIsDeleted(false);

    const {
        ingredientUsed,
        itemId,
        itemType,
        name,
        owner,
    } = props;

    const handleEdit = async (event, itemId) => {
        let itemClicked;
        try {
            setError(false);
            setIsLoading(true);
            itemClicked = await itemApi.getItemById(itemId);
        } catch (err) {
            if (err.request)
                if (err.request.status === 0)
                    setError("API seems to be offline.");
                else if (err.request.status === 404)
                    setError("This item does not belong to you!");
                else setError(err.response.data.details[0].message || JSON.stringify(err));
            else setError(err);
        } finally {
            setIsLoading(false);
            if (itemClicked)
                setItemClicked(itemClicked);
        }
    };

    const handleClose = async () => {
        setItemClicked(false);
    };

    const handleDelete = async (event, itemId) => {
        let result;
        try {
            setError(false);
            setIsLoading(true);
            result = await itemApi.deleteItem(itemId);
        } catch (err) {
            if (err.request)
                if (err.request.status === 0)
                    setError("API seems to be offline.");
                else if (err.request.status === 404)
                    setError("This item does not belong to you!");
                else setError(JSON.stringify(err));
            else setError(err);
        } finally {
            if (result)
                setIsDeleted(true)
            setIsLoading(false);
        }
    };

    return (
        <>
            <Loader loading={isLoading} position="fixed"/>
            {error ?
                <ToastContainer className="p-3 fadeIn position-fixed" data-cy="error_toast" position='bottom-center'>
                    <Toast bg="danger" onClose={closeErrorToast}>
                        <Toast.Header closeButton={true}>
                            <strong className="me-auto">Venho</strong>
                            <small>An error occured while submitting item</small>
                        </Toast.Header>
                        <Toast.Body>{error}</Toast.Body>
                    </Toast>
                </ToastContainer> : null}
            {isDeleted ?
                <ToastContainer className="p-3 fadeIn position-fixed"
                                data-cy="success_toast"
                                position='bottom-center'>
                    <Toast bg="success" onClose={closeSuccessToast}>
                        <Toast.Header closeButton={true}>
                            <strong className="me-auto">Venho</strong>
                            <small>Deletion successful</small>
                        </Toast.Header>
                        <Toast.Body>
                            Item with name "{name}" has been deleted!
                        </Toast.Body>
                    </Toast>
                </ToastContainer> : null
            }
            {itemClicked ?
                <EditItemForm currentValues={itemClicked} wantsClosed={handleClose}/> : null}
            <Card key={itemId} className="fadeIn" bg="dark">
                <Card.Header className="p-3" style={{height: "8rem"}}>
                    <Card.Title as="h2" className="mb-0">
                        {name}
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <IngredientCard key={itemId} {...ingredientUsed}/>
                </Card.Body>
                <Card.Footer className="p-2">
                    <Card.Text className="mb-0">{beautifyText(itemType)} submitted by</Card.Text>
                    <Card.Text>{owner}</Card.Text>
                    <Button key={"deleteButton"} data-cy="delete_button" variant="outline-light" type="button"
                            onClick={event => handleDelete(event, itemId)}
                            className="d-inline-flex justify-content-center m-2">
                        <FiDelete/>
                    </Button>
                    <Button key={"updateButton"} data-cy="edit_button" variant="outline-light" type="button"
                            onClick={event => handleEdit(event, itemId)}
                            className="d-inline-flex justify-content-center m-2">
                        <FiEdit2/>
                    </Button>
                </Card.Footer>
            </Card>
        </>
    );
});