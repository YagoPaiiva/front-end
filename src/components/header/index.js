import { AppBar, TextField, Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import { useState } from 'react'
import { doLogout, isLogged } from '../../utils/AuthHandler'
import {
  AreaHeader,
  StyledButton,
  StyledDialog,
  StyledDialogTitle,
  StyledTypography,
  StyledSaveAltRounded,
  StyledCancel
} from './styled'
import { useDispatch, useSelector } from 'react-redux'
import { postCreate } from '../../saga/Posts.actions'

function Alert (props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const HeaderPage = () => {
  const [selectOpenRegister, setSelectOpenRegister] = useState(false)
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [open, setOpen] = useState(false)

  const message = useSelector(state => state.CreateUser.message)
  const alertMessage = useSelector(state => state.CreateUser.alertMessage)

  const logged = isLogged()
  const handleLogout = () => {
    doLogout()
    window.location.href = '/'
  }

  if (alertMessage === 'success') {
    window.location.href = '/'
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const events = {
    dispatch: useDispatch(),
    postCreate: async () => {
      setOpen(true)
      events.dispatch(postCreate({ name, username, email, password }))
    }
  }

  return (

    <AreaHeader>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={ alertMessage || 'info' }>
          {message}
        </Alert>
      </Snackbar>

      <AppBar className="AppBar">
        <h1>Teste Front-end PDV365</h1>
        {!logged && <>
          <StyledButton
            onClick={() => {
              setSelectOpenRegister(true)
            }}
            type="button">
            Adicionar Usuário
          </StyledButton>
        </>
        }
        {logged && <>
          <StyledButton className="ButtonLogout" onClick={handleLogout}>Logout</StyledButton>
        </>}
      </AppBar>

      <StyledDialog aria-labelledby="simple-dialog-title" open={selectOpenRegister}>
          <StyledDialogTitle>
            <StyledTypography variant="h2"> Adicionar Usuário </StyledTypography>
          </StyledDialogTitle>
              <form onSubmit={Event => {
                Event.preventDefault()
                events.postCreate()
              }}>
                <TextField
                label="Name"
                variant="standard"
                value={name}
                required
                onChange={state => setName(state.target.value)}
                >{name}</TextField>

                <TextField
                label="Username"
                variant="standard"
                value={username}
                required
                onChange={state => setUsername(state.target.value)}
                >{username}</TextField>

                <TextField
                label="Email"
                variant="standard"
                type="email"
                value={email}
                required
                onChange={state => setEmail(state.target.value)}
                >{email}</TextField>

                <TextField
                label="Password"
                variant="standard"
                type="password"
                value={password}
                required
                onChange={state => setPassword(state.target.value)}
                >{password}</TextField>

                <div className="AreaIcons">

                <StyledButton type="submit">
                   Salvar <StyledSaveAltRounded />
                </StyledButton>

                <StyledButton onClick={() => {
                  setSelectOpenRegister(false)
                }}>
                Cancelar
                 <StyledCancel />
                </StyledButton>
                </div>
              </form>
        </StyledDialog>
    </AreaHeader>
  )
}

export default HeaderPage
