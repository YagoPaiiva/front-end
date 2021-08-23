/* eslint-disable react/display-name */
import { Redirect, Route } from 'react-router-dom'
import { isLogged } from '../utils/AuthHandler'
// eslint-disable-next-line react/prop-types
export default ({ children, ...rest }) => {
  const logged = isLogged()

  const authorize = !((!logged && rest.authorize))

  return (
        <Route
            {...rest}
            render={() =>
              authorize
                ? (logged && rest.loggedAuthorize) ? <Redirect to = "/crud" /> : children
                : <Redirect to = "/" />
           }
        />
  )
}
