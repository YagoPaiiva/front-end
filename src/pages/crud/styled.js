import Styled from 'styled-components'
import {
  Card,
  CardContent,
  DialogTitle,
  Typography,
  Button,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  Dialog
} from '@material-ui/core'

import { DeleteRounded, CreateTwoTone, SaveAltRounded, Cancel, BlockOutlined } from '@material-ui/icons'

export const StyledCard = Styled(Card)`
    width:100vw;
`
export const StyledBlock = Styled(BlockOutlined)`
`

export const StyledTypography = Styled(Typography)`
    font-weight:bold;
`

export const StyledButton = Styled(Button)`
&.MuiButton-root {
    border-radius:10px;
    padding:10px 40px;
    text-shadow:3px 3px 2px #CCCCCC;
    font-weight:bold;
    color:#3f51b5;
    background-color:#FFFFFF;
  }
  &.MuiButton-root:hover {
    background-color:#FFFFFF;
    text-decoration: none;
  }
`

export const StyledTableContainer = Styled(TableContainer)`
    padding:10px 20px;
    margin-top:10px;
`

export const StyledCardContent = Styled(CardContent)`
  display:flex;
  justify-content:space-around;
  align-items:center;

`
export const StyledSaveAltRounded = Styled(SaveAltRounded)`
  margin:4px;
`
export const StyledCancel = Styled(Cancel)`
  margin:4px;
`
export const StyledDeleteRounded = Styled(DeleteRounded)`
  color:red;
  margin:0px 10px;
  cursor:pointer;
  `
export const StyledCreateTwoTone = Styled(CreateTwoTone)`
  margin:0px 10px;
  cursor:pointer;
`

export const AreaCrud = Styled.div`
`
export const StyledTableHead = Styled(TableHead)`
  background-color:#3f51b5;
  th{
    color:#FFFFFF;
    font-size:24px;
    text-shadow:2px 2px 2px black;
  }
`
export const StyledTableCell = Styled(TableCell)`

`
export const StyledTableRow = Styled(TableRow)`
`

export const StyledDialogTitle = Styled(DialogTitle)`
    h2{
      display:flex;
      justify-content:space-between;
    }

`
export const StyledDialog = Styled(Dialog)`
  div{
      padding:10px;
      &.MuiDialog-paper{
        background-color:#FFFFFF;
      }
    }
    form{
      display:grid;
        .AreaIcons{
        width:100%;
        display:flex;
        align-items:center;
        justify-content:space-around;
        }
    }
`
