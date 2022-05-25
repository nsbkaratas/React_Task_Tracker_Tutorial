import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick =()=>{
        console.log('Click')
    }
  return (
    <div>
        <header className='header'>
            <h1 >{title}</h1>
            <Button color='green' text='hello' onClick={onClick}/>
        </header>
    </div>
  )
}
Header.defaultProps = {
    title: 'Task Tracker',
}
Header.propTypes = {
    title: PropTypes.string,
}
// CSS in JS
// const headingStyle= {
//     color:'red', 
//     backgroundColor:'black'
// }
export default Header