import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './style.module.scss'
import css from './index.css'
import Search from "antd/es/input/Search";
import { SearchOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";

const cx = classNames.bind(styles)


const onSearch = () => {
    console.log(123)
}
function Header() {
    return (
        <div className={cx('container')}>
            <div className={cx('navigation-container')}>
                <div className={cx('navigation')}>
                    <div style={{ paddingTop: '1.5em' }} >
                        <Link style={{ fontWeight: '600', cursor: 'default', margin: '0', padding: '1em', height: '100%' }} className={cx('navigation-obj')} to='#'>HOME</Link>
                    </div>
                    <div style={{ paddingTop: '1.5em' }} >
                        <Link style={{ fontWeight: '600', cursor: 'default', margin: '0', padding: '1em', height: '100%' }} className={cx('navigation-obj')} to='#'>PRODUCT</Link>
                    </div>
                    <div style={{ paddingTop: '1.5em' }} >
                        <Link style={{ fontWeight: '600', cursor: 'default', margin: '0', padding: '1em', height: '100%' }} className={cx('navigation-obj')} to='#'>CONTACT</Link>
                    </div>
                    <div style={{ paddingTop: '1.5em' }} >
                        <Link style={{ fontWeight: '600', cursor: 'default', margin: '0', padding: '1em', height: '100%' }} className={cx('navigation-obj')} to='#'>ABOUT US</Link>
                    </div>
                </div>
                <div className={cx('right-navigation')}>
                    <div className={cx('search-bar')}>
                        <Search
                            placeholder="Search..."
                            allowClear
                            enterButton={<SearchOutlined />}
                            size="large"
                            onSearch={onSearch}
                        />
                    </div>
                    <div className={cx('icon')}>
                        <UserOutlined />
                    </div>
                    <div className={cx('icon')}>
                        <ShoppingCartOutlined />
                    </div>
                </div>
            </div>
            <div className={cx('name-shop')}>
                AVACADO SHOP
            </div>
        </div>
    );
}

export default Header;