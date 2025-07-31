/* ROUTE-LINK TO PORTFOLIO PAGE */
import { Link } from 'react-router-dom';

export default function Portfolio() {
  return (
    <div>
      <h1>My Work</h1>
      <p>This will be a showcase of my portfolio items.</p>
      <Link to="/">Back to Overview</Link>
    </div>
  )
}
