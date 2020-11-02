import React from 'react';
import Style from './Home.module.scss';
import {Row, Col} from 'antd';
import Header from '../../Components/Header/Header';
import Button from '../../Components/button/Button';
import Title from '../../Components/title/Title';
import component132 from '../../Assets/Images/component132.png';
import component232 from '../../Assets/Images/component232.png';
import component162 from '../../Assets/Images/component162.png';
import component142 from '../../Assets/Images/component142.png';

const Home: React.FC = (): React.ReactElement => {
  return (
    <>
      <div className={Style.topBackgrounds}>
        <Header />
        <main>
          <section className={Style.section1}>
            <div className={Style.inner}>
              <Row className={Style.section1Align}>
                <Col span={9} className={Style.section1Right}>
                  <h1 className={Style.section1RightText}>
                    سامانه جامع آموزش آنلاین دانشگاه شیراز
                  </h1>
                  <Button
                    type="primary"
                    className={Style.sectionRightTopButton}
                  >
                    خرید سامانه
                  </Button>
                  <Button
                    size="middle"
                    className={Style.sectionRightBottomButton}
                  >
                    پیگیری خرید
                  </Button>
                </Col>
                <Col span={9} className={Style.section1Left}>
                  <div>
                    <img
                      src={component132}
                      alt="amoozesh"
                      className={Style.section1LeftImage}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </section>
          <section className={Style.section2}>
            <div className={Style.inner}>
              <Title children="معرفی کل سامانه" />
              <Row className={Style.section2Align}>
                <Col span={9} className={Style.section2Right}>
                  <h1 className={Style.section2heading}>
                    این سامانه توسط دانشگاه صنعتی شیراز طراحی گردیده است…
                  </h1>
                  <br />
                  <p>
                    لورم ایپسوم متن ساختگی با تنها نامفهوم از چاپ لورم ایپسوم
                    متن ساختگی با تنها مفهوم از چاپ لورم ایپسوم متن ساختگی با
                    تناوب مفهوم از چاپ لورم ایپسوم متن ساختگی با نامفهوم از چاپ
                    است مفهوم از چاپ لورم ایپسوم متن ساختگی با نامفهوم از چاپ
                    است
                  </p>
                  <br />
                  <p>
                    لورم ایپسوم متن ساختگی با تنها نامفهوم از چاپ لورم ایپسوم
                    متن ساختگی با تنها مفهوم از چاپ لورم ایپسوم
                  </p>
                </Col>
                <Col span={11} className={Style.section2Left}>
                  <div className={Style.section2LeftImage}>
                    <img src={component232} alt="samaneh" />
                  </div>
                  <Button
                    children="بیشتر بدانید"
                    className={Style.section2Button}
                  />
                </Col>
              </Row>
            </div>
          </section>
          <section className={Style.section3}>
            <div className={Style.inner}>
              <Title children="نگاهی به جزئیات سامانه" />
              <Row className={Style.section3Align}>
                <Col span={7} className={Style.section3Right}>
                  <div className={Style.section3RightInner}>
                    <img src={component162} alt="user-management" />
                  </div>
                </Col>
                <Col span={11} className={Style.section3Left}>
                  <h2 className={Style.section3LeftHeading}>مدیریت کاربران</h2>
                  <p className={Style.section3LeftContent}>
                    لورم ایپسوم متن ساختگی با تنها نامفهوم از چاپ لورم ایپسوم
                    متن ساختگی با تنها مفهوم از چاپ لورم ایپسوم
                  </p>
                </Col>
              </Row>
              <div className={Style.buttonContainer}>
                <Button
                  children="خرید سامانه"
                  className={Style.section3Button}
                />
              </div>
            </div>
          </section>
          <section className={Style.section4}>
            <div className={Style.inner}>
              <Title children="آمار و اطلاعات" />
              <Row></Row>
            </div>
          </section>
          <section className={Style.section5}>
            <div className={Style.inner}>
              <Title children="تجربه مشتریان" />
              <Row className={Style.section5Align}>
                <Col span={10} className={Style.section5Right}>
                  <div className={Style.section5RightContent}>
                    <p className={Style.section5RightText}>
                      لورم ایپسوم متن ساختگی با تنها نامفهوم از چاپ لورم ایپسوم
                      متن ساختگی با تنها مفهوم از چاپ لورم ایپسوم متن ساختگی با
                      تناوب مفهوم از چاپ لورم ایپسوم متن ساختگی با نامفهوم از
                      چاپ است مفهوم از چاپ لورم ایپسوم متن ساختگی با نامفهوم از
                      چاپ است
                    </p>
                    <p className={Style.section5RightText2}>مدیریت کاربران</p>
                  </div>
                </Col>
                <Col span={6} className={Style.section5Left}>
                  <div className={Style.section5LeftImage}>
                    <img src={component142} alt="" />
                  </div>
                </Col>
              </Row>
            </div>
          </section>
        </main>
        <footer></footer>
      </div>
    </>
  );
};

export default Home;
  