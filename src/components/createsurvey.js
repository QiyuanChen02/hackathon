import { Box, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const CreateSurvey = () => {
    return (
        <Box sx={{ m: 5 }}>
            <Typography variant="h2">Create a survey</Typography>
            <form>
                <Stack spacing={2} sx={{ width: 750 }}>
                    <TextField
                        label="Survey type"
                        variant="outlined"
                        multiline
                        rows={10}
                    />
                    <TextField
                        label="Number of answers wanted"
                        variant="outlined"
                    />
                </Stack>
            </form>
        </Box>
    )
}

export default CreateSurvey
