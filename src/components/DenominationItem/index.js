// Write your code here

import './index.css'

const UserDenominations = props => {
  const {userDetails, onDepreciate} = props
  const {value} = userDetails

  const onClickDenomination = () => {
    onDepreciate(value)
  }
  return (
    <li className="button-cont">
      <button
        className="button-value"
        type="button"
        onClick={onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default UserDenominations
