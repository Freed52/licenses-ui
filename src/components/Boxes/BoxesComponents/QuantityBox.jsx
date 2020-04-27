import React, {useState} from 'react'
import styles from '../Boxes.module.css'

const QuantityBox = (props) => {

    let [value, setValue] = useState('1')

    const handleChange = (e) => {
        let value = e.target.value
        setValue(value)
        props.setQuantity(value)
    }

    return (
        <div className={styles.quantity}>
            <div className={styles.quantityRow}>
                <div className={styles.quantityMiddle}>
                    <label>Numbers of licenses:</label>
                    <select onChange={handleChange} className={styles.select} value={value}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default QuantityBox