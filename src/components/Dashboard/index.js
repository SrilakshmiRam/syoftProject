import './index.css'

const Dashboard = () => {
  const details=JSON.parse(localStorage.getItem('userDetails'))
  const {firstname,lastname,city,pincode,email}=details
  return(
  <div className='dashboard'>
    <h1 className='dashboard-header'>Welcome to your Dashboard!!!</h1>
    <p className='user-text'>Username: {firstname} {lastname}</p>
    <p className='user-text'>Email: {email}</p>
    <p className='user-text'>City: {city}</p>
    <p className='user-text'>Zipcode: {pincode}</p>
  </div>
)
}

export default Dashboard