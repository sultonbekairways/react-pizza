import classNames from 'classnames'
import React from 'react'

function Button({ className, outline, children, onClick }) {
    return (
        <button
            onClick={onClick}
            className={classNames('button', className, {
                'button--outline': outline,
            })}>
            {children}
        </button>
    )
}

export default Button
