import {ReactComponent as SearchIcon} from '../images/search.svg'

const SearchBar = ({isDark}) => {
    return(
        <form className={`search-bar ${isDark ? 'search-bar--light' : 'search-bar--dark'}`} >
            <input 
                type="text" 
                placeholder='Search GitHub username…' 
                className={`search-bar__input ${isDark ? 'search-bar__input--light' : 'search-bar__input--dark'}`} />

            <SearchIcon className='search-bar__icon' />
        </form>
    )
}

export default SearchBar;