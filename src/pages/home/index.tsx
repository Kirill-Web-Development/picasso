import { PostsList } from "widgets/postList/ui";
import Container from '@mui/material/Container';

export const Home : React.FC = () => {
    // const page = useSelector(selectPage)
    // const dispatch = useDispatch();
    // const {data, isLoading, isError, isFetching} = useGetPostsQuery(page)

    // const intObserver = useRef<IntersectionObserver>();

    // const lastPostRef = useCallback((post : any) => {
    //     if (isLoading) return
    //     if (intObserver.current) intObserver.current.disconnect()

    //     intObserver.current = new IntersectionObserver(posts => {
    //         if (posts[0].isIntersecting && data?.length) {
    //             console.log('111')
    //             dispatch(incrementPage(1))
    //         }
    //     })

    //     if (post) intObserver.current.observe(post)

    // }, [isLoading])
    

    // if (isError) return <Alert severity="error">Error while fetching</Alert>

    return (
        <Container component='section' maxWidth='md'>
                <PostsList/>
        </Container>
    )
}