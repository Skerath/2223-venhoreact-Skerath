import Spinner from "react-bootstrap/Spinner";

export default function Loader({loading, position}) {
    if (loading) {
        return (
            <div className="text-center"
                 style={{marginTop: "20vw", zIndex: "3", position: `${position ? position : ""}`}}>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                <p>Loading...</p>
            </div>
        );
    }

    return null;
}