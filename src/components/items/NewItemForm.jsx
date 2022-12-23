import useItems from "../../api/itemService";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ToastContainer from "react-bootstrap/ToastContainer";
import Toast from "react-bootstrap/Toast";
import {Formik} from "formik";
import * as yup from "yup";
import {useState} from "react";

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
    const [error, setError] = useState(null);
    const [result, setResult] = useState(null);
    const itemService = useItems();

    const closeErrorToast = () => setError(false);
    const closeSuccessToast = () => setResult(false);

    return (
        <>
            {error ?
                <ToastContainer className="p-3 fadeIn position-fixed" data-cy="error_toast" position='bottom-center'>
                    <Toast bg="danger" onClose={closeErrorToast}>
                        <Toast.Header closeButton={true}>
                            <strong className="me-auto">Venho</strong>
                            <small>An error occurred while submitting item</small>
                        </Toast.Header>
                        <Toast.Body>{error}</Toast.Body>
                    </Toast>
                </ToastContainer> : null}
            {result ?
                <ToastContainer className="p-3 position-fixed" data-cy="success_toast" position='bottom-center'>
                    <Toast bg="success" onClose={closeSuccessToast}>
                        <Toast.Header closeButton={true}>
                            <strong className="me-auto">Venho</strong>
                            <small>Submission successful</small>
                        </Toast.Header>
                        <Toast.Body>{result}</Toast.Body>
                    </Toast>
                </ToastContainer> : null}
            <Card bg="dark" style={{width: "50rem", marginTop: "10vh", marginBottom: "10vh"}}>
                <Card.Header className={"h2"}>Submit new item
                </Card.Header>
                <Card.Body>
                    <Formik
                        validationSchema={validationSchema}
                        onSubmit={async (values, {setSubmitting, resetForm}) => {
                            let result, hasError
                            try {
                                setResult(null);
                                setError(false);
                                setSubmitting(true)
                                result = await itemService.createItem(values)
                            } catch (err) {
                                console.log(JSON.stringify(err));
                                console.log(err);
                                hasError = err
                                if (err.request) {
                                    if (err.request.status === 0)
                                        setError("API seems to be offline.");
                                    else if (err.request.status === 403)
                                        setError("You're not allowed to submit new items!");
                                    else setError(err.response.data.details[0].message || JSON.stringify(err));
                                } else setError(err.response.data.details[0].message || JSON.stringify(err));
                            } finally {
                                if (result && result.status === 201)
                                    setResult(`Item with name ${values.name} submitted!`);
                                if (!hasError)
                                    resetForm();
                            }
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
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label>Item Name</Form.Label>
                                    <Form.Control type="text"
                                                  className={`bg-dark form ${touched.name && errors.name ? "is-invalid" : null}`}
                                                  placeholder="Ex.: Combat - Ragni Region"
                                                  name="name"
                                                  data-cy="name_input"
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
                                                 className={`bg-dark form ${touched.name && errors.type ? "is-invalid" : null}`}
                                                 name="type"
                                                 data-cy="type_select"
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
                                                  className={`bg-dark form ${touched.ingredient && errors.ingredient ? "is-invalid" : null}`}
                                                  placeholder="Ex.: Accursed Effigy"
                                                  name="ingredient"
                                                  data-cy="ingredient_input"
                                                  value={values.ingredient}
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                                  isValid={touched.ingredient && !errors.ingredient}/>
                                    <Form.Control.Feedback type="invalid">{errors.ingredient}</Form.Control.Feedback>
                                    <Form.Text className="text-muted">
                                        Make sure the ingredient is spelled correctly and is usable for the selected
                                        item type
                                    </Form.Text>
                                </Form.Group>
                                <Button variant="outline-light" type="submit" data-cy="submit_button" disabled={isSubmitting}>
                                    {isSubmitting ? 'Submitting…' : 'Submit Item'}
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Card.Body>
            </Card>
        </>
    );
};