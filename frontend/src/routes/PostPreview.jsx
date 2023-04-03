
import { Link } from "react-router-dom"

function PostPreview({ post }) {
    return (
        <li className="col-6 justify-content-between mt-5">
            <Link to={`/post/${post._id}`}>
                <img className="img-fluid" src={post.image} alt={post.caption} />
            </Link>
        </li>
    )
}

export default PostPreview