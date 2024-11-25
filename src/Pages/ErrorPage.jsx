import { NavLink, useNavigate, useRouteError } from "react-router-dom"

const ErrorPage = () => {
  const navigate = useNavigate()
  const error = useRouteError();
  console.log(error)
  return (
    <div>
      <h2>Something went wrong.</h2>
      <h1>{error.status}</h1>
      <p>{error.data}</p>
      <p>{error.message}</p>
      <button onClick={()=> navigate(-1)}>Back</button>
      <NavLink to=''>
        <button>Go Back To Home</button>
      </NavLink>
    </div>
  )
}
export default ErrorPage