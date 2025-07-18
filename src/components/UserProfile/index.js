import './index.css'
const UserProfile=(props)=>{
  const {userDetails}=props
  const {imageUrl}=userDetails
return(
<div className="user-card-container">
  <img src={imageUrl} className="avatar"/>
  </div>
)
}
export default UserProfile
