const Nav = ({ handleDownload }) => {
  return (
    <>
      <div className="nav">
        <h1 className="title">만다라트</h1>
        <div className="menu">
          <button className="saveButton" onClick={handleDownload}>
            저장
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
