import React from 'react'
import PropTypes from 'prop-types'

const DownloadButton = ({ path, text }) => (
  <div className='download_button-wrap'>
    <a
      className='download_button'
      href={path}
      target='_blank'
      download
    >
      {text}
    </a>
  </div>
)

DownloadButton.propTypes = {
  path: PropTypes.string,
  text: PropTypes.string
}

export default DownloadButton