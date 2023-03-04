import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="page">
      <h1>NotFound</h1>
      <Link to='/contact'>Go to Home Page</Link>
    </div>
  )
}

export default NotFound