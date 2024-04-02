import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './style.module.scss'
import { useEffect } from 'react'
import { getProducts } from '../../../../api'
import React, { useState } from 'react'
import { Flex } from 'antd'
import PropTypes from 'prop-types'
import ItemProduct from './item'
import { newColletion } from './api'
import axios from 'axios'



function NewCollection(props) {
  const [products, setProducts] = useState();
  console.log('props', props)
  const cx = classNames.bind(styles)
  // const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/products/')
      .then(function (response) {
        // handle success
        setProducts(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [])
  console.log(products)
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

      <Flex wrap="wrap" style={{ margin: '0 20px 40px', justifyContent: 'center' }}>
        {/* item1 */}

        {products?.map(product => {
          return (
            <ItemProduct
              productName={product.product_name}
              productPrice={product.price}
              productImage={product.product_size[0].images}
            />
          )
        })}

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
