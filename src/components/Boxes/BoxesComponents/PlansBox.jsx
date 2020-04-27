import React, { useState } from 'react'
import styles from '../Boxes.module.css'

const PlansBox = (props) => {

  let [id, setId] = useState(null)

  const choosePlan = (price, type) => {
    props.setPrice(price)
    props.setTypes(type)
  }

  const hoverOn = (id) => {
    setId(id)
  }

  const handleChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <div className={styles.plans}>
      {props.plans.map(p =>
        <div
          key={p.id}
          onMouseEnter={() => { hoverOn(p.id) }}
          className={id === p.id ? styles.hovered : styles.unhovered}>
          <div className={styles.plansItem}>
            <label className={styles.plansLabel}>
              <input type="radio" checked="checked" onChange={handleChange} />
              <span
                onClick={() => { choosePlan(p.price, p.type) }}>
                <span
                  className={p.type === props.types ? styles.activeRadio : styles.myRadio}>
                  {p.type === props.types ? <span></span> : null}
                </span>
                <span className={styles.plansTitle}>{`LICENSEPLAN${p.type}`}</span>
              </span>
            </label>
            <span className={styles.plansPrise}>{`$${p.price} per license`}</span>
          </div >
        </div>
      )}
    </div>
  )
}

export default PlansBox