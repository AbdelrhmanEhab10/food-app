import React from 'react'
import ReactDom from 'react-dom'
import classes from './Modal.module.css'

const Backdrop= props =>{
    return <div className={classes.backdrop} onClick={props.onClose}/>
}

const ModalOverlay= props =>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalEle = document.getElementById('overlays')

const Modal = props => {
    return (
    <>
    {ReactDom.createPortal(<Backdrop onClose={props.onClose}/>,portalEle)}
    {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalEle)}
    </>
  )
}

export default Modal