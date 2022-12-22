import {useDebouncedCallback} from 'use-debounce';
import {Error} from "../alert/Error";
import {FormControl, FormFloating} from "react-bootstrap";

const possibleInputTypes = ["text", "number"];
const validateInputType = (filterObject) => {
    if (filterObject === undefined || filterObject.inputType === undefined) {
        console.error(`filterObject(s) or filterObject.inputType hasn't been provided`);
        return <Error styling={{width: null}}
                      error={"Filter has been set-up incorrectly."}/>;
    }

    if (!possibleInputTypes.includes(String(filterObject.inputType))) {
        console.error(`inputType must be one of the following: [${possibleInputTypes}]. Current: ${filterObject.inputType}`);
        return <Error styling={{width: null}}
                      error={"Filter has been set-up incorrectly."}/>;
    }
};

export default function FilterInput(props) {
    const {filterObject, onUserInput, refs, refKey} = props;
    const debounced = useDebouncedCallback(() => {
        onUserInput();
    }, 400);

    const hasError = validateInputType(filterObject);
    if (hasError) return hasError;

    return (
        <FormFloating>
            <FormControl
                ref={(element) => {
                    refs.current[refKey] = element;
                }}
                key={refKey}
                onChange={() => debounced()}
                type={filterObject.inputType}
                className="bg-dark form"
                placeholder=""
                id={filterObject.inputType + filterObject.displayName + "Input"}
                aria-label={filterObject.displayName}
                aria-describedby={filterObject.inputType + filterObject.displayName + "Input"}
            />
            <label
                htmlFor={filterObject.inputType + filterObject.displayName + "Input"}>
                {filterObject.displayName}
            </label>
        </FormFloating>
    );
}