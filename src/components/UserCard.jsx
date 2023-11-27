import temporeryUserAvatar from '../images/avatar.png';

const UserCard = ({isDark}) => {
    return(
        <div className={`card ${isDark ? 'card--light' : 'card--dark'}`}>
            <img src={temporeryUserAvatar} className='card__avatar' alt="" />
            <div>
                <div className='card__header'>
                    <h2 className='card__title'>The Octocat<span>Joined 25 Jan 2011</span></h2>
                </div>
                <div className='card__body'></div>
                <div className='card__footer'></div>
            </div>
        </div>
    )
}

export default UserCard;