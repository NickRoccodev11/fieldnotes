import React from 'react'
import Main from './components/Main'

function Feed({posts}) {
    return (
        <Main>
            <div class="container">
                <div class="row justify-content-center mt-5">
                    <ul class="row list-unstyled">
                        {posts.map(post =>
                            <li className="col-6 justify-content-between mt-5">
                                <a href={`/post/${post._id}`}>
                                    <img className="img-fluid" src={post.image} />
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

        </Main>
    )
}

export default Feed