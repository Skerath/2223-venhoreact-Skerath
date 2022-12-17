import {useDebouncedCallback} from 'use-debounce';

export default function FilterInput({inputObject, onChange, refs, refKey}) {

    const debounced = useDebouncedCallback(() => {onChange();},1000);

    return (
        <div className="form-floating">
            <input
                ref={(element) => {
                    refs.current[refKey] = element
                }}
                key={refKey}
                onChange={(e) => debounced()}
                type={inputObject.inputType}
                className="form-control bg-dark"
                placeholder=""
                id={inputObject.inputType + inputObject.displayName + "Input"}
                aria-label={inputObject.displayName}
                aria-describedby={inputObject.inputType + inputObject.displayName + "Input"}
            />
            <label
                htmlFor={inputObject.inputType + inputObject.displayName + "Input"}>{inputObject.displayName}</label>
        </div>
    );
}