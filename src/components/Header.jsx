import Mode from './Mode';
import { useState } from 'react';

const Header = () => {
    let [ isDark, setIsDark ] = useState(true);

    return (
        <div className='flex-center-between'>
            <h1 className={`heading-primary ${isDark ? 'heading-primary--light' : 'heading-primary--dark'}`}>devfinder</h1>

            <Mode isDark={isDark} setIsDark={setIsDark} />
        </div>
    )
}

export default Header;