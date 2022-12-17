import './Filter.css';
import FilterInput from "./FilterInput";
import FilterSelect from "./FilterSelect";
import {useRef} from "react";


export default function Filter({input, output}) {
    const refKeysList = [];
    const refsList = useRef([]);

    return (
        <div className="d-flex flex-row flex-wrap justify-content-center mb-3">
            {mapFilterGroups(input, onUserInput, refsList)}
        </div>
    );

    function onUserInput() {
        let outputs = [];

        console.log("refKeysList= " + refKeysList);

        for (let i = 0; i < refKeysList.length; i++) {
            if (refsList.current[refKeysList[i]]) {
                console.log(`refsList.current[${refKeysList[i]}].value= ` + refsList.current[refKeysList[i]].value);
                outputs[i] = refsList.current[refKeysList[i]].value
            }

        }

        console.log("outputs= " + outputs);

        output(outputs);
    }


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
            refKeysList.push(`${sublistcounter}-${itemcounter}`);
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
};

