import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.util';
import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(){
        super()

        this.state = {
            displayName: '',
            email: '',
            password:'',
            confirmPassword:''
        }
    }
  handleSubmit = async e => {
    e.preventDefault();
   
    const {displayName, email, password, confirmPassword }= this.state;

    if(password !== confirmPassword){
        alert("password don't match")
        return;
    }
    try{
        const {user} = await auth.createUserWithEmailAndPassword(email, password);
        await  createUserProfileDocument(user, {displayName});
        this.setState({
            displayName: '',
            email: '',
            password:'',
            confirmPassword:''
        })   

    }catch(error){
        console.log(error)

    }
  }
 
  handleChange = e =>{
      const { name, value } = e.target;
      this.setState({[name]:value});
  }

    render(){
        const {displayName, email, password, confirmPassword }= this.state;
        return(
            <div className='sign-up'>
                <h2>Don't have account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                 <FormInput
                  type='text'
                  name='displayName'
                  value={displayName}
                  onChange={this.handleChange}
                  lable='Display Name'
                  required
                />
                 <FormInput 
                  type='email'
                  name='email'
                  value={email}
                  onChange={this.handleChange}
                  lable='Email'
                  required
                />
                 <FormInput 
                  type='password'
                  name='password'
                  value={password}
                  onChange={this.handleChange}
                  lable='Password'
                  required
                />
                <FormInput 
                 type='password'
                 name='confirmPassword'
                 value={confirmPassword}
                 onChange={this.handleChange}
                 lable='Confirm password'
                 required
               />
               <CustomButton type='submit'> SIGN UP</CustomButton>
              </form>
                
            </div>
        )
    }
}


export default SignUp;