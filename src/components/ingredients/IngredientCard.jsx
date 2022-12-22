import {memo} from "react";
import {Card, Table} from "react-bootstrap";
import Stars from "./Stars";


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
    if (Object.keys(modifiers).length !== 0)
        return (
            <Table key={"modifiers"} className="bg-dark">
                <tbody>
                {Object.keys(modifiers).map((key, i) => (
                    <tr>
                        <td key={`${i}_left`} className="text-start">
                            <span key={'minimum_value'} style={{color: defineModifierColor(modifiers[key].minimum)}}>
                                {addPositivePrefix(modifiers[key].minimum)}
                            </span>
                            &nbsp;to&nbsp;
                            <span key={'maximum_value'} style={{color: defineModifierColor(modifiers[key].maximum)}}>
                                {addPositivePrefix(modifiers[key].maximum)}
                            </span>
                        </td>
                        <td key={`${i}_right`} className="text-end">
                            {beautifyText(key)}
                        </td>
                    </tr>))}
                </tbody>
            </Table>
        );
    else return null;
};


const requirementsTable = (requirements) => {
    if (Object.keys(requirements).length !== 0)
        return (
            <Table key={"requirements"} className="bg-dark">
                <tbody>
                {Object.keys(requirements).map((key, i) => {
                    if (requirements[key])
                        return (
                            <tr key={i}>
                                <td key={`${i}_left`}
                                    className="text-start"
                                    style={{
                                        color: defineRequirementColor(requirements[key]),
                                    }}>
                                    {addPositivePrefix(requirements[key])}
                                </td>
                                <td key={`${i}_right`} className="text-end">
                                    {beautifyText(key)}
                                </td>
                            </tr>
                        );
                    else return null;
                })}
                </tbody>
            </Table>
        );
    else return null;
};


export default memo(function IngredientCard(props) {
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
        <Card key={resourceID} className="fadeIn" bg="dark">
            <Card.Header className="p-3" style={{height: "12rem"}}>
                <Stars amount={tier}></Stars>
                <Card.Title as="h2" className="mb-0">
                    {name}
                </Card.Title>
                <Card.Subtitle as="h3" className="w-100">
                    &lt;&nbsp;Level&nbsp;{level}&nbsp;&gt;
                </Card.Subtitle>
            </Card.Header>
            <Card.Body>
                {modifiersTable(modifiers)}
                {requirementsTable(requirements)}
            </Card.Body>
            <Card.Footer>
                <Card.Text as="h6">
                    {professions.map((profession) => {
                        return beautifyText(profession);
                    }).join(", ")}
                </Card.Text>
            </Card.Footer>
        </Card>
    );
});