import React from 'react';
import {Link} from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section style={{width : '80%' , margin : 'auto' , display : 'flex' ,
    flexDirection: 'column'}}>
    <h1 style={{textAlign : 'center' , fontSize : '50px', marginBottom : '40px'}}>Oops... Page not Found..!</h1>
          <Link to='/' style={{ textAlign: 'center' , color : 'royalblue'}}>Go Back to Home</Link>

    </section>
  )
}

export default ErrorPage;