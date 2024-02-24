import Mode from './Mode';

const Header = ({isDark, handleThemeChange}) => {
    return (
        <div className='header'>
            <h1 
                className={`heading-primary`}
                style={{color: isDark ? '#222731' : '#ffffff'}}>devfinder</h1>

            <Mode isDark={isDark} handleThemeChange={handleThemeChange} />
        </div>
    )
}

export default Header;