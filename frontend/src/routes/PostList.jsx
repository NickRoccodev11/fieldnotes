
import PostPreview from './PostPreview'


function PostList({ posts }) {

    return (
        <ul className="row list-unstyled">
            {posts.map(post => <PostPreview key={post._id} post={post} />)}
        </ul>
    )
}

export default PostList