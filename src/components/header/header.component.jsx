import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import {ReactComponent as Logo} from '../../assets/sart.svg';
import CartDropdown from '../cart-dropdown/cart-deopdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { auth } from '../../firebase/firebase.util';



import './header.styles.scss';

const Header = ({currentUser, hidden}) => (
   <div className='header'>
     <Link className='logo-container' to='/'>
         <Logo className='logo'/>
     </Link>
     <h2 className='branding'>Shopin</h2>
     <div className='options'>
      <Link className='option' to='/shop'>
          SHOP
      </Link>
      {
          currentUser ? 
          <div className='option' onClick= {() => auth.signOut()}>SIGN OUT</div>
          :
          <Link className='option'  to='/signin'>SIGN IN</Link>
      }

      <CartIcon/>
     
     </div>
     {
       hidden ? null : 
   <CartDropdown />

     }
  </div>
)

const mapStateToProps = createStructuredSelector({
 currentUser: selectCurrentUser,
 hidden: selectCartHidden
})



export default connect(mapStateToProps)(Header);