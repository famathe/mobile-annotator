import "./ActionMenu.css";

function ActionMenu(props) {
  function handleClickPrevious(e) {
    props.onImageIndexChange(props.imageIndex - 1);
  }
  function handleClickNext(e) {
    props.onImageIndexChange(props.imageIndex + 1);
  }
  return (
    <div className="action-menu-container">
      <button onClick={handleClickPrevious}>Previous</button>
      <button onClick={handleClickNext}>Next</button>
    </div>
  );
}

export default ActionMenu;
