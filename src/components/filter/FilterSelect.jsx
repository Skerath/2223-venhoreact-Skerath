export default function FilterSelect(props) {
    const {filterObject, onChange, refs, refKey} = props;

    if (filterObject.selectOptions === undefined)
        throw new Error(`selectOptions must be provided for FilterSelect components, comprising out of objects with a displayName and value, with one object having the 'selected: true' property`);

    const defaultSelected = filterObject.selectOptions.filter(item => item.selected);
    if (defaultSelected === undefined || defaultSelected.length === 0)
        throw new Error(`One object within selectOptions must have the 'selected: true' property. None was found.`)
    if (defaultSelected.length > 1)
        throw new Error(`selectOptions can only have one object with the 'selected: true' property. ${defaultSelected.length} were found.`)

    return (
        <div className="form-floating">
            <select
                ref={(element) => {
                    refs.current[refKey] = element
                }}
                onChange={onChange}
                className="form-control bg-dark"
                defaultValue={defaultSelected.value}
                id={"select" + filterObject.displayName + "Select"}
                aria-label={filterObject.displayName}
                aria-describedby={"select" + filterObject.displayName + "Select"}
            >
                {filterObject.selectOptions.map((option, i) => {
                    return (<option className={"bg-dark"} value={option.value}
                                    key={i}>{option.displayName}</option>)
                })}
            </select>
            <label
                htmlFor={"select" + filterObject.displayName + "Input"}>{filterObject.displayName}</label>
        </div>
    );
};