


const Statistics = ({isDark, userData}) => {
    return(
        <div className={`statistics`}>
            <div className="statistics__item">
                <p className={`statistics__item--title`}>repos</p>
                <p className={`statistics__item--count`}>{userData.public_repos ? userData.public_repos : '0'}</p>
            </div>
            <div className="statistics__item">
                <p className={`statistics__item--title`}>followers</p>
                <p className={`statistics__item--count`}>{userData.followers ? userData.followers : '0'}</p>
            </div>
            <div className="statistics__item">
                <p className={`statistics__item--title`}>following</p>
                <p className={`statistics__item--count`}>{userData.following ? userData.following : '0'}</p>
            </div>
        </div>
    )
}

export default Statistics;