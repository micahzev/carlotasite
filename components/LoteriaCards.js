import React from 'react'
import Card from './Card'
import Modal from './Modal'
import './loteriacards.sass'
import data from '../data/english_new.json'

export default class LoteriaCards extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      showModal: false,
      data: 0
    }
    this.showModal = this.showModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  showModal(val) {
    console.log('click')
    this.setState({
      showModal: true,
      data: val
    })
  }

  closeModal() {
    this.setState({
      showModal: false
    })
  }

  render () {
    return (
      <div className="card-board">
        <div className="card-board-inner">
          <Card buttonClick={() => this.showModal(0)}  className="card-top-left" classProp="top-card camaron" headline={data.sections[0].headline} image={data.sections[0].image}/>
          <Card buttonClick={() => this.showModal(1)}className="card-top-middle-left" classProp="top-card corona" headline={data.sections[1].headline} image={data.sections[1].image}/>
          <Card buttonClick={() => this.showModal(2)}  className="card-top-middle-right" classProp="top-card paragua" headline={data.sections[2].headline} image={data.sections[2].image}/>
          <Card buttonClick={() => this.showModal(5)}  className="card-top-right" classProp="top-card escalera" headline={data.sections[5].headline} image={data.sections[5].image}/>

          <Card buttonClick={() => this.showModal(3)}  className="card-bottom-left" classProp="arana" headline={data.sections[3].headline}image={data.sections[3].image}/>
          <Card buttonClick={() => this.showModal(4)}  className="card-bottom-middle-left" classProp="tambor" headline={data.sections[4].headline}  headline2={data.sections[4].headline2}  image={data.sections[4].image}/>
          <Card buttonClick={() => this.showModal(7)} className="card-bottom-middle-right" classProp="nopal" headline={data.sections[7].headline} image={data.sections[7].image}/>
          <Card buttonClick={() => this.showModal(6)}   className="card-bottom-right" classProp="laluna" headline={data.sections[6].headline} headline2={data.sections[6].headline2} image={data.sections[6].image}/>

        </div>
        {this.state.showModal ? <Modal closeModal={this.closeModal} data={data.sections[this.state.data]} /> : null }
      </div>
    );
  }
}
