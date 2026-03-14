const Shimmer = ({ width = "100%", height = "16px", borderRadius = "4px" }) => {
  return (
    <div className="shimmer-container" data-test>
      <div
        className="shimmer"
        data-testid="shimmer"
        style={{ width, height, borderRadius }}
      >Loading</div>
    </div>
  );
};

export default Shimmer;
