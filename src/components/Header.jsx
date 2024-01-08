import {Link} from 'react-router-dom'

function Header({text, bgColor, textColor}) {
    const headerStyles= { // Basic inline you can use style libraries suc ass
        // Shakra UI, Material UI
        backgroundColor: bgColor,
        color: textColor,
    }
  return (
    <header style={headerStyles}>
<div className="container">
  <Link style={{color:`${textColor}`}} to='/'>
    <h2>{text}</h2>
  </Link>
</div>
        </header>
  )
}

Header.defaultProps ={
text: 'Feedback UI',
bgColor : 'rgba(0,0,0,0.4)',
textColor: '#ff6a95'

}

export default Header