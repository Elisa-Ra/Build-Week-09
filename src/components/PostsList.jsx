import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../redux/actions/postAction"
import { Alert, Spinner } from "react-bootstrap"

const PostsList = () => {
  const dispatch = useDispatch()

  const data = useSelector((state) => {
    return state.posts.data
  })
  const loading = useSelector((state) => {
    return state.posts.loading
  })
  const error = useSelector((state) => {
    return state.posts.error
  })

  useEffect(() => {
    dispatch(fetchPosts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {/* loading */}
      {loading && (
        <div className="text-center py-3">
          <Spinner animation="border" />
        </div>
      )}

      {error && <Alert>Errore nel caricamento dei post</Alert>}

      {!loading &&
        !error &&
        data(data.map((post) => <PostCard key={post._id} post={post} />))}
    </>
  )
}
export default PostsList
