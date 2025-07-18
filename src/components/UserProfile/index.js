const UserProfile=(props)=>{
  const {userDetails}=props
  const {imageUrl}=userDetails
return(
<div>
  <img src={imageUrl}/>
  </div>
)
}
export default UserProfile
