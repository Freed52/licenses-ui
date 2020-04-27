import React from 'react'
import { connect } from 'react-redux'
import { 
    getPlansThunk, 
    setTypesThunk, 
    setPriceThunk, 
    setQuantityThunk, 
    setTotalThunk, 
    sendTotalThunk } from '../../redux/plans-reducer'
import PlansBox from './BoxesComponents/PlansBox'
import QuantityBox from './BoxesComponents/QuantityBox'
import ComboBox from './BoxesComponents/ComboBox'
import styles from './Boxes.module.css'

class BoxesContainer extends React.PureComponent {

    componentDidMount () {
        this.props.getPlansThunk()
    }

    render() {
        return (
            <div className={styles.boxes}>
                <PlansBox 
                plans={this.props.plans} 
                types={this.props.types}
                price={this.props.price} 
                setTypes={this.props.setTypesThunk}
                setPrice={this.props.setPriceThunk}
                setTotal={this.props.setTotalThunk} />
                <QuantityBox 
                setQuantity={this.props.setQuantityThunk} 
                quantity={this.props.quantity} />
                <ComboBox 
                types={this.props.types}
                price={this.props.price} 
                quantity={this.props.quantity} 
                total={this.props.total} 
                setTotal={this.props.setTotalThunk}
                sendTotal={this.props.sendTotalThunk} 
                offer={this.props.offer} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    plans: state.plans.plans,
    types: state.plans.types,
    price: state.plans.price,
    quantity: state.plans.quantity,
    total: state.plans.total,
    offer: state.plans.offer
})

export default connect(mapStateToProps, {
    getPlansThunk,
    setTypesThunk,
    setPriceThunk,
    setQuantityThunk,
    setTotalThunk,
    sendTotalThunk})(BoxesContainer)