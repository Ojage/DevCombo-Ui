import React from 'react'
// Defines a rewuired prop called label that our button needs to recieve
interface ButtonProps {
    label: string
}

const Button = (props: ButtonProps) => {
    return <button>{props.label}</button>
}
export default Button