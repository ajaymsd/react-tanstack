import React from 'react'
import TraditionalFetch from './TraditionalFetch'
import ReactQuery from './ReactQuery'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
        <ul>
            <li>
             <Link to="/traditional">Traditional Fetch</Link>
            </li>
            <li>
             <Link to="/react-query">React Query</Link>
            </li>
        </ul>
    </div>
  )
}

export default Home