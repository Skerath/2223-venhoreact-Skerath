import './Filter.css';
import FilterInput from "./FilterInput";
import FilterSelect from "./FilterSelect";
import {useRef} from "react";


export default function Filter({input, output}) {
    let inputList = [];

    // voor in ingredient.jsx
    let queryPrefix = [];
    input.forEach(a => a.filterObjects.forEach(b => queryPrefix.push(b.displayName)));

    const refsList = useRef([]);


    function mapFilterGroups() {
        return input.map((sublist, sublistcounter) => {
            return (
                <div className="input-group" style={sublist.stylingOptions} key={sublistcounter}>
                    {mapFilters(sublist, sublistcounter, onUserInput, refsList)}
                </div>
            );
        });
    }

    function mapFilters(sublist, sublistcounter) {
        return sublist.filterObjects.map((item, itemcounter) => {
            inputList.push(`${sublistcounter}-${itemcounter}`);
            return (
                item.inputType ?
                    <FilterInput inputObject={item} onChange={onUserInput}
                                 key={`${sublistcounter}-${itemcounter}`} keya={`${sublistcounter}-${itemcounter}`}
                                 refs={refsList}></FilterInput> :
                    <FilterSelect selectObject={item} onChange={onUserInput}
                                  key={`${sublistcounter}-${itemcounter}`} keya={`${sublistcounter}-${itemcounter}`}
                                  refs={refsList}></FilterSelect>
            );
        });
    }


    function onUserInput() {
        let outputs = [];

        console.log("inputList= " + inputList);
        console.log(queryPrefix);

        for (let i = 0; i < inputList.length; i++) {
            if (refsList.current[inputList[i]]) {
                console.log(`refsList.current[${inputList[i]}].value= ` + refsList.current[inputList[i]].value);
                outputs[i] = refsList.current[inputList[i]].value
            }

        }

        console.log("outputs= " + outputs);

        output(outputs);
    }

    return (
        <div className="d-flex flex-row flex-wrap justify-content-center mb-3">
            {mapFilterGroups(input, onUserInput, refsList)}
        </div>
    );
};

