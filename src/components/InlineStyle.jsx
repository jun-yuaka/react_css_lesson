export const InlineStyle = () => {
  const containerStyle = {
    border: "2px solid #392eff",
    display: "flex",
    alineItems: "center",
    justifyContent: "space-around",
    padding: "8px",
    margin: "8px",
    borderRadius: "20px"
  };
  const titleStyle = {
    color: "#3d84a8",
    margin: "0"
  };
  const buttonStyle = {
    backgroundColor: "#abedd8",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  };
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- InlineStyle -</p>
      <button style={buttonStyle}>FIGHT!!</button>
    </div>
  );
};
