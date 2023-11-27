import {ReactComponent as MoonIcon} from '../images/moon.svg'
import {ReactComponent as SunIcon} from '../images/sun.svg'

const Mode = ({isDark, setIsDark}) => {
    return(
        <div className='mode' onClick={() => setIsDark(!isDark)}>
            {isDark ? <p className='mode__title mode__title--dark'>dark</p> : <p className='mode__title mode__title--light'>light</p>}
            
            {isDark ? 
                <MoonIcon className='mode__icon' /> 
                : 
                <SunIcon  className='mode__icon' /> }
        </div>
    )
}

export default Mode;