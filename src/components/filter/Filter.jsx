import './Filter.css';


export default function Filter({input, output}) {

    // TODO: properly use ref
    //  "Unexpected ref object provided for select. Use either a ref-setter function or React.createRef()."


    const onUserInput = () => {
        let outputs = [];
        input.map(sublist => {
            console.log(sublist.filterObjects)
            sublist.filterObjects.forEach(filterObject => outputs.push(filterObject.ref.current.value))});

        console.log(outputs);
        output(outputs);
    };

    const mapSelectOptions = (options) => {
        let selectOptions = [];
        options.forEach(option => {
            if (option.selected)
                selectOptions.push(
                    <option selected value={option.value}>{option.displayName}</option>)
            else
                selectOptions.push(
                    <option value={option.value}>{option.displayName}</option>)
        });
        return selectOptions;
    }


    const mapFilterKeys = (sublist) => { // Converts every filter object to HTML
        let filterObjectItems = []
        sublist.forEach(filterObject => {
                console.log(`ref=${JSON.stringify(filterObject.ref)}`)
                if (filterObject.inputType) // Filter object has an inputtype
                    filterObjectItems.push(
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
                        </div>);
                else // Filter object does not have an input type => is of type selection
                    filterObjectItems.push(
                        <div className="form-floating">
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
                        </div>
                    );
            }
        )
        return (filterObjectItems);
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