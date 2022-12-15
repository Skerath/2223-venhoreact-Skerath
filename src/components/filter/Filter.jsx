import './Filter.css';
import FilterInput from "./FilterInput";
import FilterSelect from "./FilterSelect";

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

    return (
        <>
            {input.map(sublist => {
                return (
                    <div className="input-group" style={sublist.stylingOptions}>
                        {sublist.filterObjects.map(filterObject => {
                            return filterObject.inputType ?
                                <FilterInput inputObject={filterObject} onChange={onUserInput}></FilterInput> :
                                <FilterSelect selectObject={filterObject} onChange={onUserInput}></FilterSelect>;
                        })}
                    </div>
                );
            })}
        </>
    );
};