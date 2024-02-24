import {ReactComponent as SearchIcon} from '../images/search.svg'

const SearchBar = ({isDark, userValue, setUserValue, handleUserData, userData}) => {
    return(
        <form className={`search-bar`} >
            <input 
                type="text" 
                placeholder='Search GitHub username…' 
                className={`search-bar__input`} 
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