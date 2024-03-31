import { useNavigate, useParams } from "react-router";
import { postsSlice } from "features";
import { useCallback } from "react";

const {useGetSinglePostQuery} = postsSlice;


export const usePostLogic = (id: number) => {
    const navigation = useNavigate()

    const {data, isError, isLoading} = useGetSinglePostQuery(+id!)

    const handleBack = useCallback(() => {
            navigation(-1)
    }, [])

    return {
        post: data,
        isError,
        isLoading,
        handleBack
    }
}