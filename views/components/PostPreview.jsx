import React from 'react'


function PostPreview({post}) {
    return (
        <li className="col-6 justify-content-between mt-5">
            <a href={`/post/${post._id}`}>
                <img className="img-fluid" src={post.image} />
            </a>
        </li>
    )
}

export default PostPreview