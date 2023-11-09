import { useRef } from 'react';

import { Swiper as SwiperType, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import './style.scss';
import ArrowIcon from '../icons/arrowIcon';

const Posts: React.FC = () => {
    const swiperRef = useRef<SwiperType>();

    return (
        <div className="posts-screen">
            <div className="container">
                <div className="row-post">
                    <div className="title">Наши статьи</div>
                    <div className="slider-navigation">
                        <div onClick={() => swiperRef.current?.slidePrev()} className="slider-navigation__arrow slider-navigation__arrow-prev">
                            <ArrowIcon color='#959595' />
                        </div>
                        <div onClick={() => swiperRef.current?.slideNext()} className="slider-navigation__arrow slider-navigation__arrow-next">
                            <ArrowIcon color='#959595' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="swips">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    // centeredSlides={true}
                    pagination={{
                        clickable: true
                    }}
                    className="post-swiper"
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3.5,
                        },
                        1920: {
                            slidesPerView: 3.8,
                        },
                    }}
                >
                    <SwiperSlide className="post-item">
                        <a href="#">
                            <div className="post-item__img">
                                <img src="./images/posts/post-1.png" alt="" />
                            </div>
                            <div className="post-item-content">
                                <div className="post-item__title">Текст в несколько строчек в несколько строчек </div>
                                <div className="post-item__desc">Текст в несколько строчек в несколько строчек </div>
                                <div className="post-item-bottom">
                                    <div className="post-item__date">9 марта 2023</div>
                                    <div className="post-item__site">VC.RU</div>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="post-item">
                        <a href="#">
                            <div className="post-item__img">
                                <img src="./images/posts/post-1.png" alt="" />
                            </div>
                            <div className="post-item-content">
                                <div className="post-item__title">Текст в несколько строчек в несколько строчек </div>
                                <div className="post-item__desc">Текст в несколько строчек в несколько строчек </div>
                                <div className="post-item-bottom">
                                    <div className="post-item__date">9 марта 2023</div>
                                    <div className="post-item__site">VC.RU</div>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="post-item">
                        <a href="#">
                            <div className="post-item__img">
                                <img src="./images/posts/post-1.png" alt="" />
                            </div>
                            <div className="post-item-content">
                                <div className="post-item__title">Текст в несколько строчек в несколько строчек </div>
                                <div className="post-item__desc">Текст в несколько строчек в несколько строчек </div>
                                <div className="post-item-bottom">
                                    <div className="post-item__date">9 марта 2023</div>
                                    <div className="post-item__site">VC.RU</div>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="post-item">
                        <a href="#">
                            <div className="post-item__img">
                                <img src="./images/posts/post-1.png" alt="" />
                            </div>
                            <div className="post-item-content">
                                <div className="post-item__title">Текст в несколько строчек в несколько строчек </div>
                                <div className="post-item__desc">Текст в несколько строчек в несколько строчек </div>
                                <div className="post-item-bottom">
                                    <div className="post-item__date">9 марта 2023</div>
                                    <div className="post-item__site">VC.RU</div>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="post-item">
                        <a href="#">
                            <div className="post-item__img">
                                <img src="./images/posts/post-1.png" alt="" />
                            </div>
                            <div className="post-item-content">
                                <div className="post-item__title">Текст в несколько строчек в несколько строчек </div>
                                <div className="post-item__desc">Текст в несколько строчек в несколько строчек </div>
                                <div className="post-item-bottom">
                                    <div className="post-item__date">9 марта 2023</div>
                                    <div className="post-item__site">VC.RU</div>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="post-item">
                        <a href="#">
                            <div className="post-item__img">
                                <img src="./images/posts/post-1.png" alt="" />
                            </div>
                            <div className="post-item-content">
                                <div className="post-item__title">Текст в несколько строчек в несколько строчек </div>
                                <div className="post-item__desc">Текст в несколько строчек в несколько строчек </div>
                                <div className="post-item-bottom">
                                    <div className="post-item__date">9 марта 2023</div>
                                    <div className="post-item__site">VC.RU</div>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
};

export default Posts;