import {useParams } from "react-router";
import { Alert, Container } from "@mui/material";
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import Box from '@mui/material/Box';
import { usePostLogic } from "./model";


export const Post: React.FC = () => {
    let renderBody: React.ReactNode

    const {id} = useParams();
    if (!id) renderBody = <Alert severity="error">Missing post id in URL</Alert>

    const {
        post,
        isError,
        isLoading,
        handleBack
    } = usePostLogic(+id!)


    if (isError) renderBody = <Alert severity="error">Error while fetching</Alert>

    renderBody = (
            <Paper elevation={3}>
                <Box sx={{padding: '20px'}}>
                    <Typography variant="h1" component="h2">
                    {post?.id}
                    </Typography>
                    <Typography variant="h2" component="h2">
                    {post?.userId}
                    </Typography>
                    <Typography variant="body1">
                    {post?.title}
                    </Typography>
                    <Typography variant="body2" color='grey'>
                    {post?.body}
                    </Typography>
                </Box>
            </Paper>
    )

    const skeleton = (
        <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </>
    )

    return (
        <Container>
            <Grid container justifyContent={'space-between'} sx={{paddingTop: '40px'}}>
                <Grid xs={9}>
                    {isLoading ? skeleton : renderBody}
                </Grid>
                <Grid xs={2}>
                    <Button onClick={handleBack} size="large" variant="contained">Back</Button>
                </Grid>
            </Grid>
        </Container>
    )
}