import React from "react";


const Navigation =({onRouteChange, isSignedIn}) =>{




if(isSignedIn){
    return (
<nav style={{display:'flex', justifyContent: 'flex-end'}}>
    
    <p onClick={()=> onRouteChange('home')} className='f3 link dim black underline pa3 pointer fw9 ' > Update Profile </p>
    <p onClick={()=> onRouteChange('QuoteHistory')} className='f3 link dim black underline pa3 pointer fw9 ' > Quote History </p>
    
<p onClick={()=> onRouteChange('GetQuote')} className='f3 link dim black underline pa3 pointer fw9 ' > Get Fuel Quote </p>
<p onClick={()=> onRouteChange('signout')} className='f3 link dim black underline pa3 pointer fw9 ' > Sign Out </p>
</nav>

);
}else{
return(
<nav style={{display:'flex', justifyContent: 'flex-end'}}>
    <p onClick={()=> onRouteChange('signin')} className='f3 link dim black underline pa3 pointer fw9 ' > Sign In </p>
    <p onClick={()=> onRouteChange('register')} className='f3 link dim black underline pa3 pointer fw9 ' > Register </p>

</nav>

);
}

}
export default Navigation;