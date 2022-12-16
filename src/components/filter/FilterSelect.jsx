export default function FilterSelect({selectObject, onChange}, key) {
    return (
        <div className="form-floating" key={key}>
            <select
                key={key}
                ref={selectObject.ref}
                onChange={onChange}
                className="form-control bg-dark"
                defaultValue={selectObject.selectOptions.find(item => item.selected).value}
                id={"select" + selectObject.displayName + "Select"}
                aria-label={selectObject.displayName}
                aria-describedby={"select" + selectObject.displayName + "Select"}
            >
                {selectObject.selectOptions.map(option =>
                    <option value={option.value} key={generateKey()}>{option.displayName}</option>)}
            </select>
            <label
                htmlFor={"select" + selectObject.displayName + "Input"}>{selectObject.displayName}</label>
        </div>
    );
};

let keycounter = {type: "filterOption", key: 0};

function generateKey() {
    keycounter.key++;
    return `${keycounter.type}_${keycounter.key}`;
}