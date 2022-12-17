import './Filter.css';
import FilterInput from "./FilterInput";
import FilterSelect from "./FilterSelect";
import {useRef} from "react";

const defaultStylingOptions = {width: "21rem"};

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
            if (sublist.stylingOptions === undefined) {
                console.error(`stylingOptions for sublist #${sublistCounter} was not provided. Using default: ${JSON.stringify(defaultStylingOptions)}`);
                sublist.stylingOptions = defaultStylingOptions;
            }
            return (
                <div className="input-group" style={sublist.stylingOptions} key={sublistCounter}>
                    {mapFilterItems(sublist, sublistCounter)}
                </div>
            );
        });
    }

    function mapFilterItems(sublist, sublistCounter) {

        return sublist.filterObjects.map((item, itemCounter) => {

            const filterItemProps = {
                filterObject: item,
                onChange: onUserInput,
                key: `${sublistCounter}-${itemCounter}`,
                refKey: `${sublistCounter}-${itemCounter}`,
                refs: refsList
            };

            if (filterItemProps.filterObject.inputType !== undefined) {
                refKeysList.push(`${sublistCounter}-${itemCounter}`);
                return (<FilterInput {...filterItemProps}/>);
            }
            if (filterItemProps.filterObject.selectOptions !== undefined) {
                refKeysList.push(`${sublistCounter}-${itemCounter}`);
                return (<FilterSelect {...filterItemProps}/>);
            }
            throw new Error(`FilterItem must either have an inputType or selectOptions`);
        });
    }
};

