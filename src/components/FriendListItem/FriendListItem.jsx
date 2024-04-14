import css from './FriendListItem.module.css';

export const FriendListItem = (props) => {
    return (
        <li className={css.item}>
            <span className={`${css.status} ${props.friends.isOnline ? css.active : css.inactive}`}></span>
            <img className={css.avatar} src={props.friends.avatar} alt="User avatar" width="48" />
            <p className={css.name}>{ props.friends.name }</p>
        </li>
    )
}