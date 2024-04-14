import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css'

export const FriendList = (props) => {
  return (
    <ul className={css['frined-list']}>
      {props.friends.map((friend) => (
        <FriendListItem key={friend.id} friends={friend} />
      ))}
    </ul>
  )
}
