import { List } from "@mui/material"
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import { PostListItem } from '../../entities'
import { usePostsListLogic } from "./model";


export const PostsList : React.FC = () => {
    const {
        postsList,
        isLoading,
        isError,
        lastPostRef
    } = usePostsListLogic();

    if (isError) return <Alert severity="error">Error while fetching</Alert>
    
    return (
        <List sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
                {postsList?.map((props, ind) =>
                    {
                        //@ts-ignore
                        if (postsList.length === ind + 1) return <PostListItem ref={lastPostRef} key={props.id} {...props}/>
                        else return <PostListItem key={props.id} {...props}
                    />
                })
                }
                {
                    isLoading && <CircularProgress size={100}/>
                }
        </List>
    )
}