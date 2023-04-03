import { useEffect, useState } from "react"
import { Link, useNavigate, useOutletContext, useParams } from "react-router-dom"

function Post() {
    const {user} = useOutletContext();
const postId = useParams().id
    const [post, setPost] = useState();
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`/api/post/${postId}`)
        .then((res)=> res.json())
        .then(({post})=> setPost(post))
        
    })

if(post === null ) return <h2>Post not Found... </h2>
if(post === undefined ) return null
console.log(post)

    return (
 
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-6">
                        <h2> {post.title}</h2>
                        <img className="img-fluid" src={post.image} alt={post.caption}/>
                        <div className="row justify-content-between">
                            <form
                                className="col-1"
                                action={`/post/likePost/${post.id}?_method=PUT`}
                                method="POST"
                            >
                                <button className="btn btn-primary fa fa-heart" type="submit"></button>
                            </form>
                            <h3 className="col-3">Likes: {post.likes}</h3>
                            {post.user === user.id && (
                                <form
                                    action={`/post/deletePost/${post.id}?_method=DELETE`}
                                    method="POST"
                                    className="col-3"
                                >
                                    <button className="btn btn-primary fa fa-trash" type="submit"></button>
                                </form>
                            )}

                        </div>
                    </div>
                    <div className="col-3 mt-5">
                        <p>{post.caption}</p>
                    </div>
                    <div className="col-6 mt-5">
                        <Link className="btn btn-primary" to="/profile">Return to Profile</Link>
                        <Link className="btn btn-primary" to="/feed">Return to Feed</Link>
                    </div>
                </div>
            </div>
      
    )
}

export default Post