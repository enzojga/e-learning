import { reviewsList } from '../../../../constants/ReviewsConstants/Reviews.constant';
import AboutUsCard from './AboutUsCard/AboutUsCard';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import RoundButton from '../../../common/RoundButton/RoundButton';
import 'swiper/css';
import 'swiper/css/pagination';
import { SwiperButtonContainerNext, SwiperButtonContainerPrev, SwiperContainer } from './AboutUsSwiper.interface';

const AboutUsSwiper = () => {
  return (
    <SwiperContainer>
      <Swiper
        loop={true}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}  
      >
        {reviewsList.map(review => (
          <SwiperSlide style={{width: '100%'}}>
            <AboutUsCard name={review.name} description={review.description}/>
          </SwiperSlide>
        ))}

        <SwiperButtonContainerNext className='swiper-button-next'>
          <RoundButton></RoundButton>
        </SwiperButtonContainerNext>

        <SwiperButtonContainerPrev className='swiper-button-prev'>
          <RoundButton rotate={180}></RoundButton>
        </SwiperButtonContainerPrev>
      </Swiper>
    </SwiperContainer>
  )
}

export default AboutUsSwiper;
