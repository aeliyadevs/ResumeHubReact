function ProjItem(props) {
  return (
    <>
      <div className="item">
        <h3 className="item-title uppercase">{props.title}</h3>
        <p className="item-desc">{props.desc}</p>
        <p className="item-focus">
          <i className="fa-solid fa-arrow-right"></i>
          {props.focus}
        </p>
      </div>
    </>
  );
}
export default ProjItem;
