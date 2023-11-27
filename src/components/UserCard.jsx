

const UserCard = ({isDark}) => {
    return(
        <div className={`card ${isDark ? 'card--light' : 'card--dark'}`}>
            user card here
        </div>
    )
}

export default UserCard;