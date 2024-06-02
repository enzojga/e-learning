import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from '../../../common/Card/Card';
import { SwiperButtonContainer, SwiperContainer } from './Swiper.styled';
import { Navigation } from 'swiper/modules';
import RoundButton from '../../../common/RoundButton/RoundButton';

const SwiperRows = () => {
  return (
    <SwiperContainer>
      <Swiper
        loop={true}
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={12}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}  
      >
        <SwiperSlide>
          <Card icon='illustration'/>
        </SwiperSlide>
        <SwiperSlide>
          <Card icon='uiUx'/>
        </SwiperSlide>
        <SwiperSlide>
          <Card icon='logo'/>
        </SwiperSlide>
        <SwiperSlide>
          <Card icon='uiUx'/>
        </SwiperSlide>
        <SwiperButtonContainer className='swiper-button-next'>
          <RoundButton></RoundButton>
        </SwiperButtonContainer>
      </Swiper>
    </SwiperContainer>
  );
};

export default SwiperRows;