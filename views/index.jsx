import React from 'react'
import Main from './components/Main'

function Index() {
    return (
        <Main>
                    <main className="container">
                        <div class="row justify-content-around mt-5">
                            <a href="/login" className="col-3 btn btn-primary"> Login</a>
                            <a href="/signup" className="col-3 btn btn-primary"> Signup</a>
                        </div>
                    </main>
        
        </Main>
    )
}

export default Index