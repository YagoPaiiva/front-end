import { useState, useEffect } from 'react'
import MuiAlert from '@material-ui/lab/Alert'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import { getUsers, putUser, deleteUser } from '../../saga/Posts.actions'

import {
  AreaCrud,
  StyledCard,
  StyledCardContent,
  StyledDeleteRounded,
  StyledCreateTwoTone,
  StyledSaveAltRounded,
  StyledTableContainer,
  StyledTypography,
  StyledButton,
  StyledTableCell,
  StyledTableHead,
  StyledTableRow,
  StyledDialog,
  StyledDialogTitle,
  StyledCancel,
  StyledBlock
} from './styled'

import {
  Paper,
  Table,
  TableBody,
  TextField,
  Snackbar,
  CircularProgress
} from '@material-ui/core'

const Page = () => {
  const [selectOpen, setSelectOpen] = useState(false)
  const [selectOpenDelete, setSelectOpenDelete] = useState(false)
  const [name, setName] = useState('')
  const [idUser, setIdUser] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')

  const message = useSelector(state => state.putUser.message)
  const alertMessage = useSelector(state => state.putUser.alertMessage)
  const isLoading = useSelector(state => state.putUser.isLoading)
  const allUsers = useSelector(state => state.AllUser.posts)
  const [MyUser, setMyUser] = useState('')
  const messageDelete = useSelector(state => state.deleteUser.message)
  const alertMessageDelete = useSelector(state => state.deleteUser.alertMessage)

  function Alert (props) {
    return <MuiAlert elevation={8} variant="filled" {...props} />
  }

  const events = {
    dispatch: useDispatch(),

    putUser: async () => {
      setOpen(true)
      events.dispatch(putUser({ name, email, username, idUser }))
      Cookies.set('username', username)
      setTimeout(() => {
        events.dispatch(getUsers())
      }, 1000)
      setSelectOpen(false)
    },

    deleteUser: async () => {
      setOpen(true)
      events.dispatch(deleteUser(idUser))
      setTimeout(() => {
        if (Cookies.get('username') === username) {
          Cookies.remove('token')
          Cookies.remove('username')
          window.location.href = '/'
        } else {
          window.location.href = '/crud'
        }
      }, 1000)
    }
  }

  useEffect(() => {
    setMyUser(Cookies.get('username'))
    events.dispatch(getUsers())
  }, [])
  const [open, setOpen] = useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }
  return (<AreaCrud>

        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alertMessage || alertMessageDelete || 'info'}>
          {message || messageDelete || <CircularProgress />}
        </Alert>
      </Snackbar>

      <StyledCard >
        <StyledCardContent >
          <StyledTypography variant="h3">{MyUser}</StyledTypography>
        </StyledCardContent>
      </StyledCard>

      <StyledTableContainer component={Paper}>
        <Table>
        <StyledTableHead>
          <StyledTableRow>
          <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Username</StyledTableCell>
            <StyledTableCell align="center">Configuração</StyledTableCell>
          </StyledTableRow>
        </StyledTableHead>
        <TableBody>

        {allUsers.map((value) =>
            <StyledTableRow key={value.name}>
              {value.username === MyUser &&
                  setMyUser(value.name)
               }
                <StyledTableCell component="th" scope="row" align="center">
                  {value.name}
                  </StyledTableCell>

                  <StyledTableCell align="center">
                  {value.email}
                  </StyledTableCell>

                  <StyledTableCell align="center">
                  {value.username}
                  </StyledTableCell>
                        <StyledTableCell align="center">
                          <StyledCreateTwoTone onClick={() => {
                            setName(value.name)
                            setUsername(value.username)
                            setEmail(value.email)
                            setIdUser(value._id)
                            setSelectOpen(true)
                          }}/>
                          <StyledDeleteRounded onClick={() => {
                            setIdUser(value._id)
                            setUsername(value.username)
                            setSelectOpenDelete(true)
                          }} />
                      </StyledTableCell>

            </StyledTableRow>
        )}
        </TableBody>
        </Table>
      </StyledTableContainer>

        <StyledDialog aria-labelledby="simple-dialog-title" open={selectOpen}>
          <StyledDialogTitle>
            <StyledTypography variant="h2"> Editar Usuário </StyledTypography>
          </StyledDialogTitle>
              <form onSubmit={Event => {
                Event.preventDefault()
                events.putUser()
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

                <div className="AreaIcons">
                  <StyledButton type="submit" disabled={isLoading} >
                  {isLoading ? <CircularProgress /> : 'Salvar'}<StyledSaveAltRounded />
                  </StyledButton>

                  <StyledButton onClick={() => { setSelectOpen(false) }}>
                    Cancelar
                    <StyledCancel />
                  </StyledButton>
                </div>
              </form>
        </StyledDialog>

        <StyledDialog aria-labelledby="simple-dialog-title" open={selectOpenDelete}>
          <StyledDialogTitle>
          <StyledTypography variant="h4"> Exclui Usuário </StyledTypography>
          <StyledButton onClick={() => {
            events.deleteUser()
          }}
          >Excluir</StyledButton>
          <StyledButton onClick={() => { setSelectOpenDelete(false) }}>Cancelar</StyledButton>
          </StyledDialogTitle>
        </StyledDialog>

  </AreaCrud>)
}

export default Page
