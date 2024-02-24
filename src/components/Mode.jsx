import {ReactComponent as MoonIcon} from '../images/moon.svg'
import {ReactComponent as SunIcon} from '../images/sun.svg'

const Mode = ({isDark, handleThemeChange}) => {
    return(
        <div className='mode' onClick={handleThemeChange}>
            <p className='mode__title'>{isDark ? 'dark' : 'light'}</p>
            {isDark ? <MoonIcon className='mode__icon' /> : <SunIcon className='mode__icon' />}
        </div>
    )
}

export default Mode;