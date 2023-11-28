import temporeryUserAvatar from '../images/avatar.png';
import { useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import Statistics from './Statistics';

import { LocationIcon, GithubIcon, LinkIcon, TwitterIcon } from '../images/svgs';

const UserCard = ({isDark}) => {
    let [isUser] = useState(true);
    let width = useWindowWidth();

    return(
        <div className={`card ${isDark ? 'card--light' : 'card--dark'}`}>
            {width >= 992 && <img src={temporeryUserAvatar} className='card__avatar' alt="" />} 
            <div className='card__content--container'>

                <div className='card__header--container'>
                    {width < 992 && <img src={temporeryUserAvatar} className='card__avatar' alt="" />}                    
                    <header className='card__header'>
                        <h2 className={`card__title ${isDark ? 'card__title--light' : 'card__title--dark'}`}>
                            The Octocat
                            { width >= 992 && <span className={`card__sub-title ${isDark ? 'card__sub-title--light' : 'card__sub-title--dark'}`}>Joined 25 Jan 2011</span>}
                        </h2>

                        <p className='card__username'>@octocat</p>

                        { width < 992 && <span className={`card__sub-title ${isDark ? 'card__sub-title--light' : 'card__sub-title--dark'}`}>Joined 25 Jan 2011</span>}
                    </header>
                </div>

                <div className='card__body'>
                    <p className={`card__bio ${isDark ? 'card__bio--light' : 'card__bio--dark'}`}>
                        {isUser ? 
                            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.' 
                            :
                            'This profile has no bio'
                        }
                    </p>

                    <Statistics isDark={isDark} />
                </div>

                <footer className="card__footer">
                    <a href="/" className='info' style={{textDecorationColor: isDark ? '#4B6A9B' : 'white'}}>
                        <span className='info__icon'>
                            <LocationIcon 
                                fill={isDark ? '#4B6A9B' : 'white'} 
                                className='info__icon--location'
                            /> 
                        </span>
                        <span className={`info__name ${isDark ? 'info__name--light' : 'info__name--dark'}`}>Name of City</span>
                    </a>
                    <a href="/" className='info' style={{textDecorationColor: isDark ? '#4B6A9B' : 'white'}}>
                        <span className='info__icon'>
                            <LinkIcon 
                                className='info__icon--link'
                                fill={isDark ? '#4B6A9B' : 'white'} 
                            /> 
                        </span>
                        <span className={`info__name ${isDark ? 'info__name--light' : 'info__name--dark'}`}>Name of City</span>
                    </a>
                    <a href="/" className='info' style={{textDecorationColor: isDark ? '#4B6A9B' : 'white'}}>
                        <span className='info__icon'>
                            <TwitterIcon 
                                className='info__icon--twitter'
                                fill={isDark ? '#4B6A9B' : 'white'} 
                            /> 
                        </span>
                        <span className={`info__name ${isDark ? 'info__name--light' : 'info__name--dark'}`}>Name of City</span>
                    </a>
                    <a href="/" className='info' style={{textDecorationColor: isDark ? '#4B6A9B' : 'white'}}>
                        <span className='info__icon'>
                            <GithubIcon 
                                className='info__icon--github'
                                fill={isDark ? '#4B6A9B' : 'white'} 
                            /> 
                        </span>
                        <span className={`info__name ${isDark ? 'info__name--light' : 'info__name--dark'}`}>Name of City</span>
                    </a>
                </footer>
            </div>
        </div>
    )
}

export default UserCard;