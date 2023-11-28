


const Statistics = ({isDark}) => {
    return(
        <div className={`statistics ${isDark ? 'statistics--light' : 'statistics--dark'}`}>
            <div className="statistics__item">
                <p className={`statistics__item--title ${isDark ? 'statistics__item--title--light' : 'statistics__item--title--dark'}`}>repos</p>
                <p className={`statistics__item--count ${isDark ? 'statistics__item--count--light' : 'statistics__item--count--dark'}`}>8</p>
            </div>
            <div className="statistics__item">
                <p className={`statistics__item--title ${isDark ? 'statistics__item--title--light' : 'statistics__item--title--dark'}`}>followers</p>
                <p className={`statistics__item--count ${isDark ? 'statistics__item--count--light' : 'statistics__item--count--dark'}`}>88888</p>
            </div>
            <div className="statistics__item">
                <p className={`statistics__item--title ${isDark ? 'statistics__item--title--light' : 'statistics__item--title--dark'}`}>following</p>
                <p className={`statistics__item--count ${isDark ? 'statistics__item--count--light' : 'statistics__item--count--dark'}`}>88</p>
            </div>
        </div>
    )
}

export default Statistics;