'use strict';

var React = require('react');
var termcolors = require('termcolors');

var actions = require('../actions');

var Import = React.createClass({

  handleClick: function () {
    var type = this.refs.select.getDOMNode().value;
    var text = this.refs.textarea.getDOMNode().value;
    var colors = termcolors[type].import(text);
    colors = termcolors.defaults.fill(colors);
    actions.setAllColors(colors);
  },

  render: function () {
    return (
      /* jshint ignore: start */
      <div className='import'>
        <label>Format:</label>
        <select ref='select' defaultValue='xresources'>
          <option value='iterm'>iTerm2</option>
          <option value='termite'>Termite</option>
          <option value='url'>URL</option>
          <option value='xresources'>Xresources</option>
        </select>
        <textarea spellCheck='false' className='background-bg' ref='textarea' />
        <div className='buttons'>
          <div onClick={this.handleClick} className='button button-import'>Import</div>
        </div>
      </div>
      /* jshint ignore: end */
    );
  }

});

module.exports = Import;
