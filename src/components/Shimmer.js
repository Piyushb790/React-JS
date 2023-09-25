const Shimmer = () => {
  return (
    <div
      style={{ display: "flex", gap: 20, display: "flex", flexWrap: "wrap" }}
    >
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div key={index}>
            <div
              style={{
                width: 250,
                height: 250,
                backgroundColor: "lightgrey",
                marginTop: 20,
              }}
            ></div>
            <div
              style={{
                height: 20,
                width: 40,
                backgroundColor: "lightgrey",
                marginTop: 8,
              }}
            ></div>
            <div
              style={{
                height: 20,
                width: 200,
                backgroundColor: "lightgrey",
                marginTop: 8,
              }}
            ></div>
            <div
              style={{
                height: 20,
                width: 200,
                backgroundColor: "lightgrey",
                marginTop: 8,
              }}
            ></div>
            <div
              style={{
                height: 20,
                width: 250,
                backgroundColor: "lightgrey",
                marginTop: 8,
              }}
            ></div>
          </div>
        ))}
    </div>
  );
};
export default Shimmer;
