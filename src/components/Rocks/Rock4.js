import React, { Component } from 'react';
import classNames from 'classnames';

const cNameLine = 'rock-line';
const cNameFill = 'rock-fill';

class Rock4 extends Component {
  constructor() {
    super();

    this.state = {
      hovered: false,
    }

    this.handleMousePosition = this.handleMousePosition.bind(this);
  }

  handleMousePosition() {
    this.setState({ hovered: !this.state.hovered })
  }

  render () {
    const { state, props, handleMousePosition } = this;
    const { hovered } = state;
    const { style, handleClick } = props;

    return (
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1119.43 508.5"
        style={style}
        onMouseEnter={handleMousePosition}
        onMouseLeave={handleMousePosition}
        onClick={handleClick}
      >
        <title>ROCK 4</title>
        <rect
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          x="797.54"
          y="23.06"
          width="100"
          height="37.59"
        />
        <rect
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          x="794.04"
          y="23.06"
          width="100"
          height="37.59"
        />
        <rect
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          x="354.54"
          y="18.56"
          width="100"
          height="37.59"
        />
        <rect
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          x="535.02"
          y="404.25"
          width="141.38"
          height="76.38"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M557.6,508.5c-93.57-5.15-171.35-11.09-247.73-26.91-33.48-6.94-66.16-17.41-99.76-23.66-27.48-5.1-55.82-6-83.71-9.34-25.68-3.08-43-19-56.92-37.15-12.31-16.06-15.72-35-13.39-55.45,3-26-1.44-49.14-28-66.76C3.77,273.14-13.51,230,12.24,200.84,35,175.06,41.12,143.84,47,112.71,51.92,86.93,68.65,69,88.28,53.4c39.49-31.31,86.24-40,137.08-35.37,38.62,3.55,77.3.61,114.94-7.62,64.24-14.06,128.14-12.54,193-3.36,40.53,5.73,81.93,6.23,123,8.7,21.24,1.27,42.61,3,63.81,2.22,30.31-1.19,60.47-5.46,90.77-6.78,41.58-1.8,83.34-4,124.82-2.11,18.55.85,36.86,10.65,54.81,17.48,19.23,7.32,38.1,15.53,56.76,24.06,32,14.65,48.86,41.41,59.59,71.17,12.49,34.65,16.87,70.76,5.34,106.46-13,40.27-17.42,81.34-18,123.05-.26,18.06-8.14,33.1-18.58,48.16C1047,440.73,1003.91,458,955.21,468.64c-34.57,7.53-69.09,6-103.91,4.87-57.21-1.82-113.64,1.35-169.81,14.53C636,498.72,588.87,503.5,557.6,508.5ZM34.53,197.24C9.3,219.87,6.17,242.73,27,267.45c22,26.11,52.82,41.44,83.77,56.45,11.9,5.77,22.67,13.55,34.18,20.06,15.71,8.89,30.57,20.81,47.65,25.5,45.14,12.37,91.29,21.48,137,32.07,8.06,1.87,15.89,4.62,23.83,7l-1.35,5.68-69.49-7.45c13.79,9,13.79,9,8.2,17.52l-37.45-9.15,11.26,9.73c-.73,2-1.47,4.07-2.2,6.11-64.75-14.39-133-17.6-191.14-58,2.07,9.69,4.56,21.21,11.07,23.76,27,10.57,54,22.2,84.5,21.65,3.58-.06,7.22,3.45,10.84,5.3-4,1.71-7.78,4.54-11.88,4.93-23.69,2.25-46.77.18-68.35-10.8,11.88,10.93,25.11,18,42.08,19.5,25.69,2.28,51.48,4.88,76.78,9.45,25.72,4.65,50.65,13.17,76.39,17.67,52.11,9.12,104.38,17.74,156.88,24.46,31.83,4.08,64.48,7.43,96.32,5.33,42.76-2.82,85.6-9.14,127.51-17.75,58-11.93,116.27-18.25,175.47-15.51,43.14,2,86.05,4,127.69-9.77,11.58-3.84,23-7.95,34.57-11.93-.34-1-.69-2-1-3.05-7,1.08-14.18,1.73-21.06,3.38-6.68,1.61-13.81,6.53-16.87-6.4,8.27-2.25,16.19-5.09,24.4-6.47,13.48-2.27,29.32-.19,40.18-6.22,12.8-7.11,21.36-20.89,33.43-33.53-16.69,6.61-29.41,14.24-43.15,16.58-41,7-82.28,12-123.52,17.28-3.51.46-7.52-2.41-11.29-3.74,3-2.65,5.58-7.15,8.91-7.65,28.14-4.27,56.29-9.59,84.65-11.11,36.52-2,68.22-11.71,92.67-37.94,2-2.21,2-6.17,3.17-10.45-12,2.78-20,19.46-32.91,5.69l35.28-23.48-23.66,3.61-1.53-4.1c4.14-2.73,8-7.16,12.49-7.84,11.52-1.74,11.66-8.92,13-17.23,3.55-22.58,6.68-45.37,12.69-67.44,9.13-33.55,12-66.58,0-99.86l-15.38-2.94L1093.41,124c-7.22-.73-12.77,1.55-18.57,2.68-2.39.46-5.33-1.57-8-2.46,1-2.16,1.44-5.15,3.22-6.32,5-3.28,10.46-5.81,15.75-8.63-.48-1.54-1-3.08-1.43-4.62l-38,11.4q-1.34-2.46-2.65-4.94l31.46-18.45-6.68-8.3L1051,86.77c3.08-6.37,4.77-9.89,6.57-13.6-36-23.75-75.56-42.06-116.47-49.42S856.46,22,814,23.75c-36.1,1.49-72,6.14-108.1,8.34-15.77,1-31.75-.24-47.58-1.26q-60.29-3.93-120.49-8.62c-39.25-3-78.57-9.74-117.68-8.69-36.83,1-73.26,11.38-110.16,15-31.39,3.11-63.33,4.6-94.8,3-37.12-1.86-71.9,3-102.61,22.37C84.27,71.75,61,93.94,58.2,128.89c-.78,9.85-8.32,20.45,7.75,25.65.63.2.08,3.6.08,4.24L50.17,162.7c3.25,4.24,5.93,9,9.88,12.59,4.48,4,10.08,7,15.2,10.43C62,199,53.36,174.45,39,183.11l57.19,33.32C68.75,225.76,55.51,200.76,34.53,197.24ZM165,393.41,75.56,345.57l-4.64,4.37c2.18,3.39,3.53,7.9,6.71,9.94,6.86,4.42,15.43,6.63,21.91,11.4C118.64,385.35,140.75,391.63,165,393.41Zm-26.76-31.79C122.7,338,93.52,334.7,70.89,319.14c-1.09,10.15,1.29,15.3,11.06,15.65,3,.1,6,1.64,8.8,3,15.87,7.87,31.65,15.87,47.46,23.83Z"
          transform="translate(0.52 0)"
        />
        <path
          className={classNames(cNameFill, { [`${cNameFill}__hovered`]: hovered })}
          d="M34.79,197.14c21,3.52,34.21,28.52,61.7,19.28L39.33,183.1c14.31-8.66,22.92,15.91,36.19,2.61-5.12-3.46-10.72-6.39-15.2-10.46-3.94-3.56-6.63-8.35-9.87-12.59l15.85-3.92c0-.64.55-4-.08-4.24-16.06-5.2-8.52-15.8-7.74-25.65,2.76-35,26.05-57.17,54.39-75,30.7-19.35,65.48-24.23,102.58-22.37,31.46,1.57,63.38.08,94.76-3,36.89-3.65,73.31-14,110.13-15,39.09-1,78.4,5.66,117.64,8.69q60.18,4.63,120.38,8.62c15.81,1,31.79,2.22,47.55,1.26,36.07-2.2,72-6.85,108.07-8.34,42.41-1.75,86.19-7.31,127,0s80.43,25.67,116.44,49.42c-1.8,3.71-3.5,7.23-6.58,13.6l17.47-2.45,6.68,8.3L1043.58,111l2.65,4.94,38-11.4c.47,1.54,1,3.08,1.42,4.62-5.28,2.82-10.8,5.35-15.74,8.63-1.78,1.17-2.18,4.16-3.21,6.32,2.68.89,5.62,2.92,8,2.46,5.8-1.13,11.34-3.41,18.56-2.68l-11.7,12.33,15.32,2.87c12,33.28,9.1,66.31,0,99.86-6,22.07-9.14,44.86-12.69,67.44-1.3,8.31-1.44,15.49-13,17.23-4.5.68-8.34,5.11-12.49,7.84l1.53,4.1,23.65-3.61-35.27,23.48c13,13.77,20.89-2.91,32.91-5.69-1.22,4.28-1.12,8.24-3.18,10.45-24.44,26.23-56.12,36-92.63,37.94-28.35,1.52-56.49,6.84-84.62,11.11-3.33.5-6,5-8.91,7.65,3.77,1.33,7.77,4.2,11.29,3.74,41.23-5.32,82.54-10.32,123.47-17.28,13.74-2.34,26.45-10,43.14-16.58-12.06,12.64-20.62,26.42-33.42,33.53-10.85,6-26.69,3.95-40.17,6.22-8.2,1.38-16.12,4.22-24.38,6.47,3,12.93,10.18,8,16.86,6.4,6.87-1.65,14-2.3,21-3.38.35,1,.7,2,1,3-11.52,4-23,8.09-34.56,11.93-41.63,13.78-84.52,11.77-127.65,9.77-59.17-2.74-117.4,3.58-175.4,15.51a937.85,937.85,0,0,1-127.31,17.79c-31.83,2.1-64.46-1.25-96.28-5.33C397.28,482,345,473.42,293,464.3c-25.73-4.5-50.65-13-76.37-17.67-25.29-4.57-51.07-7.17-76.75-9.45-17-1.51-30.2-8.57-42.07-19.5,21.57,11,44.65,13.05,68.33,10.8,4.09-.39,7.92-3.22,11.87-4.93-3.61-1.85-7.26-5.36-10.83-5.3-30.47.55-57.53-11.08-84.47-21.65-6.51-2.55-9-14.07-11.07-23.76,58.17,40.39,126.35,43.6,191.07,58l2.21-6.11L253.61,415,291,424.15c5.59-8.48,5.59-8.48-8.19-17.52l69.46,7.45,1.35-5.68c-7.94-2.34-15.76-5.09-23.82-7-45.69-10.59-91.83-19.7-137-32.07-17.08-4.69-31.93-16.61-47.63-25.5-11.51-6.51-22.27-14.29-34.17-20.06-30.94-15-61.71-30.34-83.74-56.45C6.45,242.63,9.57,219.77,34.79,197.14ZM643.36,442.63c5.51-.3,8.6.26,10.86-.76,4.27-1.94,8.08-4.8,12.08-7.27-4-1.82-7.72-4.46-11.89-5.27-7.9-1.52-16.09-1.7-24.06-2.94-24.38-3.8-48.44-11.54-73.55-5.29-3.66.91-6.71,4-10,6.1,3.87,1.6,7.63,4.26,11.61,4.59,12.4,1,25,.27,37.29,1.94C612.57,436,629.24,439.93,643.36,442.63ZM385.19,27.55c-5.05,0-7.68-.7-9.45.16-3.16,1.53-5.81,4-8.67,6.08,3,2,5.88,5.36,9,5.54,6.64.37,13.42-.75,20.09-1.58,12.07-1.52,24.15-3,36.14-5,5-.83,9.72-2.88,14.57-4.37-5.1-2.41-10-5.42-15.36-7-3.15-.92-7.08.35-10.63.86C408.05,24.1,395.25,26.05,385.19,27.55ZM598.41,455l-7.14,11.7c4.9.21,12.52,2.33,14.17.27a37.16,37.16,0,0,0,7.76-19c.15-1.63-10.21-5-16-6-4.63-.81-9.88.25-14.56,1.47-2.48.65-4.33,3.4-6.47,5.21,2.57,1.87,4.88,4.74,7.75,5.38C588.81,455.12,594.05,454.8,598.41,455ZM838.26,35.31l1,4.72c7.85-.42,15.73-.64,23.54-1.43,1.71-.17,4.28-2.2,4.48-3.63s-1.68-4.57-3-4.79C854.69,28.65,845.35,28.51,838.26,35.31Z"
          transform="translate(0.52 0)"
        />
        <path
          className={classNames(cNameFill, { [`${cNameFill}__hovered`]: hovered })}
          d="M165.57,393.41c-24.23-1.78-46.32-8.05-65.44-22.13-6.42-4.77-15-7-21.9-11.4-3.21-2-4.54-6.55-6.71-9.94l4.63-4.37Q120.88,369.48,165.57,393.41Z"
          transform="translate(0.52 0)"
        />
        <path
          className={classNames(cNameFill, { [`${cNameFill}__hovered`]: hovered })}
          d="M138.67,361.62c-15.74-8-31.46-16-47.26-23.83-2.74-1.36-5.8-2.9-8.77-3-9.73-.35-12.1-5.5-11-15.65C94.17,334.7,123.22,338,138.67,361.62Z"
          transform="translate(0.52 0)"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M784,35.41c6.62-6.8,15.35-6.66,24.23-5.13,1.29.22,3.06,3.28,2.86,4.79s-2.59,3.46-4.19,3.63c-7.3.79-14.66,1-22,1.43Z"
          transform="translate(0.52 0)"
        />
      </svg>
    );
  }
}

export default Rock4;