function Card({children, reverse}) {
  return (
    <div className={` card ${reverse && 'reverse'}`} >{children}</div>
  )
  // You can Also set conditional inline styles with jsx  style {{}} **** it has  to double qouts
}

Card.defaultProps ={
    reverse: false,
}
export default Card