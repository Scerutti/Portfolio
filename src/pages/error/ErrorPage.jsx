import React from 'react'
import { Box, Typography, Button, Container, Grid } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'

const ErrorPage = () => {
    return (
        <Container maxWidth="sm">
            <Box textAlign="center" mt={10}>
                <Typography variant="h2" color='error' style={{ textAlign: 'center' }}>
                    Error 404
                </Typography>
                <Typography variant="h5" gutterBottom style={{ textAlign: 'center' }}>
                    La página que estás buscando no existe.
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={6}>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<ArrowBack />}
                            onClick={() => {
                                window.history.back();
                            }}
                            fullWidth
                        >
                            Volver al inicio
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default ErrorPage
