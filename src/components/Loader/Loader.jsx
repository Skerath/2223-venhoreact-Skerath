export default function Loader({ loading }) {
    if (loading) {
        return (
            <div className="text-center" style={{marginTop: "20vw"}}>
                <div className="spinner-border">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p>Loading...</p>
            </div>
        );
    }

    return null;
}