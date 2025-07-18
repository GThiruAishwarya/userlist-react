import UserProfile from './components/UserProfile/index.js';
const userDetails={
imageUrl:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
name:"Rahul",
role:"Software Developer"
}
const App=()=><UserProfile userDetails={userDetails}/>
export default App;
