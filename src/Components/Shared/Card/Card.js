import React from 'react'
import styles from './card.module.css'

export default function Card(props) {
    const { children } = props
    console.log('children',children)
    return (
        <div className={`${styles.card} ${props.styles}`}>
            {children}
        </div>
    )
}
