import React from 'react'

import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";
import './component2.css'

const Component2 = (props) => {
   let navigate = useNavigate();

  return (
    <div className={`component2-container ${props.rootClassName} `}>
      <button className="component2-button themebutton2 button2"
       onClick={() => navigate('/alpha-teleporthq')}
      >
        {props.button}
      </button>
    </div>
  )
}

Component2.defaultProps = {
  button: 'Enter Dapp',
  rootClassName: '',
}

Component2.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Component2
