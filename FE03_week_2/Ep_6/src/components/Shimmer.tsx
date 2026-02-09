const Shimmer = ({ width = "100%", height = "16px", borderRadius = "4px" }) => {
    return <div className="shimmer-container">
        <div
            className="shimmer"
            style={{ width, height, borderRadius }}
        ></div>
    </div>
}

export default Shimmer