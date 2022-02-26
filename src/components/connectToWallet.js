import { Box, Button, Typography } from '@mui/material'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import React from 'react'

const buttonHeight = 56
const styles = {
    btn: {
        display: 'flex',
        alignItems: 'center',
        width: 300,
        height: `${buttonHeight}px`,
        backgroundColor: '#4285f4',
        borderRadius: '2px',
        boxShadow: '0 3px 4px 0 rgba(0, 0, 0, .25)',
        p: '1px',
        border: 'none',
        '&:hover': {
            boxShadow: '0 3px 6px #4285f4',
            cursor: 'pointer',
        },
        '&:active': {
            backgroundColor: '#1669F2',
        },
    },
    iconWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: `${buttonHeight - 2}px`,
        height: `${buttonHeight - 2}px`,
        borderRadius: '2px',
        backgroundColor: '#fff',
        mr: 1.5,
    },
}

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
            sx={{my: 2, py: 2}}
        >
            Upload to wallet
        </Button>
    )
}

export default ConnectToWallet
