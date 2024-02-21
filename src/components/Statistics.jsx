


const Statistics = ({isDark, userData}) => {
    return(
        <div className={`statistics ${isDark ? 'statistics--light' : 'statistics--dark'}`}>
            <div className="statistics__item">
                <p className={`statistics__item--title ${isDark ? 'statistics__item--title--light' : 'statistics__item--title--dark'}`}>repos</p>
                <p className={`statistics__item--count ${isDark ? 'statistics__item--count--light' : 'statistics__item--count--dark'}`}>{userData.public_repos}</p>
            </div>
            <div className="statistics__item">
                <p className={`statistics__item--title ${isDark ? 'statistics__item--title--light' : 'statistics__item--title--dark'}`}>followers</p>
                <p className={`statistics__item--count ${isDark ? 'statistics__item--count--light' : 'statistics__item--count--dark'}`}>{userData.followers}</p>
            </div>
            <div className="statistics__item">
                <p className={`statistics__item--title ${isDark ? 'statistics__item--title--light' : 'statistics__item--title--dark'}`}>following</p>
                <p className={`statistics__item--count ${isDark ? 'statistics__item--count--light' : 'statistics__item--count--dark'}`}>{userData.following}</p>
            </div>
        </div>
    )
}

export default Statistics;