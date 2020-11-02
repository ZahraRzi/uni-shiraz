import React from 'react';
import {Col, Row} from 'antd';
import Style from './Header.module.scss';
import moshtaghicon from '../../Assets/Images/moshtaghicon.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = (): React.ReactElement => {
  return (
    <header className={Style.root}>
      <div className="container">
        <Row className={Style.inner}>
          <Col span={9} className={Style.logoContainer}>
            <img
              src={moshtaghicon}
              alt="moshtagh icon"
              className={Style.logo}
            />
            <span className={Style.uniLogoText}>دانشگاه صنعتی شیراز</span>
          </Col>
          <Col span={15}>
            <nav>
              <ul className={Style.list}>
                <li className={Style.item}>
                  <a href="/">صفحه اصلی</a>
                </li>
                <li className={Style.item}>
                  <a href="/">صفحه اصلی</a>
                </li>
                <li className={Style.item}>
                  <a href="/"> صفحه اصلی</a>
                </li>
                <li className={[Style.item, Style.itemWhite].join(' ')}>
                  <a href="/" className={Style.itemWhite}>
                    ورود به سامانه
                  </a>
                </li>
                <li className={[Style.item, Style.itemWhite].join(' ')}>
                  <span className={Style.itemWhiteContent}>
                    امروز شنبه پنجم بهمن ۱۳۹۸
                  </span>
                  <FontAwesomeIcon icon={faSearch} className={Style.itemWhiteIcon} />
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </div>
      {/* <Row>
            <Col span={9}>
                <nav>
                    <ul>
                        <li><a href="/">خانه</a></li>
                        <li><a href="/">ستیسن</a></li>
                        <li><a href="/">ستیلسیت</a></li>
                        <li><a href="/">ورود به سامانه</a></li>
                        <li><span> امروز پنجم بهمن ۹۸</span></li>
                    </ul>
                </nav>
            </Col>
            <Col span={15}></Col>
        </Row>
        <Row>
            <Col span={12}></Col>
            <Col span={12}></Col>
        </Row> */}
    </header>
  );
};

export default Header;
