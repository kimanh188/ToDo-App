import "./buttonWithImg.style.css";

export function Button({ className, onClickHandler, imgSource }) {
  return (
    <button className={className} onClick={onClickHandler}>
      <img className="img-inside" src={imgSource} alt={imgSource} />
    </button>
  );
}
