import { Component } from 'react';
import PropTypes from 'prop-types';

class InlineMessage extends Component {
  static propTypes = {
    pristine: PropTypes.bool.isRequired, // eslint-disable-line
    visible: PropTypes.bool.isRequired,
    render: PropTypes.func.isRequired
  };

  static getDerivedStateFromProps(props, state) {
    if (props.visible && !state.visible) {
      return {
        visible: true
      };
    }

    if (props.pristine && state.visible) {
      return null;
    }

    return {
      visible: false
    };
  }

  constructor(props) {
    super(props);
    const { visible } = this.props;
    this.state = {
      visible
    };
  }

  onDismiss = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;
    if (!visible) {
      return null;
    }

    const { render } = this.props;

    return (
      render({
        onDismiss: this.onDismiss
      })
    );
  }
}

export default InlineMessage;
