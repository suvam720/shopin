import React from 'react';
import SingnIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './signin-and-signup.styles.scss';


const SignInAndSignUpPage = () => (
 <div className='signin-and-signup'>
 <SingnIn/>
 <SignUp/>
 </div>
)

export default SignInAndSignUpPage;
