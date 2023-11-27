import {ReactComponent as MoonIcon} from '../images/moon.svg'

const Header = () => {
    return (
        <div className='flex-center-between'>
            <h1>devfinder</h1>
            <div className='flex-center-between'>
                <p>dark</p>
                <MoonIcon className='hoverOnLight' />
            </div>
        </div>
    )
}

export default Header;