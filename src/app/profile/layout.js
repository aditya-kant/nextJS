import ProfileLogin from "./login"; 
const profileLayout = ({children}) => {
  return(
  <div>
    <h1>inside profile layout</h1>
    {children}
    <ProfileLogin/>
  </div>
  )
};

export default profileLayout;
