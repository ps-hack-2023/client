/* eslint react/prop-types: 0 */

import React from 'react'
import './NavbarStyles.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logMessage } from '../../features/feature/featureSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  const { message } = useSelector((store) => store.feature)

  const LinkComponent = ({ to, children }) => {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
      <li className={isActive ? 'active' : ''}>
        <Link to={to}>{children}</Link>
      </li>
    )
  }

  return (
    <nav className='nav'>
      <Link to='/' className='site-title'>
        {message}
      </Link>
      <button onClick={() => { dispatch(logMessage('Payload message')) }}>Test btn</button>
      <ul>
        <LinkComponent to='/page1'>Page 1</LinkComponent>
        <LinkComponent to='/page2'>Page 2</LinkComponent>
      </ul>
    </nav>
  )
}

export default Navbar
