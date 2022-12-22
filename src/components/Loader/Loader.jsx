import Spinner from "react-bootstrap/Spinner";

export default function Loader({loading}) {
    if (loading) {
        return (
            <div className="text-center" style={{marginTop: "20vw"}}>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                <p>Loading...</p>
            </div>
        );
    }

    return null;
}