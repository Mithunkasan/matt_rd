import React, { Component } from 'react'
import { DropzoneArea } from 'material-ui-dropzone'

class FileDropzoneArea extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
  }
  handleChange(files) {
    this.setState({
      files: files
    });
    this.props.handileFiles(files)
  }
  render() {
    return (
      <DropzoneArea
        onChange={this.handleChange.bind(this)}
      />
    )
  }
}

export default FileDropzoneArea;