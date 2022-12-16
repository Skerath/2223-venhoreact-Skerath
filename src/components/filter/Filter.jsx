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
            {mapFilterGroups(input, onUserInput)}
        </div>
    );
};

function mapFilters(sublist, sublistcounter, onUserInput) {
    let itemcounter = 0;
    let newNewInput = [];
    for (let item = 0; item < sublist.filterObjects.length; item++) {
        newNewInput.push(sublist.filterObjects[item].inputType ?
            <FilterInput inputObject={sublist.filterObjects[item]} onChange={onUserInput}
                         key={`${sublistcounter}-${itemcounter}`}></FilterInput> :
            <FilterSelect selectObject={sublist.filterObjects[item]} onChange={onUserInput}
                          key={`${sublistcounter}-${itemcounter}`}></FilterSelect>);
        itemcounter++;
    }
    return newNewInput;
}

function mapFilterGroups(input, onUserInput) {
    let sublistcounter = 0;
    let newInput = [];
    for (let sublist = 0; sublist < input.length; sublist++) {
        newInput.push(
            <div className="input-group" style={input[sublist].stylingOptions} key={sublistcounter}>
                {mapFilters(input[sublist], sublistcounter, onUserInput)}
            </div>
        );
        sublistcounter++;
    }
    return newInput;

}