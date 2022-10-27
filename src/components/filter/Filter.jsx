import './Filter.css';
import {useRef} from "react";

export default function Filter({input, output}) {

    const ref = useRef(null);
    const onUserInput = () => {
        output(ref.current.value);
    };

    return (
        <div className="container">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text bg-dark" id="nameInputText">Name</span>
                </div>
                <input
                    ref={ref}
                    onChange={onUserInput}
                    type="text"
                    className="form-control bg-dark"
                    placeholder="Crawler Eye"
                    id="txtInputTable"
                    aria-label="Name"
                    aria-describedby="nameInputText"
                />
            </div>
        </div>
    );
}