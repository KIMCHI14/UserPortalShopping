import React from 'react'
import classNames from 'classnames/bind'
import styles from './style.module.scss'

const cx = classNames.bind(styles)
function Banner() {
  // const Banner = () => {
  return (
    <div className={cx('banner')}>
      <video className={cx('banner-video')} autoPlay loop muted>
        <source src="MO&Co. _ China Power _ Spring 2023.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default Banner
