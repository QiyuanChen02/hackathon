import { Box } from '@mui/material'
import './App.css'
import ConnectToWallet from './components/connectToWallet'
import GoogleLoginButton from './components/googleLogin'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'
import LogOut from './components/logOut'
import { useEffect } from 'react'

function App() {
    const [user] = useAuthState(auth)

    useEffect(() => {
        console.log(user)
    }, [user])
    if (!user) return <GoogleLoginButton />
    return (
        <Box>
            <h1>Hello World</h1>
            <ConnectToWallet />
            <LogOut />
        </Box>
    )
}

export default App
