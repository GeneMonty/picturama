import React from 'react';
import { connect } from 'react-redux';

import keymapManager from './../keymap-manager';
import Picture from './picture';

class Grid extends React.Component {
  static propTypes = {
    highlighted: React.PropTypes.array.isRequired,
    setCurrent: React.PropTypes.func.isRequired,
    actions: React.PropTypes.object.isRequired,
    photos: React.PropTypes.array.isRequired
  }

  handleFlagging() {
    let flagSet = this.props.photos
      .filter((photo, i) => this.state.highlighted.indexOf(i) !== -1);

    this.props.actions.flagSet(this.props.photos, flagSet, true);
  }

  handleExport() {
    this.unbindEventListeners();
    let state = this.state;

    state.modal = 'export';
    state.photosToExport = this.props.photos
      .filter((photo, i) => this.state.highlighted.indexOf(i) !== -1);

    this.setState(state);
  }

  componentDidMount() {
    window.addEventListener('grid:left', this.props.actions.moveHighlightLeft);
    window.addEventListener('grid:right', this.props.actions.moveHighlightRight);
    window.addEventListener('grid:up', this.props.actions.moveHighlightUp);
    window.addEventListener('grid:down', this.props.actions.moveHighlightDown);

    keymapManager.bind(this.refs.grid);
  }

  componentWillUnmount() {
    window.removeEventListener('grid:left', this.props.actions.moveHighlightLeft);
    window.removeEventListener('grid:right', this.props.actions.moveHighlightRight);
    window.removeEventListener('grid:up', this.props.actions.moveHighlightUp);
    window.removeEventListener('grid:down', this.props.actions.moveHighlightDown);

    keymapManager.unbind();
  }

  render() {
    return (
      <div className="grid" ref="grid">
        {this.props.photos.map((photo, index) =>
          <Picture
            key={index}
            index={index}
            photo={photo}
            actions={this.props.actions}
            setFlagging={this.handleFlagging.bind(this)}
            setExport={this.handleExport.bind(this)}
            setCurrent={this.props.setCurrent.bind(this)} />
          )
        }
      </div>
    );
  }
}

const ReduxGrid = connect(state => ({
  highlighted: state.highlighted
}))(Grid);

export default ReduxGrid;