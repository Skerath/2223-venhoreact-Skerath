import {useDebouncedCallback} from 'use-debounce';

const possibleInputTypes = ["text", "number"];
const validateInputType = (inputType) => {
    if (!possibleInputTypes.includes(String(inputType)))
        throw new Error(`inputType must be one of the following: [${possibleInputTypes}]. Current: ${inputType}`)
};

export default function FilterInput(props) {
    const {filterObject, onUserInput, refs, refKey} = props;

    validateInputType(filterObject.inputType)

    const debounced = useDebouncedCallback(() => {
        onUserInput();
    }, 200);

    return (
        <div className="form-floating">
            <input
                ref={(element) => {
                    refs.current[refKey] = element
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