import { Paper, TextField, CircularProgress, Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import { useState } from 'react'
import { AreaHome, StyledAvatar, StyledLock, StyledButton } from './styled'
import { doLogin } from '../../utils/AuthHandler'
import { useDispatch, useSelector } from 'react-redux'
import { postAuth } from '../../saga/Posts.actions'

const Home = () => {
  const [username, setUserName] = useState('')
  const [password, setPass] = useState('')
  const [open, setOpen] = useState(false)

  const isLoading = useSelector(state => state.authSingIn.isLoading)
  const alertMessage = useSelector(state => state.authSingIn.alertMessage)
  const message = useSelector(state => state.authSingIn.message)
  const posts = useSelector(state => state.authSingIn.posts)
  const myUser = useSelector(state => state.authSingIn.user)

  function Alert (props) {
    return <MuiAlert elevation={8} variant="filled" {...props} />
  }

  if (posts.token) {
    doLogin(posts.token, myUser)
    window.location.href = '/crud'
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const events = {
    dispatch: useDispatch(),

    handleSubmit: (e) => {
      setOpen(true)
      e.preventDefault()
      events.dispatch(postAuth({ username, password }))
    }
  }

  return (
    <AreaHome>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alertMessage || 'info'}>
          {message || <CircularProgress /> }
        </Alert>
      </Snackbar>
      <Paper className="Paper" elevation={8} variant="elevation" >
          <StyledAvatar ><StyledLock /></StyledAvatar>

          <h1>Login</h1>

        <form onSubmit={Event => {
          events.handleSubmit(Event)
        }}>

        <TextField
        className="UserName"
        label="UserName"
        variant="standard"
        required
        value={username}
        onChange={state => setUserName(state.target.value)}
        />

        <TextField
        className="Password"
        label="Password"
        variant="standard"
        type="password"
        required
        value={password}
        onChange={state => setPass(state.target.value)}
        />

        <StyledButton
        className="ButtonS"
        type="submit"
        disabled={isLoading}
        >
        {isLoading ? <CircularProgress /> : 'Entrar'}
        </StyledButton>

        </form>
      </Paper>

    </AreaHome>
  )
}

export default Home
