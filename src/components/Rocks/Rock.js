import React, { Component } from 'react';

const Rock = ({ text }) => {
  return class Rock extends Component {
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
        ></svg>
      );
    }
  }
}

class Rock1 extends Component {
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
        className={cName}
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1088.91 567.54"
        style={style}
        // onMouseEnter={handleMousePosition}
        // onMouseLeave={handleMousePosition}
        onClick={handleClick}
      >
        <title>ROCK 1</title>
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M854,640.79c-51.56,0-103.12-.56-154.67.19-37.07.54-74.15,4.54-111.15,3.75-26.34-.56-52.87-5.09-78.79-10.4C457.2,623.63,404.88,615,351.59,611.57c-38.15-2.47-76.27-6.81-114.09-12.47-26.2-3.93-44.2-20.14-56.68-44.21a270.15,270.15,0,0,0-35.15-51.58c-7.64-8.86-20.41-13.34-31-19.61-6.84-4.07-14.2-7.38-20.68-11.94-3-2.13-6.28-6.33-6.48-9.76-2-33-5.66-65.71,18.83-94.55,19.6-23.07,27.22-52.74,32.55-82.22,4.55-25.17,15.19-46.79,29.93-67.63,10.54-14.91,16.94-32.83,24.56-49.69,11.87-26.28,28.46-46.15,59-51.72,16.54-3,32.22-10.74,48.76-13.85A142.12,142.12,0,0,1,343,100.73c38.38,4.37,77.23,7.59,114.66,16.46,34.66,8.21,66.65-1,98.85-7.38C615,98.12,673.39,93.51,732.94,96.9c21.79,1.25,44-3.15,65.89-6.16,29.55-4,58.82-11.54,88.46-13.2,22.94-1.28,46.54,2.28,68,13.48,37.42,19.55,75.19,38.42,112.58,58,26.79,14.05,55.32,27.42,72.41,53,13.11,19.65,21.22,43,29.26,65.56,8.27,23.17,5.46,47.12,2.72,71.58-4.77,42.52-16,82.93-30,123-10.64,30.38-24.4,58.49-48.24,81.15-16,15.21-28.78,34.26-46.14,47.47-22.89,17.44-47.66,33.6-73.93,45-17.3,7.52-38.59,6.7-58.21,7.84-20.5,1.19-41.12.26-61.69.26C854,642.87,854,641.83,854,640.79ZM239.31,582.16c-.09.68-.17,1.36-.26,2.05,11.28,1.87,22.5,4.49,33.86,5.48,43.74,3.85,87.72,5.72,131.26,11.14,38.7,4.82,77.12,12.52,115.33,20.53,30.09,6.31,60,9.86,90.88,8.84,64-2.12,128-3,192-3.46,34.27-.27,68.6.35,102.82,2.2,41.38,2.24,78.5-7.76,112.78-31.3,30.72-21.09,55-48.34,77.53-77.22,11.21-14.38,20.48-30.69,28.14-47.28,8.55-18.53,14.56-38.26,21.17-57.65a309.63,309.63,0,0,0,16-120.11c-2.06-32.21-12-63.56-34.18-88.81-18.41-21-42.5-34.22-67.14-46.48-28.8-14.32-58.12-27.72-86.05-43.58-25.86-14.68-52.83-25.72-82.31-24.35-30.1,1.4-60.19,6.11-89.9,11.51-33.52,6.09-66.72,8.75-100.84,5.72-24.78-2.21-50.08-1.57-74.9.61-18.64,1.63-36.82,8-55.31,11.74q-34.38,6.93-69,12.83a73.2,73.2,0,0,1-21.31.48c-22.76-3-45.45-6.55-68.12-10.15-23-3.65-46.14-7.07-69-11.61-15.12-3-29.45-2.4-44,2.65-12.52,4.35-25.16,9.17-38.15,11.26C230.89,132,215.07,151,203,176.57c-9,19.1-15.05,39.51-29,56.71-9.72,12-15.34,28-20.2,43-8.11,25.13-9.3,52.42-24,75.53-5.6,8.82-10.21,18.37-16.54,26.6-11.71,15.21-17.73,32.37-14.39,50.81,2.53,13.92,9.45,27.07,14.75,40.42.54,1.38,3.31,2.16,5.2,2.68,21.92,6,43.64,13.15,65.89,17.6,18.86,3.78,38.67,2.86,57.46,6.84,37.7,8,74.9,18.28,112.48,26.85,22.26,5.08,44.77,9.12,67.3,12.82,19,3.12,38.12,5.38,57.24,7.49,31.12,3.43,62.29,6.37,93.42,9.69,3.35.35,6.59,1.81,13.25,3.72-12.22,7.62-21.56,8.8-31.81,7.44-30.27-4-60.62-7.47-90.87-11.62-17.39-2.38-34.65-5.65-52-8.59s-34.56-6-51.84-9c.39,1.2.79,2.41,1.19,3.61l-12.22,16.11L189.75,538.05c1.41,9.68,9.6,10.7,17,11.45,23.24,2.36,46.55,4,69.8,6.22,8.37.82,16.64,2.72,25,4.13l-.49,3.53H205.78c4.33,3.81,9.05,5.12,13.86,5.67,26.83,3.09,53.69,5.89,80.5,9.09,3.53.42,6.87,2.52,10.3,3.85-.32,1.24-.63,2.48-.95,3.73Zm110-43.69.72-3.93C297.73,525.71,248.3,501.4,193.58,506c-.22,1.24-.45,2.48-.68,3.71Zm-89.07-3.69-84.44-20.06-1,4.33C202.72,526.56,231.35,531.34,260.21,534.78Z"
          transform="translate(-86.09 -77.29)"
        />
        <path
          className={classNames(cNameFill, { [`${cNameFill}__hovered`]: hovered })}
          d="M239.31,582.16l70.18,3.56c.32-1.25.63-2.49.95-3.73-3.43-1.33-6.77-3.43-10.3-3.85-26.81-3.2-53.67-6-80.5-9.09-4.81-.55-9.53-1.86-13.86-5.67H301l.49-3.53c-8.32-1.41-16.59-3.31-25-4.13-23.25-2.27-46.56-3.86-69.8-6.22-7.42-.75-15.61-1.77-17-11.45l158.62,17.32,12.22-16.11c-.4-1.2-.8-2.41-1.19-3.61,17.28,3,34.55,6,51.84,9s34.57,6.21,52,8.59c30.25,4.15,60.6,7.59,90.87,11.62,10.25,1.36,19.59.18,31.81-7.44-6.66-1.91-9.9-3.37-13.25-3.72-31.13-3.32-62.3-6.26-93.42-9.69-19.12-2.11-38.26-4.37-57.24-7.49-22.53-3.7-45-7.74-67.3-12.82-37.58-8.57-74.78-18.87-112.48-26.85-18.79-4-38.6-3.06-57.46-6.84-22.25-4.45-44-11.56-65.89-17.6-1.89-.52-4.66-1.3-5.2-2.68-5.3-13.35-12.22-26.5-14.75-40.42-3.34-18.44,2.68-35.6,14.39-50.81,6.33-8.23,10.94-17.78,16.54-26.6,14.65-23.11,15.84-50.4,24-75.53,4.86-15.05,10.48-31.07,20.2-43,14-17.2,20-37.61,29-56.71C215.07,151,230.89,132,260.62,127.2c13-2.09,25.63-6.91,38.15-11.26,14.53-5,28.86-5.66,44-2.65,22.87,4.54,46,8,69,11.61,22.67,3.6,45.36,7.17,68.12,10.15a73.2,73.2,0,0,0,21.31-.48q34.59-5.83,69-12.83c18.49-3.73,36.67-10.11,55.31-11.74,24.82-2.18,50.12-2.82,74.9-.61,34.12,3,67.32.37,100.84-5.72,29.71-5.4,59.8-10.11,89.9-11.51,29.48-1.37,56.45,9.67,82.31,24.35,27.93,15.86,57.25,29.26,86.05,43.58,24.64,12.26,48.73,25.52,67.14,46.48,22.18,25.25,32.12,56.6,34.18,88.81a309.63,309.63,0,0,1-16,120.11c-6.61,19.39-12.62,39.12-21.17,57.65-7.66,16.59-16.93,32.9-28.14,47.28-22.5,28.88-46.81,56.13-77.53,77.22-34.28,23.54-71.4,33.54-112.78,31.3-34.22-1.85-68.55-2.47-102.82-2.2-64,.5-128,1.34-192,3.46-30.88,1-60.79-2.53-90.88-8.84-38.21-8-76.63-15.71-115.33-20.53-43.54-5.42-87.52-7.29-131.26-11.14-11.36-1-22.58-3.61-33.86-5.48C239.14,583.52,239.22,582.84,239.31,582.16Zm429.78,29.92c-24.54-1.4-48.44-2.92-72.35-4.05-9.52-.45-19.36-1.48-28.58.28-21.88,4.18-42,1.92-61.32-9.87-6.61-4-15-5.42-22.76-7.12-2.16-.47-5,2.28-7.58,3.55,2.06,2.46,3.63,5.89,6.26,7.19,5.71,2.82,12.51,3.64,17.88,6.89,20.77,12.54,42.71,15.85,66.2,10.42,3.87-.9,8-2.07,11.82-1.56,54.65,7.31,109.21,1.54,163.79-.87,2.88-.13,5.68-2.1,8.51-3.21a82.47,82.47,0,0,1-4.53-7.14c-1.08-2.13-1.38-4.65-2.47-6.77-1.72-3.34-3.81-6.48-5.75-9.71-1.48,3.31-3.42,6.51-4.25,10-.46,1.9,1,4.25,1.93,7.77L719.78,607l0-3.06,13.13-1.28C730,596,728,590.65,725.11,585.84c-.41-.66-5.59,1.6-9.45,2.77a6.28,6.28,0,0,0-2.22-2.36,96.22,96.22,0,0,0-9.17-3.49c0,3.25-.45,6.59.19,9.71,1,4.89,2.75,9.62,4.19,14.41l-3.46,2.48-17.92-16.58-2.4,17.65L670.81,594C670.08,601.65,669.76,605.07,669.09,612.08ZM185.34,251.66c-7.52-6-13-1.34-15.82,4.16-4.39,8.44-8.11,17.62-9.88,26.92-1.86,9.71-.46,20-1.57,29.9-3,26.29-17.8,47.73-33.35,67.14-13.26,16.57-14,32.39-9.45,50.49,2.43,9.76,9.68,13,20.27,8.32-16-5.44-7.66-11.26-1.54-16.31-1.42-8.9-16.53-12.41-7.94-24.31,5.33,2,9,13.38,16,3l-8.81-14.7,15.15,3.63c-.59-5.95-4.12-9.15-4.32-12.54-.21-3.62,3.94-10.74,4.14-10.67,14,5.08,7.29-5.89,8.1-9.76l12.92,2c.38-1.19.75-2.39,1.12-3.59l-12.86-10.67,11.47-18C168,299.77,163.62,273.36,185.34,251.66ZM999.52,159.4c-17.75-5.74-35.27-4.57-43.76-24.88-6.22-14.89-24.52-18.47-38.43-11.29-2.31,1.19-3.51,4.5-5.23,6.83,2.58,1.36,5.72,4.43,7.65,3.81,18-5.86,26.13,4.53,32.4,18.66,4.2,9.45,11.94,12.6,21.89,14.41,9.43,1.71,18.57,6.09,27.26,10.46,10.28,5.17,19.75,12,30,17.16,2,1,6.08-2,9.21-3.09-1.69-2.35-2.93-5.3-5.14-6.95-7.92-5.94-16.17-11.44-24.29-17.11.44-.73.89-1.46,1.34-2.19l49.88,23,3.34-4.28c-3.41-4-6.06-9.34-10.36-11.72-17.12-9.49-34.65-18.28-52.32-26.7-2.78-1.32-7.09.58-12.22,1.16Zm88.78,275.29q-2.37-1.5-4.72-3c6.13-11.45,12.31-22.87,18.38-34.35,1.66-3.12,3-6.41,4.5-9.62-3.75,1.17-9.2,1.17-11,3.71a316,316,0,0,0-20.16,33.45c-10.68,20.63-24.11,38.67-43.21,52.37-10.55,7.57-20.35,16.18-32.46,25.91,16.52,7.71,18.49-8.87,27.36-8.75,4.59,1.63,11,3.6,13.44,1.32,21.23-20.22,41.88-41.06,62.36-62.06a38,38,0,0,0,8.81-14.28c1.06-3.31-1.32-7.73-2.41-12.87ZM855.24,608c-.38,1.19-.75,2.38-1.13,3.57,3,1.42,5.9,3.59,9.06,4.12,7.5,1.23,15.19,2.67,22.71,2.28,28.76-1.49,58.82,6.59,85.59-10.87,1.22-.8,3.14-.8,4.73-.74,20.59.71,36.82-9.66,52.28-21.25,4-3,6.1-8.7,9.06-13.16l-2.91-2.14-33.5,21.88-9.55-11.22c-1.65,3.71-3.34,7.4-4.93,11.13-.7,1.65-1.19,3.39-1.78,5.09-2-1.31-4.77-2.17-5.73-4-3.53-6.68-7-6.29-12.13-1.54-6.84,6.31-14.28,12-20.86,17.42L939,590.31l-11.75,16.53H917.7l-6.3-11.06c-2.64,2.28-5.21,4.64-7.93,6.82s-5.84,4.36-8,6c-2.38-7.37-3.53-16.07-5.53-16.27-12.34-1.24-3.37,10.44-8.85,15.68Zm257.93-158.16c-1.16-1.79-2.27-4.69-3.11-4.61a13.2,13.2,0,0,0-7.12,2.69c-12.09,10.48-24.3,20.87-35.74,32-5.68,5.54-10.16,12.44-14.43,19.21-1.15,1.82.48,5.38.84,8.15,2.47-.67,5.69-.56,7.29-2.12q22.83-22.26,45.11-45.06C1108.76,457.33,1110.59,453.62,1113.17,449.84ZM391.78,141.19c-5.91-1.77-9.08-3.43-12.28-3.5-4.33-.09-8.67,1.1-13,1.63-23.09,2.79-44.58,10-63.22,24.14-2.53,1.92-3.11,6.39-4.59,9.68,3.39-.35,7.3.25,10.08-1.24,7.74-4.14,14.47-10.75,22.58-13.5C349.78,152.13,368.82,147.59,391.78,141.19ZM847.23,485.32c21.26,5.12,32.79-10.61,49.37-17.18C887.05,462.59,854.07,474.58,847.23,485.32ZM318.48,177l2.61,1.64L365,162.19c-7.9-6.25-22.35-5.29-35.75,2.83C324.88,167.69,322,172.93,318.48,177Zm784.69,302.73-3.23-.36c-3.21,3.5-6.31,7.09-9.65,10.45-3.68,3.7-8.09,6.8-11.18,10.91-1.72,2.29-1.42,6.11-2,9.25,3.11-.37,7.14.38,9.16-1.3,5.82-4.84,11.57-10.15,15.84-16.31C1104.17,489.35,1102.91,484,1103.17,479.73Zm-720.4-7c8.74,11.07,26,17.19,35.4,14.32,1.6-.49,2.79-2.33,4.17-3.55-2.09-2-3.86-5.18-6.34-5.92a205,205,0,0,0-22.16-4.77C391.09,472.3,388.19,472.7,382.77,472.7ZM727.05,133.6c-8.18-10-17.91-5-26.32-6,.23,2.64-.34,7.1.82,7.6C709.7,138.78,718,139.64,727.05,133.6ZM262.29,455.73c-7.08,11.62-2.35,19,2.8,26,.8,1.09,4.41.9,6.23.14,1-.42,1.76-3.67,1.18-5C269.77,470.5,266.54,464.37,262.29,455.73Zm27.69,38c2.73-3.81,5.27-6.2,4.85-7-3.39-6.19-7.33-12.08-11.1-18.05-2,2.16-6,5.38-5.54,6.31C281.22,481.06,285.24,486.54,290,493.78Zm246.75,33.69-8.11-7.27c-2.07,2.91-5.46,5.66-5.81,8.76-.28,2.47,3.15,5.35,4.94,8ZM358,173.14l-21.84,2.12C347.35,184.93,351,184.56,358,173.14ZM506.58,539.19l6.74-.65-1.68-17.49c-2.23.28-6.41.63-6.4.85C505.42,527.67,506,533.43,506.58,539.19ZM332.15,506.73l4.42-4.25L325.8,490.05c-1.38,1.72-4.23,4.55-3.91,5C325,499.17,328.66,502.89,332.15,506.73Z"
          transform="translate(-86.09 -77.29)"
        />
        <path
          className={classNames(cNameFill, { [`${cNameFill}__hovered`]: hovered })}
          d="M349.28,538.47,192.9,509.68c.23-1.23.46-2.47.68-3.71C248.3,501.4,297.73,525.71,350,534.54Z"
          transform="translate(-86.09 -77.29)"
        />
        <path
          className={classNames(cNameFill, { [`${cNameFill}__hovered`]: hovered })}
          d="M260.21,534.78c-28.86-3.44-57.49-8.22-85.46-15.73l1-4.33Z"
          transform="translate(-86.09 -77.29)"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M669.09,612.08c.67-7,1-10.43,1.72-18.13l14.06,16.48,2.4-17.65,17.92,16.58,3.46-2.48c-1.44-4.79-3.19-9.52-4.19-14.41-.64-3.12-.16-6.46-.19-9.71a96.22,96.22,0,0,1,9.17,3.49,6.28,6.28,0,0,1,2.22,2.36c3.86-1.17,9-3.43,9.45-2.77,2.93,4.81,4.9,10.2,7.82,16.86L719.8,604l0,3.06,16.11.82c-1-3.52-2.39-5.87-1.93-7.77.83-3.47,2.77-6.67,4.25-10,1.94,3.23,4,6.37,5.75,9.71,1.09,2.12,1.39,4.64,2.47,6.77a82.47,82.47,0,0,0,4.53,7.14c-2.83,1.11-5.63,3.08-8.51,3.21-54.58,2.41-109.14,8.18-163.79.87-3.81-.51-7.95.66-11.82,1.56-23.49,5.43-45.43,2.12-66.2-10.42-5.37-3.25-12.17-4.07-17.88-6.89-2.63-1.3-4.2-4.73-6.26-7.19,2.55-1.27,5.42-4,7.58-3.55,7.77,1.7,16.15,3.09,22.76,7.12,19.33,11.79,39.44,14,61.32,9.87,9.22-1.76,19.06-.73,28.58-.28C620.65,609.16,644.55,610.68,669.09,612.08Z"
          transform="translate(-86.09 -77.29)"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M185.34,251.66c-21.72,21.7-17.37,48.11-16.4,75l-11.47,18,12.86,10.67c-.37,1.2-.74,2.4-1.12,3.59l-12.92-2c-.81,3.87,5.9,14.84-8.1,9.76-.2-.07-4.35,7-4.14,10.67.2,3.39,3.73,6.59,4.32,12.54l-15.15-3.63,8.81,14.7c-7,10.41-10.64-1-16-3-8.59,11.9,6.52,15.41,7.94,24.31-6.12,5.05-14.43,10.87,1.54,16.31-10.59,4.72-17.84,1.44-20.27-8.32-4.52-18.1-3.81-33.92,9.45-50.49,15.55-19.41,30.39-40.85,33.35-67.14,1.11-9.91-.29-20.19,1.57-29.9,1.77-9.3,5.49-18.48,9.88-26.92C172.37,250.32,177.82,245.66,185.34,251.66Z"
          transform="translate(-86.09 -77.29)"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M999.52,159.4l-8.76-12.7c5.13-.58,9.44-2.48,12.22-1.16,17.67,8.42,35.2,17.21,52.32,26.7,4.3,2.38,7,7.73,10.36,11.72l-3.34,4.28-49.88-23c-.45.73-.9,1.46-1.34,2.19,8.12,5.67,16.37,11.17,24.29,17.11,2.21,1.65,3.45,4.6,5.14,6.95-3.13,1.13-7.18,4.11-9.21,3.09-10.27-5.2-19.74-12-30-17.16-8.69-4.37-17.83-8.75-27.26-10.46-9.95-1.81-17.69-5-21.89-14.41-6.27-14.13-14.4-24.52-32.4-18.66-1.93.62-5.07-2.45-7.65-3.81,1.72-2.33,2.92-5.64,5.23-6.83,13.91-7.18,32.21-3.6,38.43,11.29C964.25,154.83,981.77,153.66,999.52,159.4Z"
          transform="translate(-86.09 -77.29)"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M1088.3,434.69l20.94-28.19c1.09,5.14,3.47,9.56,2.41,12.87a38,38,0,0,1-8.81,14.28c-20.48,21-41.13,41.84-62.36,62.06-2.4,2.28-8.85.31-13.44-1.32-8.87-.12-10.84,16.46-27.36,8.75,12.11-9.73,21.91-18.34,32.46-25.91,19.1-13.7,32.53-31.74,43.21-52.37a316,316,0,0,1,20.16-33.45c1.75-2.54,7.2-2.54,11-3.71-1.49,3.21-2.84,6.5-4.5,9.62-6.07,11.48-12.25,22.9-18.38,34.35Q1085.94,433.19,1088.3,434.69Z"
          transform="translate(-86.09 -77.29)"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M855.24,608h25.81c5.48-5.24-3.49-16.92,8.85-15.68,2,.2,3.15,8.9,5.53,16.27,2.2-1.63,5.2-3.72,8-6s5.29-4.54,7.93-6.82l6.3,11.06h9.56L939,590.31l7.14,18.25c6.58-5.45,14-11.11,20.86-17.42,5.13-4.75,8.6-5.14,12.13,1.54,1,1.84,3.77,2.7,5.73,4,.59-1.7,1.08-3.44,1.78-5.09,1.59-3.73,3.28-7.42,4.93-11.13l9.55,11.22,33.5-21.88,2.91,2.14c-3,4.46-5,10.13-9.06,13.16-15.46,11.59-31.69,22-52.28,21.25-1.59-.06-3.51-.06-4.73.74-26.77,17.46-56.83,9.38-85.59,10.87-7.52.39-15.21-1.05-22.71-2.28-3.16-.53-6-2.7-9.06-4.12C854.49,610.38,854.86,609.19,855.24,608Z"
          transform="translate(-86.09 -77.29)"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M1113.17,449.84c-2.58,3.78-4.41,7.49-7.16,10.3q-22.3,22.77-45.11,45.06c-1.6,1.56-4.82,1.45-7.29,2.12-.36-2.77-2-6.33-.84-8.15,4.27-6.77,8.75-13.67,14.43-19.21,11.44-11.17,23.65-21.56,35.74-32a13.2,13.2,0,0,1,7.12-2.69C1110.9,445.15,1112,448.05,1113.17,449.84Z"
          transform="translate(-86.09 -77.29)"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M391.78,141.19c-23,6.4-42,10.94-60.45,17.21-8.11,2.75-14.84,9.36-22.58,13.5-2.78,1.49-6.69.89-10.08,1.24,1.48-3.29,2.06-7.76,4.59-9.68,18.64-14.19,40.13-21.35,63.22-24.14,4.35-.53,8.69-1.72,13-1.63C382.7,137.76,385.87,139.42,391.78,141.19Z"
          transform="translate(-86.09 -77.29)"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M847.23,485.32c6.84-10.74,39.82-22.73,49.37-17.18C880,474.71,868.49,490.44,847.23,485.32Z"
          transform="translate(-86.09 -77.29)"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M318.48,177c3.56-4.07,6.4-9.31,10.8-12,13.4-8.12,27.85-9.08,35.75-2.83l-43.94,16.45Z"
          transform="translate(-86.09 -77.29)"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M1103.17,479.73c-.26,4.29,1,9.62-1.08,12.64-4.27,6.16-10,11.47-15.84,16.31-2,1.68-6,.93-9.16,1.3.6-3.14.3-7,2-9.25,3.09-4.11,7.5-7.21,11.18-10.91,3.34-3.36,6.44-6.95,9.65-10.45Z"
          transform="translate(-86.09 -77.29)"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M382.77,472.7c5.42,0,8.32-.4,11.07.08A205,205,0,0,1,416,477.55c2.48.74,4.25,3.88,6.34,5.92-1.38,1.22-2.57,3.06-4.17,3.55C408.79,489.89,391.51,483.77,382.77,472.7Z"
          transform="translate(-86.09 -77.29)"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M727.05,133.6c-9,6-17.35,5.18-25.5,1.63-1.16-.5-.59-5-.82-7.6C709.14,128.6,718.87,123.58,727.05,133.6Z"
          transform="translate(-86.09 -77.29)"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M262.29,455.73c4.25,8.64,7.48,14.77,10.21,21.12.58,1.35-.2,4.6-1.18,5-1.82.76-5.43.95-6.23-.14C259.94,474.73,255.21,467.35,262.29,455.73Z"
          transform="translate(-86.09 -77.29)"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M290,493.78c-4.74-7.24-8.76-12.72-11.79-18.71-.47-.93,3.58-4.15,5.54-6.31,3.77,6,7.71,11.86,11.1,18.05C295.25,487.58,292.71,490,290,493.78Z"
          transform="translate(-86.09 -77.29)"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M536.73,527.47l-9,9.54c-1.79-2.7-5.22-5.58-4.94-8,.35-3.1,3.74-5.85,5.81-8.76Z"
          transform="translate(-86.09 -77.29)"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M358,173.14c-6.91,11.42-10.6,11.79-21.84,2.12Z"
          transform="translate(-86.09 -77.29)"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M506.58,539.19c-.55-5.76-1.16-11.52-1.34-17.29,0-.22,4.17-.57,6.4-.85l1.68,17.49Z"
          transform="translate(-86.09 -77.29)"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M332.15,506.73c-3.49-3.84-7.15-7.56-10.26-11.69-.32-.44,2.53-3.27,3.91-5l10.77,12.43Z"
          transform="translate(-86.09 -77.29)"
        />
      </svg>
    );
  }
}
