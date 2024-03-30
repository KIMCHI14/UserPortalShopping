import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './style.module.scss'
import { useEffect } from 'react'
import { getProducts } from '../../../../api'
import React, { useState } from 'react'
import { Flex } from 'antd'
import PropTypes from 'prop-types'
function NewCollection(props) {
  console.log('props', props)
  const cx = classNames.bind(styles)
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then((res) => {
      console.log('res', res)
      const { data } = res
      setProducts(data)
    })
  }, [])

  return (
    <>
      <div className={cx('content')}>
        <div className={cx('nav-content')}>
          <div>
            <Link className={cx('content-obj')} to="#">
              {/* NEW COLLECTION */}
              {props.title}
            </Link>
            <div>
              <Link className={cx('content-obj2')} to="#">
                Luxurious design, soft material, simple colors
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Flex>
        {/* item1 */}

        {/* <div
          style={{
            width: '23vw',
            height: '40vh',
            margin: '2em',
            overflow: 'hidden',
            perspective: '1000px',
          }}
        >
          <div
            style={{
              background: "url('hinhao2.jpg')",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '23vw',
              height: '40vh',
              borderRadius: '20px',
              // transition: 'transform 0.5s',
              // transform: 'scale(1.2)',
              transform: 'scale(1)',
              transition: 'transform 0.5s',
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = 'scale(1.2)')
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <h3 style={{ margin: '0.5em' }}>Product name</h3>
            <p style={{ margin: '0.5em' }}>Product Price</p>
          </div>
        </div> */}

        {/* item2 */}
        {/* <div style={{ width: '23vw', height: '40vh', margin: '2em' }}>
          <div
            style={{
              background: "url('hinhao2.jpg')",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '23vw',
              height: '40vh',
              borderRadius: '20px',
            }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <h3 style={{ margin: '0.5em' }}>Product name</h3>
            <p style={{ margin: '0.5em' }}>Product Price</p>
          </div>
        </div> */}

        {/* item3 */}
        {/* <div style={{ width: '23vw', height: '40vh', margin: '2em' }}>
          <div
            style={{
              background: "url('hinhao2.jpg')",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '23vw',
              height: '40vh',
              borderRadius: '20px',
            }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <h3 style={{ margin: '0.5em' }}>Product name</h3>
            <p style={{ margin: '0.5em' }}>Product Price</p>
          </div>
        </div> */}
      </Flex>

      {/* <div
        style={{
          width: '100vw',
          height: '80vh',
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '100%',
        }}
      > */}
      {/* item4 */}
      {/* <div style={{ width: '23vw', height: '40vh', margin: '2em' }}>
          <div
            style={{
              background: "url('hinhao2.jpg')",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '23vw',
              height: '40vh',
              borderRadius: '20px',
            }}
          ></div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <h3 style={{ margin: '0.5em' }}>Product name</h3>
            <p style={{ margin: '0.5em' }}>Product Price</p>
          </div>
        </div> */}

      {/* item5 */}
      {/* <div style={{ width: '23vw', height: '40vh', margin: '2em' }}>
          <div
            style={{
              background: "url('hinhao2.jpg')",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '23vw',
              height: '40vh',
              borderRadius: '20px',
            }}
          ></div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <h3 style={{ margin: '0.5em' }}>Product name</h3>
            <p style={{ margin: '0.5em' }}>Product Price</p>
          </div>
        </div> */}

      {/* item6 */}
      {/* <div style={{ width: '23vw', height: '40vh', margin: '2em' }}>
          <div
            style={{
              background: "url('hinhao2.jpg')",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '23vw',
              height: '40vh',
              borderRadius: '20px',
            }}
          ></div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <h3 style={{ margin: '0.5em' }}>Product name</h3>
            <p style={{ margin: '0.5em' }}>Product Price</p>
          </div>
        </div> */}
      {/* </div> */}
      {/* <div
        style={{
          width: '100vw',
          height: '80vh',
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '100%',
        }}
      >
      </div>
 */}
    </>
  )
}
NewCollection.propTypes = {
  title: PropTypes.string.isRequired,
}
export default NewCollection
