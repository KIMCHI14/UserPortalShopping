// import { Carousel } from "antd";
// function Banner() {
//   const contentStyle = {
//     height: '70%',
//     width: '100%',
//     color: '#fff',
//     lineHeight: '160px',
//     textAlign: 'center',
//     background: '#E0E0DE',
//     display: "flex",
//     justifyContent: "center"
//   };

//   return (<Carousel autoplay>
//     <div>
//       <h3 style={contentStyle}>
//         <img style={{ margin: '0 10vw', width: '70%' }} src='/hinhbiangang1.jpg'></img></h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}><img style={{ margin: '0 10vw', width: '70%' }} src='/hinhbiangang2.jpg'></img></h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}><img style={{ margin: '0 10vw', width: '70%' }} src='/hinhbiangang4.jpg'></img></h3>
//     </div>

//     {/* <div>
//           <h3 style={contentStyle}>4</h3>
//         </div> */}
//   </Carousel>);
// }

// export default Banner;
import React from 'react';
// import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './style.module.scss';

const cx = classNames.bind(styles)
function Banner() {

  // const Banner = () => {
  return (
    <div className={cx('banner')}>
      <video className={cx('banner-video')} autoPlay loop muted>
        <source src="MO&Co. _ China Power _ Spring 2023.mp4" type="video/mp4" />
      </video>
      {/* <div className="banner-content">
        <h1>Welcome to Our Website</h1>
        <p>Discover amazing products and services.</p>
      </div> */}
    </div>
  );
}

export default Banner;