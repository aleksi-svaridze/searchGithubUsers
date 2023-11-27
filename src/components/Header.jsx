import Mode from './Mode';

const Header = ({isDark, setIsDark}) => {
    return (
        <div className='header'>
            <h1 className={`heading-primary ${isDark ? 'heading-primary--light' : 'heading-primary--dark'}`}>devfinder</h1>

            <Mode isDark={isDark} setIsDark={setIsDark} />
        </div>
    )
}

export default Header;