import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  fetchNotifications,
  selectAllNotifications,
} from '../features/notifications/notificationsSlice'

export const Navbar = () => {
  const dispatch = useDispatch()
  const notifications = useSelector(selectAllNotifications)
  const unRead = notifications.filter((i) => !i.read).length
  // omit component contents
  let unreadNotificationsBadge

  if (unRead > 0) {
    unreadNotificationsBadge = (
      <span className="badge">{unRead}</span>
    )
  }
  const fetchNewNotifications = () => {
    dispatch(fetchNotifications())
  }

  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Posts</Link>
            <Link to="/users">Users</Link>
            <Link to="/notifications">Notifications</Link>
          </div>
          <button className="button" onClick={fetchNewNotifications}>
            Refresh Notifications {unreadNotificationsBadge}
          </button>
        </div>
      </section>
    </nav>
  )
}
