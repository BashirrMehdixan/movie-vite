// Swiper
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import SectionTitle from "/src/components/SectionTitle";
import {CategoryComponent} from "/src/components/Components";

const HomeCategory = () => {
    return (
        <>
            <section className={'relative py-32'}>
                <div className={'container'}>
                    <div className="flex items-center justify-between">
                        <div className="w-3/4">
                            <SectionTitle
                                heading={'Explore our wide variety of categories'}
                                inner={'Whether you\'re looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new'}
                            />
                        </div>
                        <div className="w-1/4">

                        </div>
                    </div>

                    <div className="home-categories">
                        <Swiper
                            navigation={
                                {
                                    prevEl: '.swiper-banner-prev',
                                    nextEl: '.swiper-banner-next',
                                }}
                            modules={[Navigation, Autoplay]}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false
                            }}
                            className="w-full h-full mySwiper">
                            <SwiperSlide className={'flex items-center justify-center'}>
                                <CategoryComponent/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeCategory;