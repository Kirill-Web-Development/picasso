import {useRef, useCallback } from "react"
import { postsSlice} from "features/loadPosts"
import { pageSlice } from "features/paginationBeetweenPages";
import { useDispatch, useSelector } from "react-redux";

const {useGetPostsQuery} = postsSlice;


export const usePostsListLogic = () => {
    const {incrementPage, selectPage} = pageSlice
    const page = useSelector(selectPage)
    const dispatch = useDispatch();
    const {data, isLoading, isError} = useGetPostsQuery(page)

    const intObserver = useRef<IntersectionObserver>();

    const lastPostRef = useCallback((post : any) => {
        if (isLoading) return
        if (intObserver.current) intObserver.current.disconnect()

        intObserver.current = new IntersectionObserver(posts => {
            if (posts[0].isIntersecting && data?.length) {
                console.log('111')
                dispatch(incrementPage(1))
            }
        })

        if (post) intObserver.current.observe(post)

    }, [isLoading])

    return {
        postsList: data,
        isLoading,
        isError,
        lastPostRef
    }
}