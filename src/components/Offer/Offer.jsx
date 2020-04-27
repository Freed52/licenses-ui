import React from 'react'
import styles from './Offer.module.css'

const Offer = (props) => {
    return (
        <div >
            <div className={styles.offer}>
                <h3>Your offer is:</h3>
                <div className={styles.offerInfo}>
                    <span>Number of LICENSEPLAN <span>{props.offer.type}</span></span>
                </div>
                <div className={styles.offerInfo}>
                    <span>Total <span>{`${props.offer.total}$`}</span></span>
                </div>
            </div>
        </div>
    )
}

export default Offer;
