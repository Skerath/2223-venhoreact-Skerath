export default function FilterInput({inputObject, onChange, refs, keya}) {
    return (
        <div className="form-floating">
            <input
                ref={(element) => {refs.current[keya] = element}}
                key={keya}
                onChange={onChange}
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