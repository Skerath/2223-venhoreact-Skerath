import {useDebouncedCallback} from 'use-debounce';
import {Error} from "../alert/Error";

const possibleInputTypes = ["text", "number"];
const validateInputType = (filterObject) => {
    if (filterObject === undefined || filterObject.inputType === undefined) {
        console.error(`filterObject(s) or filterObject.inputType hasn't been provided`);
        return <Error styling={{width: null}}
                      error={"Filter has been set-up incorrectly. Please contact the developer."}/>;
    }

    if (!possibleInputTypes.includes(String(filterObject.inputType))) {
        console.error(`inputType must be one of the following: [${possibleInputTypes}]. Current: ${filterObject.inputType}`);
        return <Error styling={{width: null}}
                      error={"Filter has been set-up incorrectly. Please contact the developer."}/>;
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
        <div className="form-floating">
            <input
                ref={(element) => {
                    refs.current[refKey] = element;
                }}
                key={refKey}
                onChange={() => debounced()}
                type={filterObject.inputType}
                className="form-control bg-dark"
                placeholder=""
                id={filterObject.inputType + filterObject.displayName + "Input"}
                aria-label={filterObject.displayName}
                aria-describedby={filterObject.inputType + filterObject.displayName + "Input"}
            />
            <label
                htmlFor={filterObject.inputType + filterObject.displayName + "Input"}>{filterObject.displayName}</label>
        </div>
    );
}