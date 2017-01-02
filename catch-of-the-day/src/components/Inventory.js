import React from 'react';
import AddFishForm from './AddFishForm'

class Inventory extends React.Component{
  constructor(){
    super();
    this.renderInventory = this.renderInventory.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e,key){
    const fish =  this.props.fishes[key];
    const updatedFish = {
      ...fish,
      [e.target.name]: e.target.value,
    }
    this.props.updateFish(key,updatedFish);
  }

  renderInventory(key) {
    const fish = this.props.fishes[key];
    return(
      <div className="fish-edit" key={key}>
        <input name='name'value={fish.name} type="text" placeholder='Fish Name'
               onChange={(e) => this.handleChange(e,key)}/>
        <input name='price'value={fish.price} type="text" onChange={(e) => this.handleChange(e,key)} placeholder='Fish Price'/>
        <select name='status'value={fish.status} onChange={(e) => this.handleChange(e,key)} placeholder='Fish Status' >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea name='desc'value={fish.desc} onChange={(e) => this.handleChange(e,key)} placeholder='Fish Desc'></textarea>
        <input name='image'value={fish.image}type="text" onChange={(e) => this.handleChange(e,key)} placeholder='Fish Image'/>
        <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
      </div>

  )}
  render(){
    return(
      <div>
      <h2>Inventory</h2>
      {Object.keys(this.props.fishes).map(this.renderInventory)}
      <AddFishForm addFish={this.props.addFish}/>
      <button onClick={this.props.loadSamples}>Load Sample Fishes
      </button>
      </div>
     )
  }
}
Inventory.propTypes = {
  removeFish: React.PropTypes.func.isRequired,
  updateFish: React.PropTypes.func.isRequired,
  loadSamples: React.PropTypes.func.isRequired,
  fishes: React.PropTypes.object,

}
export default Inventory;
