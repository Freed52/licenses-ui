import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../Boxes.module.css'

const ComboBox = React.memo((props) => {

  const confirm = (total, type) => {
    let payload = {total, type}
    props.sendTotal(payload)
  }

  useEffect(() => {
    props.setTotal(props.quantity, props.price)
  })

  return (
    <div className={styles.combo}>
      <div className={styles.comboRow}>
        <div className={styles.leftIdent}></div>
        <div className={styles.middleCombo}>
          <div className={styles.comboTotal}>
            TOTAL:
            <span className={styles.comboPrise}>{`$${props.total | '0'}`}</span>
            <span className={styles.comoboBadge}>us</span>
          </div>
          <NavLink to='/offer'>
            <button onClick={() => {confirm(props.total, props.types)}} className={styles.comboButton}>BUY NOW</button>
          </NavLink>
          <div className={styles.comboInfo}>Selected plan:<span>{props.types}</span></div>
        </div>
        <div className={styles.rightIdent}></div>
      </div>
    </div>
  )
})

export default ComboBox