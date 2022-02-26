import { Box, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const Survey = () => {
    return (
        <Box sx={{ m: 5 }}>
            <Typography variant="h2">Fill in form</Typography>
            <form>
                <Stack spacing={2} sx={{ width: 750 }}>
                    <TextField label="Name" variant="outlined" />
                    <TextField label="Age" variant="outlined" />
                    <TextField label="Country" variant="outlined" />
                    <TextField
                        label="Answer"
                        variant="outlined"
                        multiline
                        rows={10}
                    />
                </Stack>
            </form>
        </Box>
    )
}

export default Survey
