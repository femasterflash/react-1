const Card = (props) => {
  return(
    <div style={{ border: '1px solid white', borderRadius: '8px' ,width: '200px', display: "flex", alignItems: "center", padding:"8px", gap:"25px" }}>
      {/* imagem */}
      <img src={props.img} alt="" />
      {/* nome */}
      <span style={{
        color: 'white'
      }}> { props.name } </span>
    </div>
  )
}

export default Card;