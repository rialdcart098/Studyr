import type { PropTypes } from '../types'
import React from "react";

interface TogglableProp extends PropTypes {
    buttonLabel: string,
    toggleVisibility: (arg: unknown) => void,
    visible: boolean,
    className: string,
}

const Togglable = (props: TogglableProp) => {
    const hideWhenVisible = { display: props.visible ? 'none' : '' }
    const showWhenVisible = { display: props.visible ? '' : 'none' }

    return (
        <div>
            <div style={hideWhenVisible}>
                <button onClick={props.toggleVisibility}>{props.buttonLabel}</button>
            </div>
            <div style={showWhenVisible} className={props.className}>
                {props.children}
                <button onClick={props.toggleVisibility}>cancel</button>
            </div>
        </div>
    )
}

export default Togglable