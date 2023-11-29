import temporeryUserAvatar from '../images/avatar.png';
import { useWindowWidth } from '@react-hook/window-size';
import Statistics from './Statistics';

import { LocationIcon, GithubIcon, LinkIcon, TwitterIcon } from '../images/svgs';

const UserCard = ({isDark, user}) => {
    let width = useWindowWidth();

    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let day = new Date(user.created_at).getDate();
    let month = months[new Date(user.created_at).getMonth()];
    let year = new Date(user.created_at).getFullYear();

    return(
        <div className={`card ${isDark ? 'card--light' : 'card--dark'}`}>
            {width >= 992 && <img src={user.avatar_url ? user.avatar_url : temporeryUserAvatar} className='card__avatar' alt="" />} 
            <div className='card__content--container'>

                <div className='card__header--container'>
                    {width < 992 && <img src={user.avatar_url ? user.avatar_url : temporeryUserAvatar} className='card__avatar' alt="" />}                    
                    <header className='card__header'>
                        <h2 className={`card__title ${isDark ? 'card__title--light' : 'card__title--dark'}`}>
                            {user.name}
                            { width >= 992 && <span className={`card__sub-title ${isDark ? 'card__sub-title--light' : 'card__sub-title--dark'}`}>Joined {day} {month} {year}</span>}
                        </h2>

                        <p className='card__username'>@{user.name}</p>

                        { width < 992 && <span className={`card__sub-title ${isDark ? 'card__sub-title--light' : 'card__sub-title--dark'}`}>Joined {day} {month} {year}</span>}
                    </header>
                </div>

                <div className='card__body'>
                    <p className={`card__bio ${isDark ? 'card__bio--light' : 'card__bio--dark'}`}>
                        {user.bio ? 
                            user.bio
                            :
                            'This profile has no bio'
                        }
                    </p>

                    <Statistics isDark={isDark} user={user} />
                </div>

                <footer className="card__footer">
                    <a 
                        href={user.location ? user.localion : '#'} 
                        className='info' 
                        style={{textDecorationColor: isDark ? '#4B6A9B' : 'white'}}
                    >
                        <span className='info__icon'>
                            <LocationIcon 
                                fill={user.location ? (isDark ? '#4B6A9B' : 'white') : 'red'} 
                                className='info__icon--location'
                            /> 
                        </span>
                        <span 
                            className={`info__name ${isDark ? 'info__name--light' : 'info__name--dark'}`}
                            style={{color: !user.location && 'red'}}>{user.location ? user.location : 'Not Avaliable'}</span>
                    </a>

                    <a 
                        href={user.blog ? user.blog : '#'} 
                        className='info' 
                        style={{textDecorationColor: isDark ? '#4B6A9B' : 'white'}}
                    >
                        <span className='info__icon'>
                            <LinkIcon 
                                className='info__icon--link'
                                fill={user.blog ? (isDark ? '#4B6A9B' : 'white') : 'red'} 
                            /> 
                        </span>
                        <span 
                            className={`info__name ${isDark ? 'info__name--light' : 'info__name--dark'}`}
                            style={{color: !user.blog && 'red'}}
                        >{user.blog ? user.blog : 'Not Available'}
                        </span>
                    </a>

                    <a 
                        href={user.twitter_username ? user.twitter_username : '#'} 
                        className='info' 
                        style={{textDecorationColor: isDark ? '#4B6A9B' : 'white'}}
                    >
                        <span className='info__icon'>
                            <TwitterIcon 
                                className='info__icon--twitter'
                                fill={user.twitter_username ? (isDark ? '#4B6A9B' : 'white') : 'red'} 
                            /> 
                        </span>
                        <span 
                            className={`info__name ${isDark ? 'info__name--light' : 'info__name--dark'}`}
                            style={{color: !user.twitter_username && 'red'}}
                        >
                                {user.twitter_username ? user.twitter_username : 'Not Available'}
                        </span>
                    </a>

                    <a href={user.name} className='info' style={{textDecorationColor: isDark ? '#4B6A9B' : 'white'}}>
                        <span className='info__icon'>
                            <GithubIcon 
                                className='info__icon--github'
                                fill={user.name ? (isDark ? '#4B6A9B' : 'white') : 'red'} 
                            /> 
                        </span>
                        <span 
                            className={`info__name ${isDark ? 'info__name--light' : 'info__name--dark'}`}
                            style={{color: !user.name && 'red'}}
                        >
                            @{user.name}
                        </span>
                    </a>
                </footer>
            </div>
        </div>
    )
}

export default UserCard;