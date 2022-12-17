import './Filter.css';
import FilterInput from "./FilterInput";
import FilterSelect from "./FilterSelect";
import {useRef} from "react";

export default function Filter({layout, output}) {
    const refKeysList = [];
    const refsList = useRef([]);

    const queryPrefix = [];
    layout.forEach(sublist => sublist.filterObjects.forEach(parameter => queryPrefix.push(parameter.displayName)));


    return (
        <div className="d-flex flex-row flex-wrap justify-content-center mb-3">
            {mapFilterGroups()}
        </div>
    );


    function onUserInput() {
        let outputs = [];
        for (let i = 0; i < refKeysList.length; i++)
            outputs[i] = refsList.current[refKeysList[i]].value;
        output({output: outputs, queryPrefix: queryPrefix});
    }


    function mapFilterGroups() {
        return layout.map((sublist, sublistCounter) => {
            return (
                <div className="input-group" style={sublist.stylingOptions} key={sublistCounter}>
                    {mapFilterGroupItems(sublist, sublistCounter)}
                </div>
            );
        });
    }

    function mapFilterGroupItems(sublist, sublistCounter) {
        return sublist.filterObjects.map((item, itemCounter) => {
            refKeysList.push(`${sublistCounter}-${itemCounter}`);
            return (
                item.inputType ?
                    <FilterInput inputObject={item} onChange={onUserInput}
                                 key={`${sublistCounter}-${itemCounter}`} refKey={`${sublistCounter}-${itemCounter}`}
                                 refs={refsList}/> :
                    <FilterSelect selectObject={item} onChange={onUserInput}
                                  key={`${sublistCounter}-${itemCounter}`} refKey={`${sublistCounter}-${itemCounter}`}
                                  refs={refsList}/>
            );
        });
    }
};

