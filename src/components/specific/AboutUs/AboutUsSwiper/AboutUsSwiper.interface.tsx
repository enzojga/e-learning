import styled from "styled-components";
import { FlexContainer } from "../../../../styles/Generics/Generics";
import { SwiperButtonContainer } from "../../Features/Swiper/Swiper.styled";

export const SwiperContainer = styled(FlexContainer)`
  width: 80vw;

  & > .swiper {
    .swiper-pagination-bullet {
      position: static;
      width: 12px;
      height: 12px;
      /* Inside Auto Layout */
      flex: none;
      order: 1;
      flex-grow: 0;
      margin: 0px 8px;
      border-radius: 8px;
      background: rgb(167, 167, 167);
      opacity: 0.4;
    }
    .swiper-pagination-bullet-active {
      position: static;
      width: 42px;
      height: 12px;
      flex: none;
      order: 0;
      flex-grow: 0;
      margin: 0px 8px;
      border-radius: 8px;
      opacity: 1;
      background: rgb(1, 254, 132);
    }
  }
`;

export const SwiperButtonContainerPrev = styled(SwiperButtonContainer)`
  left: 0;
  right: 100%;
  background: initial;
  width: 50px;
  @media (max-width: 1023px) {
    display: none;
  }
`;

export const SwiperButtonContainerNext = styled(SwiperButtonContainer)`
  width: 50px;
  background: initial;
  @media (max-width: 1023px) {
    display: none;
  }
`;
