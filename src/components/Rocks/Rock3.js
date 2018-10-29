import React, { Component } from 'react';
import classNames from 'classnames';

const cNameLine = 'rock-line';
const cNameFill = 'rock-fill';

class Rock3 extends Component {
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
        viewBox="0 0 1044.86 521.44"
        style={style}
        onMouseEnter={handleMousePosition}
        onMouseLeave={handleMousePosition}
        onClick={handleClick}
      >
        <title>ROCK 3</title>
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M335.39,224c38.17,5.28,86.78,13.25,135.69,18.28,26.17,2.68,52.89.85,79.31-.16,6.81-.26,13.22-6,20.18-7.71,20.59-5.07,41.21-12,62.12-13.26,21.93-1.29,44.5,1.57,66.28,5.47,43.88,7.86,85-2.1,125.85-15.85,19.89-6.69,39.29-15.88,59.7-19.75,40.26-7.65,81.59-7.76,121.23,1.81,19.33,4.66,37.37,18.47,53.7,31.1C1102.68,257.38,1138.78,298,1171,342c11.47,15.66,18.41,33.28,17.22,52.72-2.46,40.12-3.32,80.61-9.77,120.15-10.72,65.7-54.39,105.27-113.51,130-13,5.45-25.87,11.88-39.43,15.35-23.93,6.13-48.43,10-72.54,15.41-35.06,7.91-69.78,17.49-105,24.3-37.45,7.24-75.31,8.53-113.6,5.1-30.46-2.73-59.89-9.92-89.75-15.33-14.76-2.67-29.49-6.91-44.34-7.43-29-1-58-.28-87,.42-35.89.86-71.84,4.32-107.61,2.91-19.63-.78-39.73-7.33-58.25-14.71a439.94,439.94,0,0,0-115.5-28.58c-40.76-4.5-74-39-84.42-84.53-6.37-27.85-5.48-54.9,6.38-81.63,10.6-23.87,13.25-49,10.17-75.34-3.43-29.24-6.86-58.93-5.31-88.15,1.17-22.24,10.28-42.49,31.28-57.44C231.17,226,277.18,223.83,335.39,224ZM692.21,685.67l3.79-1.56V644.44l3.58-1.08c1.65,4.16,4.08,8.2,4.76,12.51,1.13,7.17,1,14.51,1.63,21.77.71,8.48,4.94,12.1,11.85,10.28,2.08-7.55,3.78-13.76,5.49-20l5,.82,3.77,16.81,10.69-9c1.93,4.55,3.85,9.11,6.22,14.71,5.33-8.27,11.35-14.53,15.83-1.86,5.33,0,10.06-.4,14.69.1,6.34.69,12.68,3.31,18.9,3,38.16-2.19,74.9-11.6,111.74-21.3,24.3-6.39,50.33-6.46,74.38-13.51,33.56-9.83,67.47-20.6,98.55-36.29,41-20.71,73.25-52.82,80.68-100.48,6.57-42.1,8.37-85,11.53-127.54,1.28-17.32-5.08-32.79-16.09-46.21q-28.1-34.23-56.34-68.34c-2.66-3.19-5.87-6.39-9.51-8.22-10.65-5.36-21.75-9.83-32.47-15-8.77-4.25-16.94-9.93-26-13.44-11.92-4.62-24.59-7.34-36.59-11.8-3.13-1.17-5-5.77-7.44-8.79,3.7-.53,7.67-2.2,11-1.39,14.52,3.48,28.85,7.7,43.26,11.64l1.62-3.86c-12.57-6.73-24.63-14.76-37.81-19.93-30.75-12-63.42-9.09-95.34-8.23-16.25.43-32.58,5.94-48.46,10.58-27.45,8-54.28,18.29-81.93,25.5-29.78,7.78-60.18,6.15-90.54,1.38-41.4-6.49-82.58-8.9-121.68,11.35-6.3,3.27-13.6,6.09-20.55,6.35-25.14,1-50.51,2.76-75.48.57-55.8-4.89-111.3-13.5-167.14-17.63-36.17-2.67-72.3,3.44-103.2,24.39C189,272.9,177.1,288.35,169.73,307.9c25.1,1.87,2.76,14.05,5.88,21l11.16-7.57,2.87,2.25q-9.48,17.1-19,34.19l2.82,1.68,19-17.91,3,3.12c-5.47,15-21.45,25.78-20.71,46,11.47-7.4,12.76-22.41,29.3-25.76l-28.25,46.45,3.3,1.69,18.49-9c1.62,2.15,3.23,4.31,4.85,6.47-5.08,3.59-10.81,6.56-15.06,11a39.39,39.39,0,0,0-8.85,14.5c-5.05,15.41-8.18,31.5-14,46.6-7.93,20.73-9.34,41.5-5.63,63.1,8.2,47.77,44.21,83.23,95.54,86.18,25.6,1.47,52,8.36,75.79,18.26C380.88,671.11,432,675,486.12,670.71c42.21-3.34,85.17-10.38,127.87-.5,8,1.85,16.75.27,26.51.27.11-.32,1.36-3.75,4-10.92,4,5.45,6.1,8.67,8.53,11.66,2.17,2.65,4.66,5,6.59,7.09,1.84-7.27,3-12,4.23-16.76l11.86,10.54c-.65.79,0,.27.3-.42,1.45-3.88,2.79-7.81,4.17-11.72,1.81,3.66,3.68,7.28,5.4,11C687.84,675.81,690,680.76,692.21,685.67Z"
          transform="translate(-143.52 -185.45)"
        />
        <path
          className={classNames(cNameFill, { [`${cNameFill}__hovered`]: hovered })}
          d="M692.21,685.67c-2.21-4.91-4.37-9.86-6.65-14.74-1.72-3.7-3.59-7.32-5.4-11-1.38,3.91-2.72,7.84-4.17,11.72-.26.69-1,1.21-.3.42l-11.86-10.54c-1.19,4.74-2.39,9.49-4.23,16.76-1.93-2.06-4.42-4.44-6.59-7.09-2.43-3-4.57-6.21-8.53-11.66-2.62,7.17-3.87,10.6-4,10.92-9.76,0-18.53,1.58-26.51-.27-42.7-9.88-85.66-2.84-127.87.5-54.14,4.28-105.24.4-155.8-20.65-23.78-9.9-50.19-16.79-75.79-18.26-51.33-2.95-87.34-38.41-95.54-86.18-3.71-21.6-2.3-42.37,5.63-63.1,5.78-15.1,8.91-31.19,14-46.6a39.39,39.39,0,0,1,8.85-14.5c4.25-4.41,10-7.38,15.06-11-1.62-2.16-3.23-4.32-4.85-6.47l-18.49,9-3.3-1.69,28.25-46.45c-16.54,3.35-17.83,18.36-29.3,25.76-.74-20.19,15.24-30.93,20.71-46l-3-3.12-19,17.91-2.82-1.68q9.5-17.09,19-34.19l-2.87-2.25-11.16,7.57c-3.12-6.91,19.22-19.09-5.88-21,7.37-19.55,19.22-35,34.93-45.66,30.9-21,67-27.06,103.2-24.39C363.7,242,419.2,250.59,475,255.48c25,2.19,50.34.4,75.48-.57,6.95-.26,14.25-3.08,20.55-6.35,39.1-20.25,80.28-17.84,121.68-11.35,30.36,4.77,60.76,6.4,90.54-1.38,27.65-7.21,54.48-17.48,81.93-25.5,15.88-4.64,32.21-10.15,48.46-10.58,31.92-.86,64.59-3.82,95.34,8.23,13.18,5.17,25.24,13.2,37.81,19.93l-1.62,3.86c-14.41-3.94-28.74-8.16-43.26-11.64-3.38-.81-7.35.86-11,1.39,2.45,3,4.31,7.62,7.44,8.79,12,4.46,24.67,7.18,36.59,11.8,9,3.51,17.2,9.19,26,13.44,10.72,5.21,21.82,9.68,32.47,15,3.64,1.83,6.85,5,9.51,8.22q28.34,34,56.34,68.34c11,13.42,17.37,28.89,16.09,46.21-3.16,42.58-5,85.44-11.53,127.54-7.43,47.66-39.66,79.77-80.68,100.48-31.08,15.69-65,26.46-98.55,36.29-24,7.05-50.08,7.12-74.38,13.51-36.84,9.7-73.58,19.11-111.74,21.3-6.22.35-12.56-2.27-18.9-3-4.63-.5-9.36-.1-14.69-.1-4.48-12.67-10.5-6.41-15.83,1.86-2.37-5.6-4.29-10.16-6.22-14.71l-10.69,9-3.77-16.81-5-.82c-1.71,6.2-3.41,12.41-5.49,20-6.91,1.82-11.14-1.8-11.85-10.28-.6-7.26-.5-14.6-1.63-21.77-.68-4.31-3.11-8.35-4.76-12.51L696,644.44v39.67Zm-96.48-424.1L608,252.25c-10.56-4.38-31.54,1.29-38.23,9.91-1.77,2.29-.85,6.67-1.34,12l19.33-10.74c-1.56,12.17-1.18,12.34,13.1,8.09,8.13,4.24,14.23,7.52,20.43,10.61a15.07,15.07,0,0,0,6.31,1.9c.93,0,2.93-3,2.62-3.49a21.38,21.38,0,0,0-4.83-4.95c-5.63-4.49-11.36-8.85-17.05-13.27.52-1.37,1-2.74,1.57-4.11Zm-373.57,338c5.76,10.36,12.31,15.45,22.7,16.84,23.7,3.15,47.55,6.07,70.83,11.32,18.86,4.25,36.73,12.73,55.5,17.57a554.64,554.64,0,0,0,63.92,12.75c9.33,1.26,19.4-1.83,28.91-4,2.14-.49,3.32-5.24,6.57-10.81-12.38,1.94-21.12,4.69-29.71,4.27-8.75-.43-17.3-4.24-26-6.1-16.78-3.56-33.66-6.67-50.42-10.33-2.4-.52-6.12-3-6.2-4.72-.51-10.43-4.7-8.91-12-5.59-3.17,1.43-8.7-1.27-12.73-3.06-4.29-1.9-8.07-4.94-12.07-7.49-2-6.3-6.25-4.83-12.68-1.67-4.59,2.26-10.21,2.42-15.88,3.63,2.41-6.42,3.88-10.31,5.17-13.74-12.79-5.87-15.21,16.76-28.27,8,3.37-5,6.35-9.47,9.32-13.91l-3-3.78c-7.71,5.22-14.87,13.21-23.29,14.89C243.76,605.56,233.57,601.42,222.16,599.6Zm749.3,41.89,1.74,5.94c6.21-.72,12.9-.2,18.54-2.38,23.44-9,46.2-19.85,69.88-28.1,27.65-9.63,44.54-34,69.15-48,11.78-6.7,12.8-23.39,12.88-37.32,0-3.16-2.12-6.34-3.27-9.52-2.35,2.48-5.63,4.58-6.83,7.53-1.57,3.85-.56,8.8-2.3,12.51-3.7,7.85-6.65,18.11-13.15,22.14-13.37,8.29-27.54,14.75-36.32,28.78-1.38,2.2-5,3.08-7.72,4.36-18.88,9-37.55,18.44-56.77,26.6-11.63,4.94-24.19,7.66-36.2,11.77C977.64,637,974.66,639.56,971.46,641.49ZM216.79,304.69l5.45,1.69c2.31-4.34,5-8.53,6.86-13.05,5.73-13.87,17.48-23.26,29.17-19.79,22,6.52,43-3.28,64.6-2.24,1.94.09,4.07-3.56,6.11-5.48-1.94-1.94-3.71-5.29-5.85-5.54-5.45-.64-11.07.06-16.62.3-14.38.61-29,3.08-43.09,1.45-20.8-2.39-37.34,5.53-44.31,25.52C217.25,292.89,217.51,299,216.79,304.69Zm903.6,106.37c-1.07,2.15-2,3.21-2.12,4.38a34,34,0,0,0-.49,7.65c1.9,22.44-1.82,41.24-26.49,50.39-9.48,3.52-14.9,12.74-13.55,23.87.26,2.11,2.4,5.13,4.21,5.59s6-1.8,6-3.07c1.08-15.24,14-19.29,24-26.14,14.78-10.18,22.23-45.62,12.63-60.6C1124,412.24,1122.38,412,1120.39,411.06Zm16.22,17.35c-1.26,5.26-2.86,8.44-2.62,11.48,1.35,17-7.28,28.11-20.52,37-2.29,1.54-3.49,4.71-5.19,7.13,3.39.39,7.76,2.32,10,.89,6.75-4.27,12.67-9.85,19-15,.19,3,.41,6.37.63,9.78l2.86,1.36c4-5.17,8.51-10,11.73-15.63,1.55-2.71.64-6.82.85-10.29l-10,2.2C1144.42,448.57,1149.61,438.24,1136.61,428.41Zm-115-166.66,2.47-4c-4-3.42-7.38-8.22-12-10-15-5.87-30.37-11-45.83-15.62-4.19-1.25-9.53-.68-13.75.78-2.85,1-4.65,5-6.93,7.68,2.87,1.24,5.62,3.06,8.61,3.64,13.18,2.54,26.6,4.06,39.6,7.27C1003.37,253.86,1012.39,258.26,1021.64,261.75ZM219.56,488.21c-15,24.78-5.09,40.47,9,48.27,2.34,1.3,6.51-.72,9.83-1.21-1.16-2.81-1.54-7.08-3.61-8.19-12-6.44-12.6-16.84-11.8-28.47C223.22,495.23,220.78,491.68,219.56,488.21Z"
          transform="translate(-143.52 -185.45)"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M222.16,599.6c11.41,1.82,21.6,6,30.61,4.15,8.42-1.68,15.58-9.67,23.29-14.89l3,3.78c-3,4.44-5.95,8.87-9.32,13.91,13.06,8.71,15.48-13.92,28.27-8-1.29,3.43-2.76,7.32-5.17,13.74,5.67-1.21,11.29-1.37,15.88-3.63,6.43-3.16,10.65-4.63,12.68,1.67,4,2.55,7.78,5.59,12.07,7.49,4,1.79,9.56,4.49,12.73,3.06,7.33-3.32,11.52-4.84,12,5.59.08,1.72,3.8,4.2,6.2,4.72,16.76,3.66,33.64,6.77,50.42,10.33,8.73,1.86,17.28,5.67,26,6.1,8.59.42,17.33-2.33,29.71-4.27-3.25,5.57-4.43,10.32-6.57,10.81-9.51,2.14-19.58,5.23-28.91,4a554.64,554.64,0,0,1-63.92-12.75c-18.77-4.84-36.64-13.32-55.5-17.57-23.28-5.25-47.13-8.17-70.83-11.32C234.47,615.05,227.92,610,222.16,599.6Z"
          transform="translate(-143.52 -185.45)"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M971.46,641.49c3.2-1.93,6.18-4.49,9.63-5.67,12-4.11,24.57-6.83,36.2-11.77,19.22-8.16,37.89-17.63,56.77-26.6,2.7-1.28,6.34-2.16,7.72-4.36,8.78-14,23-20.49,36.32-28.78,6.5-4,9.45-14.29,13.15-22.14,1.74-3.71.73-8.66,2.3-12.51,1.2-2.95,4.48-5,6.83-7.53,1.15,3.18,3.29,6.36,3.27,9.52-.08,13.93-1.1,30.62-12.88,37.32-24.61,14-41.5,38.35-69.15,48-23.68,8.25-46.44,19.09-69.88,28.1-5.64,2.18-12.33,1.66-18.54,2.38Z"
          transform="translate(-143.52 -185.45)"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M216.79,304.69c.72-5.73.46-11.8,2.32-17.14,7-20,23.51-27.91,44.31-25.52,14.12,1.63,28.71-.84,43.09-1.45,5.55-.24,11.17-.94,16.62-.3,2.14.25,3.91,3.6,5.85,5.54-2,1.92-4.17,5.57-6.11,5.48-21.57-1-42.57,8.76-64.6,2.24-11.69-3.47-23.44,5.92-29.17,19.79-1.87,4.52-4.55,8.71-6.86,13.05Z"
          transform="translate(-143.52 -185.45)"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M1120.39,411.06c2,.95,3.6,1.18,4.18,2.07,9.6,15,2.15,50.42-12.63,60.6-10,6.85-22.87,10.9-24,26.14-.09,1.27-4.3,3.5-6,3.07s-4-3.48-4.21-5.59c-1.35-11.13,4.07-20.35,13.55-23.87,24.67-9.15,28.39-28,26.49-50.39a34,34,0,0,1,.49-7.65C1118.44,414.27,1119.32,413.21,1120.39,411.06Z"
          transform="translate(-143.52 -185.45)"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M1136.61,428.41c13,9.83,7.81,20.16,6.72,28.94l10-2.2c-.21,3.47.7,7.58-.85,10.29-3.22,5.6-7.74,10.46-11.73,15.63l-2.86-1.36c-.22-3.41-.44-6.81-.63-9.78-6.29,5.11-12.21,10.69-19,15-2.24,1.43-6.61-.5-10-.89,1.7-2.42,2.9-5.59,5.19-7.13,13.24-8.87,21.87-20,20.52-37C1133.75,436.85,1135.35,433.67,1136.61,428.41Z"
          transform="translate(-143.52 -185.45)"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M1021.64,261.75c-9.25-3.49-18.27-7.89-27.8-10.25-13-3.21-26.42-4.73-39.6-7.27-3-.58-5.74-2.4-8.61-3.64,2.28-2.67,4.08-6.69,6.93-7.68,4.22-1.46,9.56-2,13.75-.78,15.46,4.63,30.81,9.75,45.83,15.62,4.59,1.79,8,6.59,12,10Z"
          transform="translate(-143.52 -185.45)"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M219.56,488.21c1.22,3.47,3.66,7,3.43,10.4-.8,11.63-.18,22,11.8,28.47,2.07,1.11,2.45,5.38,3.61,8.19-3.32.49-7.49,2.51-9.83,1.21C214.47,528.68,204.6,513,219.56,488.21Z"
          transform="translate(-143.52 -185.45)"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M595.73,261.57l14.13-3.38c-.53,1.37-1.05,2.74-1.57,4.11,5.69,4.42,11.42,8.78,17.05,13.27a21.38,21.38,0,0,1,4.83,4.95c.31.49-1.69,3.49-2.62,3.49a15.07,15.07,0,0,1-6.31-1.9c-6.2-3.09-12.3-6.37-20.43-10.61-14.28,4.25-14.66,4.08-13.1-8.09Z"
          transform="translate(-143.52 -185.45)"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M595.73,261.57l-8,1.84-19.33,10.74c.49-5.32-.43-9.7,1.34-12,6.69-8.62,27.67-14.29,38.23-9.91Z"
          transform="translate(-143.52 -185.45)"
        />
      </svg>
    );
  }
}

export default Rock3;