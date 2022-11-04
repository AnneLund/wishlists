import {Link} from 'react-router-dom'
import {useLoginStore} from "../Login/useLoginStore";
import styled from 'styled-components';
import React from 'react';
import stars from '../../Assets/Images/stars.jpeg'
import rebecca from '../../Assets/Images/rebecca.jpg'
import valdemar from '../../Assets/Images/valdemar.jpg'
import mikkel from '../../Assets/Images/mikkel.PNG'
import anne from '../../Assets/Images/anne.JPG'

const Wishlists = () => {

      const { loggedIn, userInfo } = useLoginStore((store) => ({
        setLoggedIn: store.setLoggedIn,
        loggedIn: store.loggedIn,
        userInfo: store.userInfo,
        userName: store.userName,
      }));

      const [open, setOpen] = React.useState(false);

      const handleOpen = () => {
        setOpen(!open);
      };

    const WishListsPage = styled.section`
    background-image: url(${stars});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-blend-mode: darken;
    background-color: #000000c6;
    background-size: cover;
    min-height: 100vh;
    padding: 4em 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    margin: 0;

    .rebecca{
    margin: 4em auto 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0000009d;
 
    div{
       background-color: #000000d3;
       background-image: url(${rebecca});
       background-blend-mode: darken;
       background-size: cover;
       background-position: center;
       background-repeat: no-repeat;
       margin: auto;
       display: flex;
       align-items: center;
       justify-content: center;
        width: 100%;
        height: 50vh;
        position: relative; 
        color: white;

        &:hover{
            background-color: #2e2e2e9d;
        }
    }  

    li{
        list-style: none;
        font-size: 2em;
        font-weight: 600;
        margin: 0 1.5em;
    }

    &:hover{
            background-color: #2e2e2e9d ;
        }
    }

    .valdemar{
    margin: 2em auto 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0000009d;
 
    div{
       background-color: #000000d3;
       background-image: url(${valdemar});
       background-blend-mode: darken;
       background-position: 2em 0 0 0;
       background-size: 120%;
       background-size: cover;
       background-repeat: no-repeat;
       margin: auto;
       display: flex;
       align-items: center;
       justify-content: center;
        width: 100%;
        height: 50vh;
        position: relative; 
        color: white;

        &:hover{
            background-color: #2e2e2e9d;
        }
    }  

    li{
        list-style: none;
        font-size: 2em;
        font-weight: 600;
        margin: 0 1.5em;
    }

    &:hover{
            background-color: #2e2e2e9d ;
        }
    }

    .mikkel{
    margin: 2em auto 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0000009d;
 
    div{
       background-color: #000000d3;
       background-image: url(${mikkel});
       background-blend-mode: darken;
       background-size: 120%;
       background-position: center;
       display: flex;
       justify-content: space-between;
       align-items: center;
        height: 50vh;
        position: relative; 
        color: white;
        width: 100%;

        &:hover{
            background-color: #2e2e2e9d;
        }
    }  

    li{
        list-style: none;
        font-size: 2em;
        font-weight: 600;
        margin: 0 1.5em;
    }

    &:hover{
            background-color: #2e2e2e9d ;
        }
    }

    .anne{
    margin: 2em auto 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0000009d;
 
    div{
       background-color: #000000d3;
       background-image: url(${anne});
       background-blend-mode: darken;
       background-size: 150%;
       background-position: top;
       display: flex;
       justify-content: space-between;
       align-items: center;
        height: 50vh;
        position: relative; 
        color: white;
        width: 100%;

        &:hover{
            background-color: #2e2e2e9d;
        }
    }  

    li{
        list-style: none;
        font-size: 2em;
        font-weight: 600;
        margin: 0 1.5em;
    }

    &:hover{
            background-color: #2e2e2e9d ;
        }
    }

    @media screen and (max-width: 600px) {
        .mikkel, .anne, .valdemar, .rebecca{
           div{
           height: 18vh; 
           width: 500px;
           text-align: center;
           padding: 0 2em;
           } 

           li{
            margin: auto;
           }
        }
    }
`
    return(
<WishListsPage>
<section className='rebecca'>
  <Link to="/rebecca"> 
   <div>
     <li>
            
                 <p>
                 Rebeccas ønskeseddel
                 </p>
              
         </li>  
   </div>
 </Link>    
            </section>

    <section className='valdemar'>
  <Link to="/valdemar"> 
   <div>
     <li>
            
                 <p>
                 Valdemars ønskeseddel
                 </p>
              
         </li>  
   </div>
 </Link>     
 </section>

 <section className='mikkel'>
  <Link to="/mikkel"> 
   <div>
     <li>
            
                 <p>
                 Mikkels ønskeseddel
                 </p>
              
         </li>  
   </div>
 </Link>     
 </section>

 <section className='anne'>
  <Link to="/anne"> 
   <div>
     <li>
            
                 <p>
                 Annes ønskeseddel
                 </p>
              
         </li>  
   </div>
 </Link>     
 </section>

    {/* <Nav>
            {loggedIn ?  <>  

            

            <DropDown>
              <button onClick={handleOpen}>Vælg en ønskeseddel</button>
{open ? 

<ul onClick={handleOpen}>
         <li>
             <Link to="/wishlists/rebecca">
                 <p>
                 Rebeccas ønskeseddel
                 </p>
              </Link>
         </li>

         <li>
             <Link to="/wishlists/valdemar">
                 <p>
                     Valdemars ønskeseddel
                 </p>
                 </Link>
         </li>

    
        <li>
             <Link to="/wishlists/anne">
                 <p>
                     Annes ønskeseddel
                 </p>
                 </Link>
         </li> 

        <li>
             <Link to="/wishlists/mikkel">
                 <p>
                     Mikkels ønskeseddel
                 </p>
                 </Link>
         </li>
     </ul> 
     
     : null}
     
 </DropDown>

       </>   
  : null}

</Nav> */}
       </WishListsPage>       
    )
}

export default Wishlists;