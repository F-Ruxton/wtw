import React, { Component } from 'react';
import _ from 'lodash/fp';
import { NAVBAR_HEIGHT } from '../../shared/sizes';

const cName = 'ScrollTo';

export default class ScrollTo extends Component {
  constructor(props) {
    super(props);
    this.state = { id: _.random(0, 10000000) };
  }

  componentDidMount() {
    if (this.props.scrollOnMount) {
      this.onScroll();
    }
  }

  componentDidUpdate() {
    if (this.props.scrollOnMount) {
      this.onScroll();
    }
  }

  onScroll() {
    const { scrollOffset = NAVBAR_HEIGHT } = this.props;
    const { id } = this.state;
    const elem = document.getElementById(`${cName}__${id}`);

    if (!_.isNull(elem)) {
      window.scrollTo({ top: elem.offsetTop - scrollOffset, behavior: 'smooth' })
    }
  }

  render() {
    const { children } = this.props;
    const { id } = this.state;

    return (
      <div id={`${cName}__${id}`}>
        {children}
      </div>
    )
  }
}
