import {Error} from "../error/Error";

let defaultSelected;

const validateLayout = (filterObject) => {

    if (filterObject.selectOptions === undefined) {
        console.error(`selectOptions must be provided for FilterSelect components, comprising out of objects with a displayName and value, with one object having the 'selected: true' property`);
        return <Error styling={{width: null}}
                      error={"Filter has been set-up incorrectly. Please contact the developer."}/>;
    }

    defaultSelected = filterObject.selectOptions.filter(item => item.selected);
    if (!defaultSelected || defaultSelected.length === 0) {
        console.error(`One object within selectOptions must have the 'selected: true' property. None was found.`);
        return <Error styling={{width: null}}
                      error={"Filter has been set-up incorrectly. Please contact the developer."}/>;
    }
    if (defaultSelected.length > 1) {
        console.error(`selectOptions can only have one object with the 'selected: true' property. ${defaultSelected.length} were found.`);
        return <Error styling={{width: null}}
                      error={"Filter has been set-up incorrectly. Please contact the developer."}/>;
    }
}

export default function FilterSelect(props) {
    const {filterObject, onUserInput, refs, refKey} = props;

    const hasError = validateLayout(filterObject);
    if (hasError) return hasError;

    return (
        <div className="form-floating">
            <select
                ref={(element) => {
                    refs.current[refKey] = element
                }}
                onChange={onUserInput}
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