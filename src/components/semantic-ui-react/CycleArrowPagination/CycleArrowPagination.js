import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Label } from 'semantic-ui-react';
import withCyclePagination from '../../WithCyclePagination';
import {
  navCss, navCenterColCss, navLeftColCss, navRightColCss
} from './css';

class CycleArrowPagination extends Component {
  static propTypes = {
    arrowColor: PropTypes.string,
    arrowSize: PropTypes.string,
    prevDisabled: PropTypes.bool.isRequired,
    nextDisabled: PropTypes.bool.isRequired,
    fetchPrev: PropTypes.func.isRequired,
    fetchNext: PropTypes.func.isRequired,
    cycleGroup: PropTypes.number.isRequired,
    cycleGroupStartDttm: PropTypes.string.isRequired,
    cycleGroupStartDttmLabel: PropTypes.string
  };

  static defaultProps = {
    arrowColor: 'green',
    arrowSize: 'huge',
    cycleGroupStartDttmLabel: 'Cycle Start DTTM'
  };

  constructor(props) {
    super(props);
    this.fetchPrev = this.fetchPrev.bind(this);
    this.fetchNext = this.fetchNext.bind(this);
  }

  fetchPrev(e) {
    e.preventDefault();
    const { prevDisabled, fetchPrev } = this.props;
    if (!prevDisabled) {
      fetchPrev();
    }
  }

  fetchNext(e) {
    e.preventDefault();
    const { nextDisabled, fetchNext } = this.props;
    if (!nextDisabled) {
      fetchNext();
    }
  }

  render() {
    const {
      arrowSize, arrowColor, prevDisabled, nextDisabled, cycleGroup, cycleGroupStartDttm, cycleGroupStartDttmLabel
    } = this.props;
    return (
      <div css={navCss}>
        <div css={navLeftColCss}>
          <a href="#prev" onClick={this.fetchPrev}>
            <Icon name="arrow left" size={arrowSize} color={arrowColor} disabled={prevDisabled} />
          </a>
        </div>
        <div css={navCenterColCss}>
          <div>
            <Label color="blue">{cycleGroup * -1}</Label>
          </div>
          <div>{cycleGroupStartDttmLabel}</div>
          <div>
            (
            {cycleGroupStartDttm}
            )
          </div>
        </div>
        <div css={navRightColCss}>
          <a href="#next" onClick={this.fetchNext}>
            <Icon name="arrow right" size={arrowSize} color={arrowColor} disabled={nextDisabled} />
          </a>
        </div>
      </div>
    );
  }
}

export default withCyclePagination(CycleArrowPagination);
