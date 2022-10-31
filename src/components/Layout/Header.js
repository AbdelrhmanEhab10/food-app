import React from 'react'
import foodImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = props => {
  return (
    <>
    <header className={classes.header}>
        <h1>React Meal</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
    </header>
    <div className={classes['main-image']}>
        <img src={foodImage} alt='food'/>
    </div>
    </>
  )
}

export default Header