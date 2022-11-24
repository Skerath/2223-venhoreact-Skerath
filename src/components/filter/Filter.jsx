import './Filter.css';
import {useRef} from "react";

export default function Filter({input, output}) {

    const name = useRef(null);
    const itemID = useRef(null);
    const level = useRef(null);
    const modifier = useRef(null);
    const uses = useRef(null);

    const onUserInput = () => {
        output([name.current.value,
            itemID.current.value,
            level.current.value,
            modifier.current.value,
            uses.current.value]);
    };

    return (
        <div className="container mb-3">
            <div>
                <div className="input-group mb-3 w-50">
                    <div className="form-floating">
                        <input
                            ref={name}
                            onChange={onUserInput}
                            type="text"
                            className="form-control bg-dark"
                            placeholder="Crawler Eye"
                            id="textNameInput"
                            aria-label="Name"
                            aria-describedby="textNameInput"
                        />
                        <label htmlFor="textNameInput">Name</label>
                    </div>
                </div>
                <div className="input-group mb-3 ms-3" style={{width: "7.5%"}}>
                    <div className="form-floating">
                        <input
                            ref={itemID}
                            onChange={onUserInput}
                            type="number"
                            className="form-control bg-dark"
                            placeholder="3"
                            id="numberIDInput"
                            aria-label="ID"
                            aria-describedby="numberIDInput"
                        />
                        <label htmlFor="numberIDInput">ID</label>
                    </div>
                </div>
                <div className="input-group mb-3 ms-3" style={{width: "7.5%"}}>
                    <div className="form-floating">
                        <input
                            ref={level}
                            onChange={onUserInput}
                            type="number"
                            className="form-control bg-dark"
                            placeholder="15"
                            id="numberMaxLevelInput"
                            aria-label="MaxLevel"
                            aria-describedby="numberMaxLevelInput"
                        />
                        <label htmlFor="numberMinLevelInput">Max Level</label>
                    </div>
                </div>
                <div className="input-group mb-3 ms-3 w-50">
                    <div className="form-floating">
                        <select
                            ref={modifier}
                            onChange={onUserInput}
                            className="form-control bg-dark"
                            placeholder="Health"
                            id="txtModifierInput"
                            aria-label="Name"
                            aria-describedby="txtModifierInput"
                        >
                            <option value="">N/A</option>
                            <option value="health">Health</option>
                            <option value="walk speed">Walk Speed</option>
                        </select>
                        <label htmlFor="txtModifierInput">Modifier</label>
                    </div>
                </div>
                <div className="input-group mb-3 ms-3 w-50">
                    <div className="form-floating">
                        <select
                            ref={uses}
                            onChange={onUserInput}
                            className="form-control bg-dark"
                            placeholder="Armouring"
                            id="txtUseCaseInput"
                            aria-label="UseCase"
                            aria-describedby="txtUseCaseInput"
                        >
                            <option value="">N/A</option>
                            <option value="Armouring">Armouring</option>
                            <option value="Tailoring">Tailoring</option>
                            <option value="Scribing">Scribing</option>
                            <option value="Woodworking">Woodworking</option>
                            <option value="Alchemism">Alchemism</option>
                        </select>
                        <label htmlFor="txtUseCaseInput">Use Case</label>
                    </div>
                </div>
            </div>
        </div>
    );
}