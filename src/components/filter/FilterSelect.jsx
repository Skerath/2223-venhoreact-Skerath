export default function FilterSelect({selectObject, onChange}) {
    return (
        <div className="form-floating">
            <select
                ref={selectObject.ref}
                onChange={onChange}
                className="form-control bg-dark"
                placeholder=""
                id={"select" + selectObject.displayName + "Select"}
                aria-label={selectObject.displayName}
                aria-describedby={"select" + selectObject.displayName + "Select"}
            >
                {mapSelectOptions(selectObject.selectOptions)}
            </select>
            <label
                htmlFor={"select" + selectObject.displayName + "Input"}>{selectObject.displayName}</label>
        </div>
    );
}

const mapSelectOptions = (options) => {
    return options.map(option => {
        return option.selected ?
            <option selected value={option.value}>{option.displayName}</option> :
            <option value={option.value}>{option.displayName}</option>;
    });
}