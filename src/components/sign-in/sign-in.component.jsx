import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.util';
import './sign-in.styles.scss';

class SingnIn extends React.Component{
    constructor(props){
        super(props)
    
    this.state = {
        email:'',
        password:''
    }
    
    }
  handleSubmit = async e =>{
      e.preventDefault();
      const {email, password} = this.state;

      try{
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({email:'',password: ''})
      }catch(error){
        console.log(error);
      }
  }
  
  handleChange = e =>{
    const{ value, name } = e.target;

    this.setState({[name]: value})
  }


    render(){
        return(
         <div className='sign-in'>
           <h2>Have an account ?</h2>
           <span>sign in with email and password </span>

           <form onSubmit={this.handleSubmit}>
               <FormInput 
                name='email' 
                type='email' 
                value={this.state.email} 
                onChange={this.handleChange}
                lable='email'
                required />
             
               <FormInput 
                name= 'password' 
                type='password' 
                value={this.state.password} 
                onChange={this.handleChange}
                lable='password'
                required/>
              <div className='buttons'>
              <CustomButton type='submit'>SIGNIN</CustomButton>
              <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                
                Sign In With Google
            
              </CustomButton>
              </div>

           </form>
         </div>
        )
    }

}

export default SingnIn;