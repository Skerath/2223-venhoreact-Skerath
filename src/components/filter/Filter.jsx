import './Filter.css';


export default function Filter({input, output}) {

    // TODO: properly use ref
    //  "Unexpected ref object provided for select. Use either a ref-setter function or React.createRef()."


    const onUserInput = () => {
        let outputs = [];
        input.map(sublist => {
            sublist.filterObjects.forEach(filterObject => outputs.push(filterObject.ref.current.value))
        });
        output(outputs);
    };

    const mapSelectOptions = (options) => {
        return options.map(option => {
            if (option.selected)
                return (<option selected value={option.value}>{option.displayName}</option>)
            else
                return (<option value={option.value}>{option.displayName}</option>)
        });
    }


    const mapFilterKeys = (sublist) => { // Converts every filter object to HTML
        return sublist.map(filterObject => {
            if (filterObject.inputType)
                return (
                    <div className="form-floating">
                        <input
                            ref={filterObject.ref}
                            onChange={onUserInput}
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
            else
                return (<div className="form-floating">
                    <select
                        ref={filterObject.ref}
                        onChange={onUserInput}
                        className="form-control bg-dark"
                        placeholder=""
                        id={"select" + filterObject.displayName + "Select"}
                        aria-label={filterObject.displayName}
                        aria-describedby={"select" + filterObject.displayName + "Select"}
                    >
                        {mapSelectOptions(filterObject.selectOptions)}
                    </select>
                    <label
                        htmlFor={"select" + filterObject.displayName + "Input"}>{filterObject.displayName}</label>
                </div>);
        })
    };

    return (
        <div className="d-flex flex-row flex-wrap justify-content-center mb-3">
            {input.map(sublist => {
                return (
                    <div className="input-group" style={sublist.stylingOptions}>
                        {mapFilterKeys(sublist.filterObjects)}
                    </div>);
            })}
        </div>
    );
};