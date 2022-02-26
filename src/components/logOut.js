import { Button } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

function LogOut() {
    const logOut = () => {
        signOut(auth)
    }

    return (
        <Button
            endIcon={<LogoutIcon />}
            onClick={logOut}
            variant="contained"
            color="secondary"
            sx={{ my: 2, py: 2 }}
        >
            logOut
        </Button>
    )
}

export default LogOut
