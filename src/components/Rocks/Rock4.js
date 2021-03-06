import React from 'react';
import _ from 'lodash/fp';
import { svgLayer, cNameLine, cNameFill, cNameText } from '.';

const defaultStyle = {
  enableBackground: "new 0 0 1088.9 567.5",
  width: 140,
};

const Rock4 = ({ style = {}, text = 'CONTACT' }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    // viewBox="0 0 1044.9 521.4"
    viewBox="0 0 1258.3 521.2"
    style={_.merge(defaultStyle, style)}
  >
    <g id={svgLayer}>
      <g id="Layer_1">
        <title>ROCK 4 CONTACT</title>
        <g>
          <path
            className={cNameLine}
            d="M191.9,38.6c38.2,5.3,86.8,13.2,135.7,18.3c26.2,2.7,52.9,0.9,79.3-0.2c6.8-0.3,13.2-6,20.2-7.7
            c20.6-5.1,41.2-12,62.1-13.3c21.9-1.3,44.5,1.6,66.3,5.5c43.9,7.9,85-2.1,125.8-15.9c19.9-6.7,39.3-15.9,59.7-19.8
            c40.3-7.6,81.6-7.8,121.2,1.8c19.3,4.7,37.4,18.5,53.7,31.1c43.2,33.5,79.3,74.1,111.6,118.1c11.5,15.7,18.4,33.3,17.2,52.7
            c-2.5,40.1-3.3,80.6-9.8,120.2c-10.7,65.7-54.4,105.3-113.5,130c-13,5.5-25.9,11.9-39.4,15.3c-23.9,6.1-48.4,10-72.5,15.4
            c-35.1,7.9-69.8,17.5-105,24.3c-37.5,7.2-75.3,8.5-113.6,5.1c-30.5-2.7-59.9-9.9-89.8-15.3c-14.8-2.7-29.5-6.9-44.3-7.4
            c-29-1-58-0.3-87,0.4c-35.9,0.9-71.8,4.3-107.6,2.9c-19.6-0.8-39.7-7.3-58.2-14.7c-37-14.7-75.9-24.3-115.5-28.6
            c-40.8-4.5-74-39-84.4-84.5c-6.4-27.8-5.5-54.9,6.4-81.6c10.6-23.9,13.2-49,10.2-75.3c-3.4-29.2-6.9-58.9-5.3-88.1
            c1.2-22.2,10.3-42.5,31.3-57.4C87.6,40.6,133.7,38.4,191.9,38.6z M548.7,500.2l3.8-1.6V459l3.6-1.1c1.7,4.2,4.1,8.2,4.8,12.5
            c1.1,7.2,1,14.5,1.6,21.8c0.7,8.5,4.9,12.1,11.8,10.3c2.1-7.5,3.8-13.8,5.5-20l5,0.8l3.8,16.8l10.7-9c1.9,4.5,3.8,9.1,6.2,14.7
            c5.3-8.3,11.3-14.5,15.8-1.9c5.3,0,10.1-0.4,14.7,0.1c6.3,0.7,12.7,3.3,18.9,3c38.2-2.2,74.9-11.6,111.7-21.3
            c24.3-6.4,50.3-6.5,74.4-13.5c33.6-9.8,67.5-20.6,98.6-36.3c41-20.7,73.2-52.8,80.7-100.5c6.6-42.1,8.4-85,11.5-127.5
            c1.3-17.3-5.1-32.8-16.1-46.2c-18.7-22.8-37.5-45.6-56.3-68.3c-2.7-3.2-5.9-6.4-9.5-8.2c-10.7-5.4-21.8-9.8-32.5-15
            c-8.8-4.2-16.9-9.9-26-13.4c-11.9-4.6-24.6-7.3-36.6-11.8c-3.1-1.2-5-5.8-7.4-8.8c3.7-0.5,7.7-2.2,11-1.4
            c14.5,3.5,28.8,7.7,43.3,11.6l1.6-3.9c-12.6-6.7-24.6-14.8-37.8-19.9c-30.8-12-63.4-9.1-95.3-8.2c-16.2,0.4-32.6,5.9-48.5,10.6
            c-27.5,8-54.3,18.3-81.9,25.5c-29.8,7.8-60.2,6.1-90.5,1.4c-41.4-6.5-82.6-8.9-121.7,11.4c-6.3,3.3-13.6,6.1-20.5,6.4
            c-25.1,1-50.5,2.8-75.5,0.6c-55.8-4.9-111.3-13.5-167.1-17.6C128.1,49.8,92,55.9,61.1,76.9c-15.6,10.6-27.5,26-34.9,45.6
            c25.1,1.9,2.8,14,5.9,21l11.2-7.6l2.9,2.2c-6.3,11.4-12.7,22.8-19,34.2l2.8,1.7l19-17.9l3,3.1c-5.5,15-21.4,25.8-20.7,46
            c11.5-7.4,12.8-22.4,29.3-25.8l-28.2,46.5l3.3,1.7l18.5-9c1.6,2.1,3.2,4.3,4.9,6.5c-5.1,3.6-10.8,6.6-15.1,11
            c-4,4.1-7,9.1-8.9,14.5c-5.1,15.4-8.2,31.5-14,46.6c-7.9,20.7-9.3,41.5-5.6,63.1c8.2,47.8,44.2,83.2,95.5,86.2
            c25.6,1.5,52,8.4,75.8,18.3c50.6,21,101.8,24.9,155.9,20.6c42.2-3.3,85.2-10.4,127.9-0.5c8,1.8,16.8,0.3,26.5,0.3
            c0.1-0.3,1.4-3.8,4-10.9c4,5.5,6.1,8.7,8.5,11.7c2.2,2.7,4.7,5,6.6,7.1c1.8-7.3,3-12,4.2-16.8l11.9,10.5c-0.7,0.8,0,0.3,0.3-0.4
            c1.5-3.9,2.8-7.8,4.2-11.7c1.8,3.7,3.7,7.3,5.4,11C544.3,490.4,546.5,495.3,548.7,500.2z"
          />
          <path
            className={cNameLine}
            d="M78.6,414.2c11.4,1.8,21.6,6,30.6,4.2c8.4-1.7,15.6-9.7,23.3-14.9l3,3.8c-3,4.4-6,8.9-9.3,13.9
            c13.1,8.7,15.5-13.9,28.3-8c-1.3,3.4-2.8,7.3-5.2,13.7c5.7-1.2,11.3-1.4,15.9-3.6c6.4-3.2,10.6-4.6,12.7,1.7
            c4,2.5,7.8,5.6,12.1,7.5c4,1.8,9.6,4.5,12.7,3.1c7.3-3.3,11.5-4.8,12,5.6c0.1,1.7,3.8,4.2,6.2,4.7c16.8,3.7,33.6,6.8,50.4,10.3
            c8.7,1.9,17.3,5.7,26,6.1c8.6,0.4,17.3-2.3,29.7-4.3c-3.2,5.6-4.4,10.3-6.6,10.8c-9.5,2.1-19.6,5.2-28.9,4
            c-21.5-3-42.9-7.3-63.9-12.8c-18.8-4.8-36.6-13.3-55.5-17.6c-23.3-5.2-47.1-8.2-70.8-11.3C90.9,429.6,84.4,424.6,78.6,414.2z"
          />
          <path
            className={cNameLine}
            d="M827.9,456c3.2-1.9,6.2-4.5,9.6-5.7c12-4.1,24.6-6.8,36.2-11.8c19.2-8.2,37.9-17.6,56.8-26.6
            c2.7-1.3,6.3-2.2,7.7-4.4c8.8-14,23-20.5,36.3-28.8c6.5-4,9.4-14.3,13.2-22.1c1.7-3.7,0.7-8.7,2.3-12.5c1.2-3,4.5-5,6.8-7.5
            c1.2,3.2,3.3,6.4,3.3,9.5c-0.1,13.9-1.1,30.6-12.9,37.3c-24.6,14-41.5,38.3-69.2,48c-23.7,8.2-46.4,19.1-69.9,28.1
            c-5.6,2.2-12.3,1.7-18.5,2.4L827.9,456z"
          />
          <path
            className={cNameLine}
            d="M73.3,119.2c0.7-5.7,0.5-11.8,2.3-17.1c7-20,23.5-27.9,44.3-25.5c14.1,1.6,28.7-0.8,43.1-1.5
            c5.5-0.2,11.2-0.9,16.6-0.3c2.1,0.2,3.9,3.6,5.9,5.5c-2,1.9-4.2,5.6-6.1,5.5c-21.6-1-42.6,8.8-64.6,2.2
            c-11.7-3.5-23.4,5.9-29.2,19.8c-1.9,4.5-4.6,8.7-6.9,13L73.3,119.2z"
          />
          <path
            className={cNameLine}
            d="M976.9,225.6c2,1,3.6,1.2,4.2,2.1c9.6,15,2.2,50.4-12.6,60.6c-10,6.9-22.9,10.9-24,26.1
            c-0.1,1.3-4.3,3.5-6,3.1s-4-3.5-4.2-5.6c-1.3-11.1,4.1-20.4,13.6-23.9c24.7-9.1,28.4-28,26.5-50.4c-0.1-2.6,0-5.1,0.5-7.6
            C974.9,228.8,975.8,227.8,976.9,225.6z"
          />
          <path
            className={cNameLine}
            d="M993.1,243c13,9.8,7.8,20.2,6.7,28.9l10-2.2c-0.2,3.5,0.7,7.6-0.8,10.3c-3.2,5.6-7.7,10.5-11.7,15.6l-2.9-1.4
            c-0.2-3.4-0.4-6.8-0.6-9.8c-6.3,5.1-12.2,10.7-19,15c-2.2,1.4-6.6-0.5-10-0.9c1.7-2.4,2.9-5.6,5.2-7.1c13.2-8.9,21.9-20,20.5-37
            C990.2,251.4,991.8,248.2,993.1,243z"
          />
          <path
            className={cNameLine}
            d="M878.1,76.3c-9.2-3.5-18.3-7.9-27.8-10.2c-13-3.2-26.4-4.7-39.6-7.3c-3-0.6-5.7-2.4-8.6-3.6
            c2.3-2.7,4.1-6.7,6.9-7.7c4.2-1.5,9.6-2,13.8-0.8c15.5,4.6,30.8,9.8,45.8,15.6c4.6,1.8,8,6.6,12,10L878.1,76.3z"
          />
          <path
            className={cNameLine}
            d="M76,302.8c1.2,3.5,3.7,7,3.4,10.4c-0.8,11.6-0.2,22,11.8,28.5c2.1,1.1,2.4,5.4,3.6,8.2
            c-3.3,0.5-7.5,2.5-9.8,1.2C70.9,343.2,61.1,327.6,76,302.8z"
          />
          <path
            className={cNameLine}
            d="M452.2,76.1l14.1-3.4c-0.5,1.4-1,2.7-1.6,4.1c5.7,4.4,11.4,8.8,17,13.3c1.9,1.4,3.5,3,4.8,5
            c0.3,0.5-1.7,3.5-2.6,3.5c-2.2-0.2-4.4-0.8-6.3-1.9c-6.2-3.1-12.3-6.4-20.4-10.6c-14.3,4.2-14.7,4.1-13.1-8.1L452.2,76.1z"
          />
          <path
            className={cNameLine}
            d="M452.2,76.1l-8,1.8l-19.3,10.7c0.5-5.3-0.4-9.7,1.3-12c6.7-8.6,27.7-14.3,38.2-9.9L452.2,76.1z"
          />
        </g>
      </g>
      <g id="Layer_2">
        <path
          className={cNameFill}
          d="M548.7,500.2c-2.2-4.9-4.4-9.9-6.7-14.7c-1.7-3.7-3.6-7.3-5.4-11c-1.4,3.9-2.7,7.8-4.2,11.7
          c-0.3,0.7-1,1.2-0.3,0.4l-11.9-10.5c-1.2,4.7-2.4,9.5-4.2,16.8c-1.9-2.1-4.4-4.4-6.6-7.1c-2.4-3-4.6-6.2-8.5-11.7
          c-2.6,7.2-3.9,10.6-4,10.9c-9.8,0-18.5,1.6-26.5-0.3c-42.7-9.9-85.7-2.8-127.9,0.5c-54.1,4.3-105.2,0.4-155.8-20.7
          c-23.8-9.9-50.2-16.8-75.8-18.3c-51.3-3-87.3-38.4-95.5-86.2c-3.7-21.6-2.3-42.4,5.6-63.1c5.8-15.1,8.9-31.2,14-46.6
          c1.9-5.4,4.9-10.4,8.9-14.5c4.2-4.4,10-7.4,15.1-11c-1.6-2.2-3.2-4.3-4.9-6.5l-18.5,9l-3.3-1.7l28.2-46.5
          c-16.5,3.4-17.8,18.4-29.3,25.8c-0.7-20.2,15.2-30.9,20.7-46l-3-3.1l-19,17.9l-2.8-1.7c6.3-11.4,12.7-22.8,19-34.2l-2.9-2.2
          l-11.2,7.6c-3.1-6.9,19.2-19.1-5.9-21c7.4-19.5,19.2-35,34.9-45.7c30.9-21,67-27.1,103.2-24.4c55.8,4.3,111.3,12.9,167.1,17.7
          c25,2.2,50.3,0.4,75.5-0.6c7-0.3,14.2-3.1,20.5-6.4c39.1-20.2,80.3-17.8,121.7-11.4c30.4,4.8,60.8,6.4,90.5-1.4
          c27.7-7.2,54.5-17.5,81.9-25.5c15.9-4.6,32.2-10.1,48.5-10.6c31.9-0.9,64.6-3.8,95.3,8.2c13.2,5.2,25.2,13.2,37.8,19.9l-1.6,3.9
          c-14.4-3.9-28.7-8.2-43.3-11.6c-3.4-0.8-7.3,0.9-11,1.4c2.5,3,4.3,7.6,7.4,8.8c12,4.5,24.7,7.2,36.6,11.8c9,3.5,17.2,9.2,26,13.4
          c10.7,5.2,21.8,9.7,32.5,15c3.6,1.8,6.8,5,9.5,8.2c18.9,22.7,37.7,45.4,56.3,68.3c11,13.4,17.4,28.9,16.1,46.2
          c-3.2,42.6-5,85.4-11.5,127.5c-7.4,47.7-39.7,79.8-80.7,100.5c-31.1,15.7-65,26.5-98.5,36.3c-24,7-50.1,7.1-74.4,13.5
          c-36.8,9.7-73.6,19.1-111.7,21.3c-6.2,0.3-12.6-2.3-18.9-3c-4.6-0.5-9.4-0.1-14.7-0.1c-4.5-12.7-10.5-6.4-15.8,1.9
          c-2.4-5.6-4.3-10.2-6.2-14.7l-10.7,9l-3.8-16.8l-5-0.8c-1.7,6.2-3.4,12.4-5.5,20c-6.9,1.8-11.1-1.8-11.8-10.3
          c-0.6-7.3-0.5-14.6-1.6-21.8c-0.7-4.3-3.1-8.3-4.8-12.5l-3.6,1.1v39.7L548.7,500.2z M452.2,76.1l12.3-9.3
          c-10.6-4.4-31.5,1.3-38.2,9.9c-1.8,2.3-0.8,6.7-1.3,12L444.2,78c-1.6,12.2-1.2,12.3,13.1,8.1c8.1,4.2,14.2,7.5,20.4,10.6
          c1.9,1.1,4.1,1.7,6.3,1.9c0.9,0,2.9-3,2.6-3.5c-1.3-1.9-3-3.6-4.8-5c-5.6-4.5-11.4-8.9-17-13.3c0.5-1.4,1-2.7,1.6-4.1L452.2,76.1z
          M78.6,414.1c5.8,10.4,12.3,15.5,22.7,16.8c23.7,3.2,47.6,6.1,70.8,11.3c18.9,4.2,36.7,12.7,55.5,17.6c21,5.5,42.4,9.8,63.9,12.8
          c9.3,1.3,19.4-1.8,28.9-4c2.1-0.5,3.3-5.2,6.6-10.8c-12.4,1.9-21.1,4.7-29.7,4.3c-8.8-0.4-17.3-4.2-26-6.1
          c-16.8-3.6-33.7-6.7-50.4-10.3c-2.4-0.5-6.1-3-6.2-4.7c-0.5-10.4-4.7-8.9-12-5.6c-3.2,1.4-8.7-1.3-12.7-3.1
          c-4.3-1.9-8.1-4.9-12.1-7.5c-2-6.3-6.2-4.8-12.7-1.7c-4.6,2.3-10.2,2.4-15.9,3.6c2.4-6.4,3.9-10.3,5.2-13.7
          c-12.8-5.9-15.2,16.8-28.3,8c3.4-5,6.4-9.5,9.3-13.9l-3-3.8c-7.7,5.2-14.9,13.2-23.3,14.9C100.2,420.1,90.1,416,78.6,414.1
          L78.6,414.1z M827.9,456l1.7,5.9c6.2-0.7,12.9-0.2,18.5-2.4c23.4-9,46.2-19.8,69.9-28.1c27.7-9.6,44.5-34,69.2-48
          c11.8-6.7,12.8-23.4,12.9-37.3c0-3.2-2.1-6.3-3.3-9.5c-2.3,2.5-5.6,4.6-6.8,7.5c-1.6,3.8-0.6,8.8-2.3,12.5
          c-3.7,7.8-6.7,18.1-13.2,22.1c-13.4,8.3-27.5,14.8-36.3,28.8c-1.4,2.2-5,3.1-7.7,4.4c-18.9,9-37.6,18.4-56.8,26.6
          c-11.6,4.9-24.2,7.7-36.2,11.8C834.1,451.6,831.1,454.1,827.9,456L827.9,456z M73.3,119.2l5.4,1.7c2.3-4.3,5-8.5,6.9-13
          c5.7-13.9,17.5-23.3,29.2-19.8c22,6.5,43-3.3,64.6-2.2c1.9,0.1,4.1-3.6,6.1-5.5c-1.9-1.9-3.7-5.3-5.9-5.5
          c-5.5-0.6-11.1,0.1-16.6,0.3c-14.4,0.6-29,3.1-43.1,1.5c-20.8-2.4-37.3,5.5-44.3,25.5C73.7,107.4,74,113.6,73.3,119.2z
          M976.9,225.6c-1.1,2.1-2,3.2-2.1,4.4c-0.5,2.5-0.6,5.1-0.5,7.6c1.9,22.4-1.8,41.2-26.5,50.4c-9.5,3.5-14.9,12.7-13.6,23.9
          c0.3,2.1,2.4,5.1,4.2,5.6s6-1.8,6-3.1c1.1-15.2,14-19.3,24-26.1c14.8-10.2,22.2-45.6,12.6-60.6
          C980.5,226.8,978.9,226.6,976.9,225.6z M993.1,243c-1.3,5.3-2.9,8.4-2.6,11.5c1.3,17-7.3,28.1-20.5,37c-2.3,1.5-3.5,4.7-5.2,7.1
          c3.4,0.4,7.8,2.3,10,0.9c6.8-4.3,12.7-9.9,19-15c0.2,3,0.4,6.4,0.6,9.8l2.9,1.4c4-5.2,8.5-10,11.7-15.6c1.6-2.7,0.6-6.8,0.8-10.3
          l-10,2.2C1000.9,263.1,1006.1,252.8,993.1,243z M878.1,76.3l2.5-4c-4-3.4-7.4-8.2-12-10c-15-5.9-30.4-11-45.8-15.6
          c-4.2-1.2-9.5-0.7-13.8,0.8c-2.8,1-4.7,5-6.9,7.7c2.9,1.2,5.6,3.1,8.6,3.6c13.2,2.5,26.6,4.1,39.6,7.3
          C859.8,68.4,868.9,72.8,878.1,76.3L878.1,76.3z M76,302.8c-15,24.8-5.1,40.5,9,48.3c2.3,1.3,6.5-0.7,9.8-1.2
          c-1.2-2.8-1.5-7.1-3.6-8.2c-12-6.4-12.6-16.8-11.8-28.5C79.7,309.8,77.3,306.2,76,302.8z"
        />
      </g>
      <g id="Layer_3">
        <text
          transform="matrix(1 0 0 1 130 300.4999)"
          className={cNameText}
        >
          {text}
        </text>
      </g>
    </g>
  </svg>
);

export default Rock4;
