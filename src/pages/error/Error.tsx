import { Box, Typography, Button, Container, Grid } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'

const Error = () => {
    return (
        <Container maxWidth="sm">
            <Box textAlign="center" mt={10}>
                <Typography variant="h2" color='error' style={{ textAlign: 'center' }}>
                    Error 503
                </Typography>
                <Typography variant="h5" gutterBottom style={{ textAlign: 'center' }}>
                    El proyecto al que está queriendo acceder se encuentra en desarrollo o mantenimiento.
                    Intente más tarde.
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

export default Error
