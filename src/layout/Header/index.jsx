import classNames from 'classnames/bind'
import styles from './style.module.scss'
import { Row, Col, Flex, Input } from 'antd'
import React from 'react'
import { MagnifyingGlass, User, ShoppingCart } from '@phosphor-icons/react'
import { useSearchParams } from 'react-router-dom'

const cx = classNames.bind(styles)

function Header() {
  let [searchParams, setSearchParams] = useSearchParams()
  return (
    <div className={cx('container')}>
      <div className={cx('navigation-container')}>
        <div className={cx('navigation')}>
          <Row align="middle">
            <Col span={12}>
              <ul>
                <Flex
                  align="item"
                  gap={15}
                  style={{
                    minHeight: 50,
                  }}
                >
                  <li className={cx('menu-item')}>HOME</li>
                  <li className={cx('menu-item')}>PRODUCT</li>
                  <li className={cx('menu-item')}>CONTACT</li>
                  <li className={cx('menu-item')}>ABOUT US</li>
                </Flex>
              </ul>
            </Col>
            <Col span={12}>
              <Flex align="center" gap={10} justify="flex-end">
                <Input
                  style={{ width: 300 }}
                  size="large"
                  placeholder="Search..."
                  suffix={<MagnifyingGlass size={32} />}
                />
                <User size={32} />
                <ShoppingCart size={32} />
              </Flex>
            </Col>
          </Row>
        </div>
      </div>
      <div className={cx('name-shop')}>AVACADO SHOP</div>
    </div>
  )
}

export default Header
