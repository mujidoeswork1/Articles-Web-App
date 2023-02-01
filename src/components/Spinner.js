// import PropTypes from 'prop-types'
import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
//   static propTypes = {}

    return (
      <div>
      <img className="my-3" src={loading} alt="loading..." width="8%" color='black' />
      </div>
    )
  
}

export default Spinner