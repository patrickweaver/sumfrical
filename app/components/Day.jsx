import React from 'react'

export default class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  
  render() {
    var classes = 'day'
    if (this.props.weekDay === 0 || this.props.weekDay === 6) {
      classes += ' weekend'
    }

    switch(this.props.status) {
      case 1:
        classes += ' summer-friday';
        break;
      case 4:
        classes += ' half-summer-friday';
        break;
      case 2:
        classes += ' vacation';
        break;
      case 5:
        classes += ' half-vacation';
        break;
      case 3:
        classes += ' holiday';
        break;
      case 6:
        classes += ' other';
        break;
      case 7:
        classes += ' other-half';
        break;
      default:
        classes += '';
    }

    return (
      <li
        className={classes}
        dangerouslySetInnerHTML={{__html: this.props.date}}
        onClick={e => this.props.changeDayStatus(e, this.props.weekNumber, this.props.weekDay, 'left')}
        onContextMenu={e => this.props.changeDayStatus(e, this.props.weekNumber, this.props.weekDay, 'right')}
      ></li>
    )
  }
}