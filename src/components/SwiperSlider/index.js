import React, { useRef, useState } from "react";
import { Paper } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import classes from "./swiper.module.css";
import { Autoplay, Navigation, Pagination } from "swiper";

const SwiperSlider = (props) => {
  const array = [
    "Slide 1",
    "Slide 2",
    "Slide 3",
    "Slide 4",
    "Slide 5",
    "Slide 6",
    "Slide 7",
    "Slide 8",
  ];

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <Swiper
        autoplay={{
          delay: props.duration * 1000 || 3000,
          disableOnInteraction: false,
        }}
        navigation
        modules={[Autoplay, Navigation, Pagination]}
        pagination={{ clickable: true }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className={classes.swiper}
      >
        {array.map((e) => (
          <SwiperSlide className={classes.swiperSlide} key={e}>
            {e}
          </SwiperSlide>
        ))}
        <div className={classes.autoplayProgress} slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};
export default SwiperSlider;
