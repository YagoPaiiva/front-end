import { Avatar, Button } from '@material-ui/core'
import { Lock } from '@material-ui/icons'
import Styled from 'styled-components'

export const AreaHome = Styled.div`
  width:100vw;
  height:fit-content;
  display:flex;
  justify-content:center;
  padding:50px;  
  form{
    display:grid;
    justify-items:center;
  }

  .Paper{
    padding:30px;
    display:grid;
    justify-items:center;
    border-radius:20px;
    background-color:#FFFFFFFF;
    width:400px;
    height:350px;
    align-content: space-evenly;
    h1{
      margin:0;
    }
    .ButtonS{

    }
  }
`
export const StyledButton = Styled(Button)`
   &.MuiButtonBase-root{
     border-radius:20px;
     width:100%;
     margin-top:10px;
     color:#3f51b5;
     height:fit-content;
     font-weight:bold;
     font-size:20px;
     text-transform:none;
     
     &:hover{
       background-color:#3f51b5;
       color:#FFFFFF;
      }
    }
`

export const StyledLock = Styled(Lock)`
  transform: scale(1.8);
`

export const StyledAvatar = Styled(Avatar)`
  &.MuiAvatar-colorDefault{
    width:60px;
    height:60px;
    box-shadow:2px 2px 2px black;
    background-color:#3f51b5;
  }

`
