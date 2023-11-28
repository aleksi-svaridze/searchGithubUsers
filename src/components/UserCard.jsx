import temporeryUserAvatar from '../images/avatar.png';
import { useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';

const UserCard = ({isDark}) => {
    let [isUser] = useState(true);
    let width = useWindowWidth();

    return(
        <div className={`card ${isDark ? 'card--light' : 'card--dark'}`}>
            {width >= 992 && <img src={temporeryUserAvatar} className='card__avatar' alt="" />}

            <div style={{width: '100%'}} className='card__body--container'>

                <div className='card__header--container'>
                    {width < 992 && <img src={temporeryUserAvatar} className='card__avatar' alt="" />}
                    <header className='card__header'>
                        <h2 className={`card__title ${isDark ? 'card__title--light' : 'card__title--dark'}`}>The Octocat
                            { width >= 992 && <span className={`card__sub-title ${isDark ? 'card__sub-title--light' : 'card__sub-title--dark'}`}>Joined 25 Jan 2011</span>}
                        </h2>
                        <p className='card__username'>@octocat</p>

                        { width < 992 && <span className={`card__sub-title ${isDark ? 'card__sub-title--light' : 'card__sub-title--dark'}`}>Joined 25 Jan 2011</span>}
                    </header>
                </div>
                
                <div className='card__body'>
                      <p className={`card__bio ${isDark ? 'card__bio--light' : 'card__bio--dark'}`}>   {isUser ? 
                        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.' 
                        :
                        'This profile has no bio'}
                    </p>
                </div>

                <footer className='card__footer'></footer>
            </div>
        </div>
    )
}

export default UserCard;