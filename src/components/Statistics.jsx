


const Statistics = ({isDark, userData}) => {
    return(
        <div className={`statistics`}>
            <div className="statistics__item">
                <p className={`statistics__item--title`}>repos</p>
                <p className={`statistics__item--count`}>{userData.public_repos}</p>
            </div>
            <div className="statistics__item">
                <p className={`statistics__item--title`}>followers</p>
                <p className={`statistics__item--count`}>{userData.followers}</p>
            </div>
            <div className="statistics__item">
                <p className={`statistics__item--title`}>following</p>
                <p className={`statistics__item--count`}>{userData.following}</p>
            </div>
        </div>
    )
}

export default Statistics;