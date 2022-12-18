import './Filter.css';
import FilterInput from "./FilterInput";
import FilterSelect from "./FilterSelect";
import {useRef} from "react";
import {Error} from "../error/Error";

const defaultStylingOptions = {width: "21rem"};
let outputs;
const refKeysList = [];


const mapFilterItems = (sublist, sublistCounter, onUserInput, refsList) => {

    return sublist.filterObjects.map((item, itemCounter) => {
        const filterItemProps = {
            filterObject: item,
            onUserInput: onUserInput,
            key: `${sublistCounter}-${itemCounter}`,
            refKey: `${sublistCounter}-${itemCounter}`,
            refs: refsList
        };

        let mappedItem;

        if (filterItemProps.filterObject.inputType)
            mappedItem = (<FilterInput {...filterItemProps}/>);
        else if (filterItemProps.filterObject.selectOptions)
            mappedItem = (<FilterSelect {...filterItemProps}/>);
        else {
            console.error(`Filter layout was not set-up correctly: FilterItem must either have an inputType or selectOptions`);
            return (<Error styling={{width: null}}
                           error={"Filter has been set-up incorrectly. Please contact the developer."}/>);
        }
        refKeysList.push(`${sublistCounter}-${itemCounter}`);
        return mappedItem;
    });
}

function mapFilterGroups(layout, onUserChange, refsList) {
    refKeysList.length = 0;

    return layout.map((sublist, sublistCounter) => {
        if (!sublist.stylingOptions) {
            console.error(`stylingOptions for sublist #${sublistCounter} was not provided. Using default: ${JSON.stringify(defaultStylingOptions)}`);
            sublist.stylingOptions = defaultStylingOptions;
        }
        return (
            <div className="input-group" style={sublist.stylingOptions} key={sublistCounter}>
                {mapFilterItems(sublist, sublistCounter, onUserChange, refsList)}
            </div>
        );
    });
}

export default function Filter({layout, output}) {
    const refsList = useRef([]);

    const onUserInput = () => {
        outputs = [];
        for (let i = 0; i < refKeysList.length; i++)
            outputs[i] = refsList.current[refKeysList[i]].value;
        output(outputs);
    };

    return (
        <div className="d-flex flex-row flex-wrap justify-content-center mb-3">
            {mapFilterGroups(layout, onUserInput, refsList)}
        </div>
    );
};