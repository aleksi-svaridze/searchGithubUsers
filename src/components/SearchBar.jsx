import {ReactComponent as SearchIcon} from '../images/search.svg'

const SearchBar = ({isDark, userValue, setUserValue, handleUserData, userData}) => {
    return(
        <form className={`search-bar ${isDark ? 'search-bar--light' : 'search-bar--dark'}`} >
            <input 
                type="text" 
                placeholder='Search GitHub username…' 
                className={`search-bar__input ${isDark ? 'search-bar__input--light' : 'search-bar__input--dark'}`} 
                value={userValue}
                onChange={(e) => setUserValue(e.target.value)}
                />

            <SearchIcon className='search-bar__icon' />
            {userData.message !== 'Not Found' ? '' : <p className='search-bar__no-result'>No result</p> }
            <button className='search-bar__btn' onClick={(e) => handleUserData(e)}>search</button>
        </form>
    )
}

export default SearchBar;