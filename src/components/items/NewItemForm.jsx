import useItems from "../../api/itemService";
import {Button, Card, Form} from "react-bootstrap";
import {Formik} from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
    name: yup.string()
        .required("Item name is required")
        .min(3, "Item name must have at least 3 characters")
        .max(60, "Item name can't be longer than 60 characters"),
    type: yup.string()
        .required("Type must be selected"),
    ingredient: yup.string()
        .required("Ingredient name is required"),
});

export const NewItemForm = () => {
    const itemService = useItems();

    const submitItem = async (data) => { // TODO proper submit -> status as a bootstrap toast
        let results;
        try {
            // setIsLoading(true);
            // setError(false);
            results = await itemService.createItem(data);
            // setIngredients(results);
        } catch (err) {
            console.log(err)
        } finally {
            // setIsLoading(false);
        }
    };


    return (
        <Card bg="dark" style={{width: "50rem"}}>
            <Card.Header className={"h2"}>Submit new item
            </Card.Header>
            <Card.Body>
                <Formik
                    validationSchema={validationSchema}
                    onSubmit={async (values, {setSubmitting, resetForm}) => {
                        setSubmitting(true)
                        const result = await itemService.createItem(values);
                        console.log(result);
                        resetForm();
                    }}
                    initialValues={{
                        name: '',
                        type: '',
                        ingredient: '',
                    }}
                >
                    {({
                          handleSubmit,
                          handleChange,
                          handleBlur,
                          values,
                          touched,
                          isSubmitting,
                          errors,
                      }) => (
                        <Form noValidate onSubmit={handleSubmit} style={{width: "90%"}}>
                            <Form.Group className="mb-3" controlId="validationFormik01">
                                <Form.Label>Item Name</Form.Label>
                                <Form.Control type="text"
                                              className={`bg-dark ${touched.name && errors.name ? "is-invalid" : null}`}
                                              placeholder="Ex.: Combat - Ragni Region"
                                              name="name"
                                              value={values.name}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              isValid={touched.name && !errors.name}/>
                                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                                <Form.Text className="text-muted">
                                    Try to follow the guild's naming scheme: "Usecase - Area"
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formType">
                                <Form.Label>Item Type</Form.Label>
                                <Form.Select type="text"
                                             className={`bg-dark ${touched.name && errors.type ? "is-invalid" : null}`}
                                             name="type"
                                             value={values.type}
                                             onChange={handleChange}
                                             onBlur={handleBlur}
                                             isValid={touched.type && !errors.type}>
                                    <option></option>
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
                                <Form.Control.Feedback type="invalid">{errors.type}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formIngredient">
                                <Form.Label>Ingredient Used</Form.Label>
                                <Form.Control type="text"
                                              className={`bg-dark ${touched.name && errors.name ? "error" : null}`}
                                              placeholder="Ex.: Accursed Effigy"
                                              name="ingredient"
                                              value={values.ingredient}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              isValid={touched.ingredient && !errors.ingredient}/>
                                <Form.Control.Feedback type="invalid">{errors.ingredient}</Form.Control.Feedback>
                                <Form.Control.Feedback type="valid">This form being green does not mean the
                                    Ingredient is found! Please double check.</Form.Control.Feedback>
                                <Form.Text className="text-muted">
                                    Make sure the ingredient is spelled correctly and is usable for the selected
                                    item type
                                </Form.Text>
                            </Form.Group>
                            <Button variant="outline-light" type="submit" disabled={isSubmitting}>
                                Submit Item
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Card.Body>
        </Card>
    );
};