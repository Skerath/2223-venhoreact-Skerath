export default function FilterSelect({selectObject, onChange, refs, refKey}) {
    return (
        <div className="form-floating">
            <select
                ref={(element) => {refs.current[refKey] = element}}
                onChange={onChange}
                className="form-control bg-dark"
                defaultValue={selectObject.selectOptions.find(item => item.selected).value}
                id={"select" + selectObject.displayName + "Select"}
                aria-label={selectObject.displayName}
                aria-describedby={"select" + selectObject.displayName + "Select"}
            >
                {selectObject.selectOptions.map((option, i) => {
                    return (<option className={"bg-dark"} value={option.value}
                                    key={i}>{option.displayName}</option>)
                })}
            </select>
            <label
                htmlFor={"select" + selectObject.displayName + "Input"}>{selectObject.displayName}</label>
        </div>
    );
};