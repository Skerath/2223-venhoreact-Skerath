import './Filter.css';

export default function Filter({input, output}) {
    // TODO make inputList (under this) into input (above this) and move it to Ingredient.jsx


    const onUserInput = () => {

        output(input.map(filterObject => filterObject.current.value));

        // output([name.current.value,
        //     tier.current.value,
        //     minlevel.current.value,
        //     maxlevel.current.value,
        //     modifier.current.value,
        //     profession.current.value]);
    };

    return (
        // TODO try to sublist one more time for input-groups (sigh)
        <div className="d-flex flex-row flex-wrap justify-content-center mb-3">
            {input.map(filterObject => {
                if (filterObject.type)
                    return (
                        <div className="input-group" style={filterObject.stylingOptions}>
                            <div className="form-floating">
                                <input
                                    ref={filterObject}
                                    onChange={onUserInput}
                                    type={filterObject.type}
                                    className="form-control bg-dark"
                                    placeholder="Crawler Eye"
                                    id={"text" + filterObject.displayName + "Input"}
                                    aria-label={filterObject.displayName}
                                    aria-describedby={"text" + filterObject.displayName + "Input"}
                                />
                                <label
                                    htmlFor={"text" + filterObject.displayName + "Input"}>{filterObject.displayName}</label>
                            </div>
                        </div>)
                else
                    // TODO select type
                    return <a>nop</a>;
            })}
        </div>
    );
};


{/*<div className="input-group" style={{width: "15rem"}}>*/
}
{/*    <div className="form-floating">*/
}
{/*        <input*/
}
{/*            ref={name}*/
}
{/*            onChange={onUserInput}*/
}
{/*            type="text"*/
}
{/*            className="form-control bg-dark"*/
}
{/*            placeholder="Crawler Eye"*/
}
{/*            id="textNameInput"*/
}
{/*            aria-label="Name"*/
}
{/*            aria-describedby="textNameInput"*/
}
{/*        />*/
}
{/*        <label htmlFor="textNameInput">Name</label>*/
}
{/*    </div>*/
}
{/*</div>*/
}
{/*<div className="input-group" style={{width: "5rem"}}>*/
}
{/*    <div className="form-floating">*/
}
{/*        <input*/
}
{/*            ref={tier}*/
}
{/*            onChange={onUserInput}*/
}
{/*            type="number"*/
}
{/*            className="form-control bg-dark"*/
}
{/*            placeholder="3"*/
}
{/*            id="numberIDInput"*/
}
{/*            aria-label="ID"*/
}
{/*            aria-describedby="numberIDInput"*/
}
{/*        />*/
}
{/*        <label htmlFor="numberIDInput">ID</label>*/
}
{/*    </div>*/
}
{/*</div>*/
}
{/*<div className="input-group" style={{width: "21rem"}}>*/
}
{/*    <div className="form-floating">*/
}
{/*        <input*/
}
{/*            ref={minlevel}*/
}
{/*            onChange={onUserInput}*/
}
{/*            type="number"*/
}
{/*            className="form-control bg-dark"*/
}
{/*            placeholder="15"*/
}
{/*            id="numberMinLevelInput"*/
}
{/*            aria-label="MinLevel"*/
}
{/*            aria-describedby="numberMinLevelInput"*/
}
{/*        />*/
}
{/*        <label htmlFor="numberMinLevelInput">Min Level</label>*/
}
{/*    </div>*/
}
{/*    <div className="form-floating">*/
}
{/*        <input*/
}
{/*            ref={maxlevel}*/
}
{/*            onChange={onUserInput}*/
}
{/*            type="number"*/
}
{/*            className="form-control bg-dark"*/
}
{/*            placeholder="15"*/
}
{/*            id="numberMaxLevelInput"*/
}
{/*            aria-label="MaxLevel"*/
}
{/*            aria-describedby="numberMaxLevelInput"*/
}
{/*        />*/
}
{/*        <label htmlFor="numberMaxLevelInput">Max Level</label>*/
}
{/*    </div>*/
}
{/*</div>*/
}
{/*<div className="input-group" style={{width: "21rem"}}>*/
}
{/*    <div className="form-floating">*/
}
{/*        <select*/
}
{/*            ref={modifier}*/
}
{/*            onChange={onUserInput}*/
}
{/*            className="form-control bg-dark"*/
}
{/*            placeholder="Health"*/
}
{/*            id="txtModifierInput"*/
}
{/*            aria-label="Name"*/
}
{/*            aria-describedby="txtModifierInput"*/
}
{/*        >*/
}
{/*            <option selected value="">Any</option>*/
}
{/*            <option value="health">Health</option>*/
}
{/*            <option value="walk speed">Walk Speed</option>*/
}
{/*        </select>*/
}
{/*        <label htmlFor="txtModifierInput">Modifier</label>*/
}
{/*    </div>*/
}
{/*    <div className="form-floating">*/
}
{/*        <select*/
}
{/*            ref={profession}*/
}
{/*            onChange={onUserInput}*/
}
{/*            className="form-control bg-dark"*/
}
{/*            placeholder="Armouring"*/
}
{/*            id="txtUseCaseInput"*/
}
{/*            aria-label="UseCase"*/
}
{/*            aria-describedby="txtUseCaseInput"*/
}
{/*        >*/
}
{/*            <option selected value="">Any</option>*/
}
{/*            <option value="Armouring">Armouring</option>*/
}
{/*            <option value="Tailoring">Tailoring</option>*/
}
{/*            <option value="Scribing">Scribing</option>*/
}
{/*            <option value="Woodworking">Woodworking</option>*/
}
{/*            <option value="Alchemism">Alchemism</option>*/
}
{/*        </select>*/
}
{/*        <label htmlFor="txtUseCaseInput">Profession</label>*/
}
{/*    </div>*/
}
{/*</div>*/
}
