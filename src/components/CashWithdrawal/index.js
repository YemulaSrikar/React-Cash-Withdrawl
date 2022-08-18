// Write your code here

import {Component} from 'react'

import './index.css'

import UserDenominations from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onDepreciate = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)
    return (
      <div className="bg-container">
        <div className="bg-card">
          <div className="name-cont">
            <h1 className="s-symbol">{initial}</h1>
            <p className="user-name">{name}</p>
          </div>
          <div className="bal-cont">
            <p className="bal-text">Your balance</p>
            <p className="rupees-num">{balance}</p>
          </div>
          <p className="rupees-text">In Rupees</p>
          <p className="withdraw-text">Withdraw</p>
          <p className="sum-text">CHOOSE SUM (In RUPEES)</p>
          <ul className="u-list">
            {denominationsList.map(eachUser => (
              <UserDenominations
                userDetails={eachUser}
                key={eachUser.id}
                onDepreciate={this.onDepreciate}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
