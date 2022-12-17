import {useDebouncedCallback} from 'use-debounce';

const possibleInputTypes = ["text", "number"];

export default function FilterInput(props) {
    const {filterObject, onChange, refs, refKey} = props;

    if (!possibleInputTypes.includes(String(filterObject.inputType)))
        throw new Error(`inputType must be one of the following: [${possibleInputTypes}]. Current: ${filterObject.inputType}`)

    const debounced = useDebouncedCallback(() => {
        onChange();
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