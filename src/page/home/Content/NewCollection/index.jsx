import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './style.module.scss'
function NewCollection(props) {
  console.log('props', props)
  const cx = classNames.bind(styles)

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
      {/* <div className={cx('collection')}>
                <div className={cx('collection-obj')}>
                    <div>
                        <img src='/hinhao2.jpg'></img>
                    </div>
                    <div>
                        <img src='/hinhao2.jpg'></img>
                    </div>
                    <div>
                        <img src='/hinhao2.jpg'></img>
                    </div>
                </div>
            </div> */}

      <div
        style={{
          width: '100vw',
          height: '80vh',
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '100%',
        }}
      >
        {/* item1 */}
        <div style={{ width: '23vw', height: '40vh', margin: '2em' }}>
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
        </div>

        {/* item2 */}
        <div style={{ width: '23vw', height: '40vh', margin: '2em' }}>
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
        </div>

        {/* item3 */}
        <div style={{ width: '23vw', height: '40vh', margin: '2em' }}>
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
        </div>
      </div>
    </>
  )
}

export default NewCollection
