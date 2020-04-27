import React from 'react'
import { Switch } from 'react-router'
import { withRouter, Route, Redirect } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'
import BoxesContainer from './Boxes/BoxesContainer'
import Offer from './Offer/Offer'
import styles from './App.module.css'

class App extends React.PureComponent {

  componentDidMount () {
    return <Redirect to='/' />
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.upIdent}></div>
        <div className={styles.leftIdent}></div>
        <div className={styles.main}>
          <Switch>
            <Route exact path='/' render={() => <BoxesContainer />} />
            <Route exact path='/offer' render={() => <Offer offer={this.props.offer} />} />
          </Switch>
        </div>
        <div className={styles.rightIdent}></div>
        <div className={styles.bottomIdent}></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  offer: state.plans.offer
})

export default compose(withRouter, connect(mapStateToProps, {}))(App)