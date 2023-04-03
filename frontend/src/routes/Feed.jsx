import { useEffect, useState } from 'react';
import PostList from './PostList'
function Feed() {
  
    const [posts, setPosts] = useState([])
    useEffect(() => {
		fetch("/api/feed", { credentials: "include" })
			.then((res) => res.json())
			.then((data) => setPosts(data));
	}, []);

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <PostList posts={posts} />
            </div>
        </div>
    )
}

export default Feed