import { AppBar, Button, IconButton, Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const signupWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
    }

    const logOut = () => {
        signOut(auth)
        navigate('/')
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    color="inherit"
                    sx={{ p: 0 }}
                    children={<AccountBalanceIcon />}
                />

                <Box sx={{ position: 'absolute', right: 10 }}>
                    {!user ? (
                        <>
                            <Button color="inherit" href="/" sx={{ margin: 1 }}>
                                Home
                            </Button>
                            <Button
                                color="inherit"
                                href="/aboutus"
                                sx={{ margin: 1 }}
                            >
                                About us
                            </Button>
                            <Button
                                color="inherit"
                                onClick={signupWithGoogle}
                                sx={{ margin: 1 }}
                            >
                                Login
                            </Button>
                            <Button
                                color="inherit"
                                onClick={signupWithGoogle}
                                sx={{ margin: 1 }}
                            >
                                Sign Up
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button color="inherit" href="/surveys">
                                Earn money
                            </Button>

                            <Button color="inherit" href="/createsurvey">
                                Gain insight
                            </Button>

                            <Button color="inherit" onClick={logOut}>
                                Sign Out
                            </Button>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
