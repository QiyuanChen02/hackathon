import { Box, Button, Typography } from '@mui/material'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import React from 'react'

function ConnectToWallet() {
    const uploadToWallet = async () => {
        alert('Connecting with wallet...')
    }

    return (
        <Button
            startIcon={<AccountBalanceWalletIcon />}
            onClick={uploadToWallet}
            variant="contained"
            color="secondary"
            sx={{ my: 2, py: 2 }}
        >
            Upload to wallet
        </Button>
    )
}

export default ConnectToWallet
