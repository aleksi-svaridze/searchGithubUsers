import {ReactComponent as SearchIcon} from '../images/search.svg'
import { useState } from 'react';

const SearchBar = ({isDark}) => {
    let [isUser] = useState(true);
    return(
        <form className={`search-bar ${isDark ? 'search-bar--light' : 'search-bar--dark'}`} >
            <input 
                type="text" 
                placeholder='Search GitHub username…' 
                className={`search-bar__input ${isDark ? 'search-bar__input--light' : 'search-bar__input--dark'}`} />

            <SearchIcon className='search-bar__icon' />
            {isUser &&  <p className='search-bar__no-result'>No result</p> }
            <button className='search-bar__btn'>search</button>
        </form>
    )
}

export default SearchBar;