import './Filter.css';
import FilterInput from "./FilterInput";
import FilterSelect from "./FilterSelect";

export default function Filter({input, output}) {

    // TODO: properly use ref. Right now it's broken (aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    //  "Unexpected ref object provided for select. Use either a ref-setter function or React.createRef()."

    const onUserInput = () => {
        let outputs = [];
        input.forEach(sublist => {
            sublist.filterObjects.forEach(filterObject => outputs.push(filterObject.ref.current.value))
        });
        output(outputs);
    };

    return (
        <div className="d-flex flex-row flex-wrap justify-content-center mb-3" key={generateKey()}>
            {input.map(sublist =>
                <div className="input-group" style={sublist.stylingOptions} key={generateKey()}>
                    {sublist.filterObjects.map(item => item.inputType ?
                        <FilterInput inputObject={item} onChange={onUserInput}
                                     key={generateKey()}></FilterInput> :
                        <FilterSelect selectObject={item} onChange={onUserInput}
                                      key={generateKey()}></FilterSelect>)}
                </div>
            )}
        </div>
    );
};

let keycounter = {type: "filter", key: 0};

function generateKey() {
    keycounter.key++;
    return `${keycounter.type}_${keycounter.key}`;
}