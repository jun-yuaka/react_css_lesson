export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- StylaedJsx -</p>
        <button className="button">FIGHT!!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: 2px solid #392eff;
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 8px;
          margin: 8px;
          border-radius: 20px;
        }
        .title {
          color: #3d84a8;
          margin: 0;
        }
        .button {
          background-color: #abedd8;
          border: none;
          padding: 8px;
          border-radius: 8px;
      `}</style>
    </>
  );
};
