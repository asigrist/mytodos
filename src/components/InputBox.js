import React, {Component} from 'react';

class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ''
    };
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  clear() {
    this.setState({value: ''});
  }

  handleSubmit(e) {
    e.preventDefault();
    const {addNew} = this.props;
    const text = this.state.value;

    addNew(text);
    this.clear();
  }


  render() {
    return (
      <form>
        <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
        <input type="submit" value="Add item" onClick={this.handleSubmit.bind(this)} />
      </form>
    )
  }

}

export default InputBox;
