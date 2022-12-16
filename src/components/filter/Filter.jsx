import './Filter.css';
import FilterInput from "./FilterInput";
import FilterSelect from "./FilterSelect";

export default function Filter({input, output}) {

    // TODO: properly use ref
    //  "Unexpected ref object provided for select. Use either a ref-setter function or React.createRef()."

    const onUserInput = () => {
        let outputs = [];
        input.forEach(sublist => {
            sublist.filterObjects.forEach(filterObject => outputs.push(filterObject.ref.current.value))
        });
        output(outputs);
    };

    return (
        <div className="d-flex flex-row flex-wrap justify-content-center mb-3">
            {input.map((sublist, sublistcounter) => { // filter groups
                return (
                    <div className="input-group" style={sublist.stylingOptions} key={sublistcounter}>
                        {sublist.filterObjects.map((item, itemcounter) => { // individual filter objects
                            return (
                                item.inputType ?
                                    <FilterInput inputObject={item} onChange={onUserInput}
                                                 key={`${sublistcounter}-${itemcounter}`}></FilterInput> :
                                    <FilterSelect selectObject={item} onChange={onUserInput}
                                                  key={`${sublistcounter}-${itemcounter}`}></FilterSelect>
                            );
                        })}
                    </div>
                )
            })}
        </div>
    );
};