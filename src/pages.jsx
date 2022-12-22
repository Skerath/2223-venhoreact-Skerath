import Filter from "./components/filter/Filter";
import {useState} from "react";
import {INGREDIENTS_FILTER_LAYOUT, ITEM_FILTER_LAYOUT} from "./components/filter/filter-layout";
import Ingredients from "./components/ingredients/Ingredients";
import {Home} from "./components/home/Home";
import Items from "./components/items/Items";
import {Button, Card, Container, Form} from "react-bootstrap";
import './NewItemPage.css'

const queryPrefix = [];

export const HomePage = () => {
    return (
        <main>
            <Home/>
        </main>
    );
}

export const IngredientsPage = () => {
    const [query, setQuery] = useState('');

    queryPrefix.length = 0;
    INGREDIENTS_FILTER_LAYOUT.forEach(sublist => sublist.filterObjects.forEach(parameter => queryPrefix.push(parameter.displayName)));

    return (
        <main>
            <Filter layout={INGREDIENTS_FILTER_LAYOUT} output={setQuery}/>
            <Ingredients queryPrefix={queryPrefix} data={query ? query : []}></Ingredients>
        </main>
    );
};

export const ItemsPage = () => {
    const [query, setQuery] = useState('');

    queryPrefix.length = 0;
    ITEM_FILTER_LAYOUT.forEach(sublist => sublist.filterObjects.forEach(parameter => queryPrefix.push(parameter.displayName)));

    return (
        <main>
            <Filter layout={ITEM_FILTER_LAYOUT} output={setQuery}/>
            <Items queryPrefix={queryPrefix} data={query ? query : []}></Items>
        </main>
    );
};

export const NewItemPage = () => {
    return (
        <main style={{display: "inline-flex", justifyContent: "center", width: "100vw"}}>
            <Card bg="dark" style={{width: "50rem"}}>
                <Card.Header className={"h2"}>Submit new item
                </Card.Header>
                <Card.Body>
                    <Form style={{width: "90%"}}>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Item Name</Form.Label>
                            <Form.Control className="bg-dark" type="text" placeholder="Ex.: Combat - Ragni Region"/>
                            <Form.Text className="text-muted">
                                Try to follow the guild's naming scheme: "Usecase - Area"
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Item Type</Form.Label>
                            <Form.Select className="bg-dark" type="text">
                                <option value="HELMET">Helmet</option>
                                <option value="CHESTPLATE">Chestplate</option>
                                <option value="LEGGINGS">Leggings</option>
                                <option value="BOOTS">Boots</option>
                                <option value="SPEAR">Spear</option>
                                <option value="DAGGER">Dagger</option>
                                <option value="BOW">Bow</option>
                                <option value="WAND">Wand</option>
                                <option value="RELIK">Relik</option>
                                <option value="RING">Ring</option>
                                <option value="BRACELET">Bracelet</option>
                                <option value="NECKLACE">Necklace</option>
                                <option value="POTION">Potion</option>
                                <option value="SCROLL">Scroll</option>
                                <option value="FOOD">Food</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Ingredient Used</Form.Label>
                            <Form.Control className="bg-dark" type="text" placeholder="Ex.: Accursed Effigy"/>
                            <Form.Text className="text-muted">
                                Make sure the ingredient is spelled correctly and is usable for the selected item type
                            </Form.Text>
                        </Form.Group>
                        <Button variant="outline-light" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </main>
    );
};