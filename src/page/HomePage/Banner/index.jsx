import { Carousel } from "antd";
function Banner() {
  const contentStyle = {
    height: '70%',
    width: '100%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#E0E0DE',
    display: "flex",
    justifyContent: "center"
  };

  return (<Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
        <img style={{ margin: '0 10vw', width: '70%' }} src='/hinhbiangang1.jpg'></img></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img style={{ margin: '0 10vw', width: '70%' }} src='/hinhbiangang2.jpg'></img></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img style={{ margin: '0 10vw', width: '70%' }} src='/hinhbiangang4.jpg'></img></h3>
    </div>

    {/* <div>
          <h3 style={contentStyle}>4</h3>
        </div> */}
  </Carousel>);
}

export default Banner;