import React, { Component } from 'react';
import classNames from 'classnames';

const cNameLine = 'rock-line';
const cNameFill = 'rock-fill';

class Rock2 extends Component {
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
        viewBox="0 0 1119.6 437.84"
        style={style}
        onMouseEnter={handleMousePosition}
        onMouseLeave={handleMousePosition}
        onClick={handleClick}
      >
        <title>ROCK 2</title>
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M1173,322.44c-2.91,27.08-5.31,51.12-8.14,75.12-2.07,17.57-3.16,35.48-7.64,52.46-2.64,10-9.54,20-17.14,27.33-26.66,25.58-58.36,34.77-95.78,30.7-62.73-6.83-125.6-7.51-188.41,2.5-32.27,5.13-65.16,6.3-97.65,10.22-32.09,3.87-64.09,8.56-96,13.6-44.71,7.07-89.59,11.53-134.88,12.11-56.73.73-113-5.23-169.13-12.09-40.23-4.91-80.86-7.73-120.6-15.27-33.69-6.39-66.18-18.87-99.52-27.43-25.87-6.63-44.78-20.77-56.65-44.65-1.55-3.1-4.43-5.53-6.63-8.32-17.8-22.65-26.44-47.21-18.4-76.41Q71,309.42,83.66,256c4.26-18,6.15-36.46,9.75-54.59,4.62-23.32,17.65-41.16,39-51.29,8.95-4.23,19.87-4.36,29.93-6.15,18.49-3.31,37.18-5.68,55.47-9.86,32.83-7.5,65.5-7.33,98.39-1C358.09,141.24,400,149,441.9,157.06c40.44,7.79,80.88,15.56,121.24,23.76,28.46,5.79,55.65,4.73,81.62-10.17,22-12.6,46.61-17.61,71.28-20.87a345.63,345.63,0,0,0,81.23-20.91c35.75-14,73.36-20,111.68-20.16,24.84-.09,49.76.42,74.5,2.46,27.81,2.29,52,16.12,73.32,32.29,27.62,21,52.32,45.83,78,69.32,17,15.52,21.19,37.63,27.45,58.17C1167.56,288.47,1169.86,306.91,1173,322.44ZM509.49,516.3c-5.69-1.78-11.28-4.43-17.1-5.1-7.67-.89-15.52-.22-23.29-.22,0,1.77,0,3.53,0,5.3h40.45c2.13,1.7,4.08,4.55,6.42,4.93,20.85,3.35,41.71,6.75,62.68,9.12a184.47,184.47,0,0,0,34.85.61c11.64-.91,23.07-4.16,34.67-5.8C684.4,520,720.64,514.64,757,510.37c28.94-3.4,58.43-3.24,87-8.33,69.12-12.31,138.13-10.32,207.45-3.53,26.77,2.62,51.61-3.72,72.54-21.54,7.06-6,13.33-12.94,20-19.45l-2-2.69c-5,1.12-10,2.87-15.16,3.25-14.75,1.1-29.55,1.78-44.34,2.24-1.76.06-3.58-2.28-5.38-3.51l.75-2.86c26,2.55,50.1-2.19,73.71-17.89-3.54-.77-4.71-1.44-5.38-1.1-14.71,7.42-29.87,7.71-45.78,4.46-7.11-1.45-16-2.58-22,.4-15.13,7.56-30.8,3.46-46.12,5.07-1.24.13-2.69-1.69-5.6-3.64,20.06-3.62,38.34-7.66,56.84-9.95,9.38-1.17,19.17,1.43,28.75,1.18,8.06-.21,16.57-.79,24-3.63,5.88-2.25,10.35-8.17,15.45-12.46l-1.9-1.48-24.16,5.53-1.1-3.42,3.49-4.75c-11.33-2-22-4.65-32.91-5.73-15.06-1.49-30.35-3.4-45.33-2.31-24.34,1.78-48.5,5.88-72.75,8.87-1.53.19-3.2-.7-5.68-1.29,1.27-2.14,1.9-4.54,3-4.77,10.24-2.16,20.52-4.2,30.86-5.8,13.63-2.1,27.32-3.78,41-5.65,8.08-1.11,16.34-3.9,24.19-3,15.81,1.78,31.41,5.57,47.1,8.51,16,3,34.31-7.87,36.56-23.94,4-28.89,6.87-58,.89-87.09-.26-1.29-1.24-2.43-1.9-3.67h-11.5c2-3.5,3.29-5.61,4.34-7.85s1.84-4.66,2.75-7c-2.59-.28-5.21-.94-7.76-.73a87.61,87.61,0,0,0-10,1.89l-1.35-3.39,14.18-9.52c-.26-18.7-14.78-.79-20.87-8.39l15.63-11.82h-23.09l10-20.42c-23.36-20.48-46-42.79-71.22-61.76-26-19.54-54.83-34.9-88.58-36.72-15.57-.84-31.21-1.12-46.8-.88-46.59.72-92,7-135.18,26.34-13.68,6.13-29.09,9.13-44,11.61-35.21,5.84-69.8,12.7-102,29.5a80.83,80.83,0,0,1-36.91,9.07c-20.42-.26-41-3.22-61.13-7-39.45-7.39-78.58-16.48-118-24.18-43.61-8.53-87.24-17.15-131.12-24-25.6-4-51.33-.76-77.08,6.31,2.79,10.09,5.48,19.19,7.71,28.4.53,2.19-.51,4.76-.83,7.15-2.27-1.16-5.75-1.77-6.57-3.58C210.81,173,209,166,206.36,159.45c-1.37-3.35-3.72-6.3-5.63-9.44l-2.28,1.37c3.12,10.29,6.35,20.54,9.23,30.89.46,1.65-.63,3.74-1,5.62-2-.79-5.12-1-6-2.47-3.22-5.75-5.73-11.89-8.48-17.85-7.26,3-17.37-.76-21.57-7.07-1.5-2.25-4.1-5.07-6.42-5.28-25.83-2.35-51.83,17.13-57.09,42.58C101.55,225,96,252.14,90.75,279.38,89,288.66,81.42,299,95,306.17c-5.19,5-16.39,3.18-12.93,14.7,9.83,1.79,19.84,3.57,29.83,5.43,22.56,4.19,22.56,4.21,25.84,14.25l-60-10.26c-1.33,4.37-2.63,8.66-4,13.35l40,7.31-.6,4.35c-3.68.36-7.38,1.16-11,1-8.1-.37-16.2-1.88-24.24-1.54-3,.12-7.58,3.66-8.29,6.45-5.56,21.77-5.41,42.89,8.82,62.08,9.53,12.85,17.68,26.82,28,39,5.79,6.86,14.67,11.1,22.16,16.52l2-2.53c-6.22-7.95-13.26-15.41-18.45-24-5.46-9-3-23.13,1.26-25.69,5,10.83,8.79,22.64,15.42,32.57s16.07,17.95,26.2,28.89c-5.27-12.77-9.41-22.1-12.8-31.71-.61-1.74,1.92-4.59,3-6.92,1.86,1.72,4.36,3.11,5.46,5.23,2.55,4.89,3.61,10.72,6.75,15.12,6,8.47,13.11,16.21,21.13,25.91-2-11.44-3.56-20.09-5.09-28.73l2.74-.84L197.63,501l2.34-1.11V470.22c10.72,11.67,7,30.89,21.59,34.65,4.68-4,7-6.92,10.05-8.07,1-.37,3.46,4.24,5.71,6,3.66,2.85,7.37,6.28,11.63,7.54,5.35,1.58,11.3,1.06,17,1.72,64.32,7.46,128.6,15.37,193,22.25,22.23,2.38,44.74,2.24,67.12,3.25l.33-3.48c-11.05-2-22.05-5.34-33.16-5.73-27.89-1-55.82-.43-83.73-1-3.59-.07-7.12-3-10.68-4.67,3.45-2,6.85-5.49,10.37-5.6,17.82-.58,35.67-.27,54.33-.27-1.34-5.43-2-8.27-2.72-11.05,11.44-6.21,22.93-9.07,34.51-4.29,30.79,12.7,62.82,11.63,94.44,7.13,24.91-3.54,49.43-5.12,74.31-2.17,3.55.42,7.07,1.07,10.6,1.62l0,3.3c-3.16.57-6.31,1.4-9.5,1.66-24.74,2-49.65,2.71-74.19,6.11C563.46,522.94,536.54,520.5,509.49,516.3Z"
          transform="translate(-53.4 -108.7)"
        />
        <path
          className={classNames(cNameFill, { [`${cNameFill}__hovered`]: hovered })}
          d="M509.5,516.29c27,4.21,54,6.65,81.48,2.84,24.54-3.4,49.45-4.11,74.19-6.11,3.19-.26,6.34-1.09,9.5-1.66l0-3.3c-3.53-.55-7-1.2-10.6-1.62-24.88-2.95-49.4-1.37-74.31,2.17-31.62,4.5-63.65,5.57-94.44-7.13-11.58-4.78-23.07-1.92-34.51,4.29.69,2.78,1.38,5.62,2.72,11.05-18.66,0-36.51-.31-54.33.27-3.52.11-6.92,3.64-10.37,5.6,3.56,1.63,7.09,4.6,10.68,4.67,27.91.56,55.84,0,83.73,1,11.11.39,22.11,3.73,33.16,5.73l-.33,3.48c-22.38-1-44.89-.87-67.12-3.25-64.39-6.88-128.67-14.79-193-22.25-5.66-.66-11.61-.14-17-1.72-4.26-1.26-8-4.69-11.63-7.54-2.25-1.76-4.73-6.37-5.71-6-3,1.15-5.37,4.07-10.05,8.07-14.55-3.76-10.87-23-21.59-34.65v29.69L197.63,501,176,466.11l-2.74.84c1.53,8.64,3.06,17.29,5.09,28.73-8-9.7-15.08-17.44-21.13-25.91-3.14-4.4-4.2-10.23-6.75-15.12-1.1-2.12-3.6-3.51-5.46-5.23-1.08,2.33-3.61,5.18-3,6.92,3.39,9.61,7.53,18.94,12.8,31.71-10.13-10.94-19.58-19-26.2-28.89s-10.45-21.74-15.42-32.57c-4.28,2.56-6.72,16.68-1.26,25.69,5.19,8.58,12.23,16,18.45,24l-2,2.53c-7.49-5.42-16.37-9.66-22.16-16.52-10.29-12.17-18.44-26.14-28-39C64.09,404.1,63.94,383,69.5,361.21c.71-2.79,5.34-6.33,8.29-6.45,8-.34,16.14,1.17,24.24,1.54,3.66.16,7.36-.64,11-1l.6-4.35-40-7.31c1.42-4.69,2.72-9,4-13.35l60,10.26c-3.28-10-3.28-10.06-25.84-14.25-10-1.86-20-3.64-29.83-5.43-3.46-11.52,7.74-9.74,12.93-14.7-13.6-7.22-6-17.51-4.27-26.79C96,252.14,101.55,225,107.17,197.8c5.26-25.45,31.26-44.93,57.09-42.58,2.32.21,4.92,3,6.42,5.28,4.2,6.31,14.31,10.08,21.57,7.07,2.75,6,5.26,12.1,8.48,17.85.83,1.47,3.91,1.68,6,2.47.37-1.88,1.46-4,1-5.62-2.88-10.35-6.11-20.6-9.23-30.89l2.28-1.37c1.91,3.14,4.26,6.09,5.63,9.44,2.67,6.56,4.45,13.5,7.36,19.94.82,1.81,4.3,2.42,6.57,3.58.32-2.39,1.36-5,.83-7.15-2.23-9.21-4.92-18.31-7.71-28.4,25.75-7.07,51.48-10.34,77.08-6.31,43.88,6.9,87.51,15.52,131.12,24,39.4,7.7,78.53,16.79,118,24.18,20.14,3.76,40.71,6.72,61.13,7a80.83,80.83,0,0,0,36.91-9.07c32.2-16.8,66.79-23.66,102-29.5,15-2.48,30.36-5.48,44-11.61,43.18-19.38,88.59-25.62,135.18-26.34,15.59-.24,31.23,0,46.8.88,33.75,1.82,62.62,17.18,88.58,36.72,25.19,19,47.86,41.28,71.22,61.76l-10,20.42h23.09l-15.63,11.82c6.09,7.6,20.61-10.31,20.87,8.39l-14.18,9.52,1.35,3.39a87.61,87.61,0,0,1,10-1.89c2.55-.21,5.17.45,7.76.73-.91,2.33-1.69,4.72-2.75,7s-2.38,4.35-4.34,7.85h11.5c.66,1.24,1.64,2.38,1.9,3.67,6,29.08,3.15,58.2-.89,87.09-2.25,16.07-20.53,26.94-36.56,23.94-15.69-2.94-31.29-6.73-47.1-8.51-7.85-.88-16.11,1.91-24.19,3-13.66,1.87-27.35,3.55-41,5.65-10.34,1.6-20.62,3.64-30.86,5.8-1.08.23-1.71,2.63-3,4.77,2.48.59,4.15,1.48,5.68,1.29,24.25-3,48.41-7.09,72.75-8.87,15-1.09,30.27.82,45.33,2.31,10.87,1.08,21.58,3.7,32.91,5.73l-3.49,4.75,1.1,3.42,24.16-5.53,1.9,1.48c-5.1,4.29-9.57,10.21-15.45,12.46-7.39,2.84-15.9,3.42-24,3.63-9.58.25-19.37-2.35-28.75-1.18-18.5,2.29-36.78,6.33-56.84,9.95,2.91,1.95,4.36,3.77,5.6,3.64,15.32-1.61,31,2.49,46.12-5.07,6-3,14.86-1.85,22-.4,15.91,3.25,31.07,3,45.78-4.46.67-.34,1.84.33,5.38,1.1C1128,451.76,1104,456.5,1077.91,454l-.75,2.86c1.8,1.23,3.62,3.57,5.38,3.51,14.79-.46,29.59-1.14,44.34-2.24,5.11-.38,10.11-2.13,15.16-3.25l2,2.69c-6.63,6.51-12.9,13.45-20,19.45-20.93,17.82-45.77,24.16-72.54,21.54-69.32-6.79-138.33-8.78-207.45,3.53-28.6,5.09-58.09,4.93-87,8.33-36.38,4.27-72.62,9.64-108.89,14.77-11.6,1.64-23,4.89-34.67,5.8a184.47,184.47,0,0,1-34.85-.61c-21-2.37-41.83-5.77-62.68-9.12-2.34-.38-4.29-3.23-6.42-4.93ZM537,200.88c19.47,21.74,108.54,11.53,144.18-15.14-9.11-5.27-16.86-.31-23.92,3-35.46,16.8-72.25,18.35-110.07,11.2C544.41,199.44,541.29,200.46,537,200.88ZM887.57,479.57c8.62,8.95,32.38,8.52,40.28-.74C919,474.09,893.34,474.56,887.57,479.57ZM610.53,219c6.4,9.38,25.55,6.17,32.84-4.6ZM218.35,147c2.82,7,4.38,11.59,6.53,15.87a8.19,8.19,0,0,0,4.59,3.74c1,.31,4-1.78,3.9-2.31-1.06-5-1.85-10.28-4.34-14.55C227.91,147.82,223.11,148.07,218.35,147Z"
          transform="translate(-53.4 -108.7)"
        />
        <path
          className={classNames(cNameFill, { [`${cNameFill}__hovered`]: hovered })}
          d="M509.51,516.28H469.06c0-1.77,0-3.53,0-5.3,7.77,0,15.62-.67,23.29.22,5.82.67,11.41,3.32,17.1,5.1Z"
          transform="translate(-53.4 -108.7)"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M537,200.88c4.25-.42,7.37-1.44,10.19-.91,37.82,7.15,74.61,5.6,110.07-11.2,7.06-3.34,14.81-8.3,23.92-3C645.58,212.41,556.51,222.62,537,200.88Z"
          transform="translate(-53.4 -108.7)"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M887.57,479.57c5.77-5,31.39-5.48,40.28-.74C920,488.09,896.19,488.52,887.57,479.57Z"
          transform="translate(-53.4 -108.7)"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M610.53,219l32.84-4.6C636.08,225.18,616.93,228.39,610.53,219Z"
          transform="translate(-53.4 -108.7)"
        />
        <path
          className={classNames(cNameLine, { [`${cNameLine}__hovered`]: hovered })}
          d="M218.35,147c4.76,1.1,9.56.85,10.68,2.75,2.49,4.27,3.28,9.57,4.34,14.55.11.53-2.86,2.62-3.9,2.31a8.19,8.19,0,0,1-4.59-3.74C222.73,158.56,221.17,154,218.35,147Z"
          transform="translate(-53.4 -108.7)"
        />
      </svg>
    );
  }
}

export default Rock2;
