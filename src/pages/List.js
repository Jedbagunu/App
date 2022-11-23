import React, { Component } from 'react';
import EntryRow from '../components/EntryRow';
import {Col} from 'react-bootstrap'


class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Col> 
          <EntryRow />
      </Col>
    );
  }
}

export default List;