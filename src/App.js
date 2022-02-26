import { Box, Typography } from '@mui/material'
import './App.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'
import Navbar from './components/navbar'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Survey from './components/surveys'
import CreateSurvey from './components/createsurvey'

function App() {
    const [user] = useAuthState(auth)

    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/surveys" element={user ? <Surveys /> : null} />
            <Route
                path="/createsurvey"
                element={user ? <CreateSurveys /> : null}
            />
            <Route
                path="*"
                element={
                    <Typography>404 sorry this page doesn't exist</Typography>
                }
            />
        </Routes>
    )
}

function Index() {
    return (
        <Box>
            <Navbar />
            <Typography>Index page</Typography>
        </Box>
    )
}

function Aboutus() {
    return (
        <Box>
            <Navbar />
            <Typography variant="h3">Our Aims</Typography>
        </Box>
    )
}

function Surveys() {
    return (
        <Box>
            <Navbar />
            <Survey />
        </Box>
    )
}

function CreateSurveys() {
    return (
        <Box>
            <Navbar />
            <CreateSurvey />
        </Box>
    )
}

export default App
