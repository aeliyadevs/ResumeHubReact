function EudItem(props) {
  return (
    <>
      <div className="item">
        <h3 className="item-title">{props.title}</h3>
        <p className="item-desc">{props.desc}</p>
        <p>{props.address}</p>
        <span className="item-right">{props.right}</span>
      </div>
    </>
  );
}
export default EudItem;
