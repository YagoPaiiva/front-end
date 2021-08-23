import Styled from 'styled-components'
import { Button, TableHead, TableCell, TableRow, DialogTitle, Dialog, Typography } from '@material-ui/core'
import { SaveAltRounded, Cancel } from '@material-ui/icons'
export const AreaHeader = Styled.div`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital@0;1&display=swap');

  height:100px;
  .AppBar{
    height:100px;
    position:relative;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin:0;
    padding:10px 40px;
    h1{
      margin:0;
      width:fit-content;
      text-shadow:3px 3px 3px black;
    }
  }
  
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
export const StyledTypography = Styled(Typography)`
    font-weight:bold;
`
export const StyledSaveAltRounded = Styled(SaveAltRounded)`
  margin:4px;
`
export const StyledCancel = Styled(Cancel)`
  margin:4px;
`
