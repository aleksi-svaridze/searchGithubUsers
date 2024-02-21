import temporeryUserAvatar from '../images/avatar.png';
import { useWindowWidth } from '@react-hook/window-size';
import Statistics from './Statistics';

import { LocationIcon, GithubIcon, LinkIcon, TwitterIcon } from '../images/svgs';

const UserCard = ({isDark, userData}) => {
    let width = useWindowWidth();

    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let day = new Date(userData.created_at).getDate();
    let month = months[new Date(userData.created_at).getMonth()];
    let year = new Date(userData.created_at).getFullYear();


    return(
        <>
        {userData.message === 'Not Found' ? <div className={`card ${isDark ? 'card--light' : 'card--dark'}`}></div> : 
  
        <div className={`card ${isDark ? 'card--light' : 'card--dark'}`}>
            {width >= 992 && <img src={userData.avatar_url ? userData.avatar_url : temporeryUserAvatar} className='card__avatar' alt="" />} 

            <div className='card__content--container'>

                <div className='card__header--container'>
                    {width < 992 && <img src={userData.avatar_url ? userData.avatar_url : temporeryUserAvatar} className='card__avatar' alt="" />}                    
                    <header className='card__header'>
                        <h2 className={`card__title ${isDark ? 'card__title--light' : 'card__title--dark'}`}>
                            {userData.name}
                            { width >= 992 && <span className={`card__sub-title ${isDark ? 'card__sub-title--light' : 'card__sub-title--dark'}`}>Joined {day} {month} {year}</span>}
                        </h2>

                        <p className='card__username'>@{userData.login}</p>

                        { width < 992 && <span className={`card__sub-title ${isDark ? 'card__sub-title--light' : 'card__sub-title--dark'}`}>Joined {day} {month} {year}</span>}
                    </header>
                </div>

                <div className='card__body'>
                    <p className={`card__bio ${isDark ? 'card__bio--light' : 'card__bio--dark'}`}>
                        {userData.bio ? 
                            userData.bio
                            :
                            'This profile has no bio'
                        }
                    </p>

                    <Statistics isDark={isDark} userData={userData} />
                </div>

                <footer className="card__footer">
                    <a 
                        href={userData.location ? userData.localion : '#'} 
                        className='info' 
                        style={{textDecorationColor: userData.location ? (isDark ? '#4B6A9B' : 'white') : 'transparent', cursor: !userData.location && 'auto'}}
                    >
                        <span className='info__icon'>
                            <LocationIcon 
                                fill={userData.location ? (isDark ? '#4B6A9B' : 'white') : (isDark ? 'rgba(75, 106, 155, .5)' : 'rgba(255,255,255, .5)')} 
                                className='info__icon--location'
                            /> 
                        </span>
                        <span 
                            className={`info__name ${isDark ? 'info__name--light' : 'info__name--dark'}`}
                            style={{color: userData.location ? (isDark ? '#4B6A9B' : 'white') : (isDark ? 'rgba(75, 106, 155, .5)' : 'rgba(255,255,255, .5)'), textTransform: 'capitalize'}}>{userData.location ? userData.location : 'Not Avaliable'}</span>
                    </a>

                    <a 
                        href={userData.blog ? userData.blog : '#'} 
                        className='info' 
                        style={{textDecorationColor: userData.blog ? (isDark ? '#4B6A9B' : 'white') : 'transparent', cursor: !userData.blog && 'auto'}}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <span className='info__icon'>
                            <LinkIcon 
                                className='info__icon--link'
                                fill={userData.blog ? (isDark ? '#4B6A9B' : 'white') : (isDark ? 'rgba(75, 106, 155, .5)' : 'rgba(255,255,255, .5)')} 
                            /> 
                        </span>
                        <span 
                            className={`info__name ${isDark ? 'info__name--light' : 'info__name--dark'}`}
                            style={{color: userData.blog ? (isDark ? '#4B6A9B' : 'white') : (isDark ? 'rgba(75, 106, 155, .5)' : 'rgba(255,255,255, .5)'), textTransform: 'capitalize'}}
                        >{userData.blog ? 'Portfolio' : 'Not Available'}
                        </span>
                    </a>

                    <a 
                        href={userData.twitter_username ? userData.twitter_username : ''} 
                        className='info' 
                        style={{
                            textDecorationColor: userData.twitter_username ? (isDark ? '#4B6A9B' : 'white') : 'transparent', cursor: !userData.twitter_username && 'auto'}}
                    >
                        <span className='info__icon'>
                            <TwitterIcon 
                                className='info__icon--twitter'
                                fill={userData.twitter_username ? (isDark ? '#4B6A9B' : 'white') : (isDark ? 'rgba(75, 106, 155, .5)' : 'rgba(255,255,255, .5)')} 
                            /> 
                        </span>
                        <span 
                            className={`info__name ${isDark ? 'info__name--light' : 'info__name--dark'}`}
                            style={{color: userData.twitter_username ? (isDark ? '#4B6A9B' : 'white') : (isDark ? 'rgba(75, 106, 155, .5)' : 'rgba(255,255,255, .5)'), textTransform: 'capitalize'}}
                        >
                                {userData.twitter_username ? userData.twitter_username : 'Not Available'}
                        </span>
                    </a>

                    <a  href={userData.html_url} 
                        className={'info'} 
                        style={{textDecorationColor: userData.html_url ? (isDark ? '#4B6A9B' : 'white') : 'transparent', cursor: !userData.html_url && 'auto'}}
                        target='_blank'
                        rel="noreferrer"
                        >
                        <span className='info__icon'>
                            <GithubIcon 
                                className='info__icon--github'
                                fill={userData.html_url ? (isDark ? '#4B6A9B' : 'white') : (isDark ? 'rgba(75, 106, 155, .5)' : 'rgba(255,255,255, .5)')} 
                            /> 
                        </span>
                        <span 
                            className={`info__name ${isDark ? 'info__name--light' : 'info__name--dark'}`}
                            style={{color: userData.html_url ? (isDark ? '#4B6A9B' : 'white') : (isDark ? 'rgba(75, 106, 155, .5)' : 'rgba(255,255,255, .5)')}}
                        >
                            {userData.html_url ? `@${userData.login}` : 'Not Available'}
                        </span>
                    </a>
                    
                </footer>
            
            </div>
        </div>
}
        </>
    )
}

export default UserCard;