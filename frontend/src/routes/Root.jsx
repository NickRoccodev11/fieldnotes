import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
import Messages from '../components/Messages'

function Root() {
    const [user, setUser] = useState(null)
    const [messages, setMessages] = useState({})
    return (
        <>
            <header class="container">
                <div class="text-center">
                    <h1 class="">
                        <Link to="/">Binary Upload Boom</Link>
                    </h1>
                    <span>The #100Devs Social Network</span>
                </div>
            </header>
            <Messages messages={messages} />
            <Outlet context={{ user, setUser, setMessages }} />
        </>
    );
}

export default Root