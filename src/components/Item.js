const Item = (props) => {
  return(
    <div className="Item">
      <img src={props.img} alt=""/>
      <strong>{props.name}</strong>
      <p>{props.amount}</p>
    </div>
  )
}

export { Item }
