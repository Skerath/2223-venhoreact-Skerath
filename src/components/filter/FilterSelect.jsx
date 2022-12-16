export default function FilterSelect({selectObject, onChange}) {
    return (
        <div className="form-floating">
            <select
                ref={selectObject.ref}
                onChange={onChange}
                className="form-control bg-dark"
                defaultValue={selectObject.selectOptions.find(item => item.selected).value}
                id={"select" + selectObject.displayName + "Select"}
                aria-label={selectObject.displayName}
                aria-describedby={"select" + selectObject.displayName + "Select"}
            >
                {mapOptions(selectObject.selectOptions)}
            </select>
            <label
                htmlFor={"select" + selectObject.displayName + "Input"}>{selectObject.displayName}</label>
        </div>
    );
};

function mapOptions(options) {
    let counter = 0;
    let mappedOptions = []
    options.forEach(option => {
        mappedOptions.push(<option className={"bg-dark"} value={option.value}
                                   key={counter}>{option.displayName}</option>);
        counter++;
    })
    return mappedOptions;
}