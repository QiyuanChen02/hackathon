import { Box } from '@mui/material'
import './App.css'
import ConnectToWallet from './components/connectToWallet'
import GoogleLoginButton from './components/googleLogin'

function App() {
    return (
        <Box>
            <h1>Hello World</h1>
            <GoogleLoginButton />
            <ConnectToWallet />
        </Box>
    )
}

export default App
