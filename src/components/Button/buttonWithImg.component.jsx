import "./buttonWithImg.style.css";

export function Button({ onClickHandler, imgSource }) {
  return (
    <button className="button-icon" onClick={onClickHandler}>
      <img className="img-inside" src={imgSource} alt={imgSource} />
    </button>
  );
}
