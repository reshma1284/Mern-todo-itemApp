import React,{Component} from 'react';
import ItemService from './ItemService';

class AddItem extends Component{
  constructor(props){
    super(props);
    this.state = {
        value: ''
      };
    this.addItemService = new ItemService();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event){
  //  alert(this.state.value);
    event.preventDefault();
    this.addItemService.sendData(this.state.value);
    this.props.history.push('/');
  }

  render(){
    return(
      <div className="container">
        <h2> Welcome to Add Item </h2>
            <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" className="form-control-plaintext"
                             id="add_textbox" value={this.state.value}
                              onChange={this.handleChange}/>
                    </label><br />
                    <input className="btn btn-primary" type="submit" value="Submit" />
            </form>
      </div>
    );

  }
}


export default AddItem;
