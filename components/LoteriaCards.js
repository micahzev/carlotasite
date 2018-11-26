import React from 'react'
import Card from './Card'
import './loteriacards.sass'
import data from '../data/english_new.json'

export default class LoteriaCards extends React.Component {

  constructor(props){
    super(props)
  }

  render () {
    return (
      <div className="card-board">
        <div className="card-board-inner">
          <Card className="card-top-left" classProp="top-card camaron" headline={data.sections[0].headline} image={data.sections[0].image}/>
          <Card className="card-top-middle" classProp="top-card corona" headline={data.sections[1].headline} image={data.sections[1].image}/>
          <Card className="card-top-right" classProp="top-card paragua" headline={data.sections[2].headline} image={data.sections[2].image}/>
          <Card className="card-bottom-left" classProp="spider" headline={data.sections[3].headline}image={data.sections[3].image}/>
          <Card className="card-bottom-middle" classProp="tambor" headline={data.sections[4].headline}  headline2={data.sections[4].headline2}  image={data.sections[4].image}/>
          <Card className="card-bottom-right" classProp="escalera" headline={data.sections[5].headline} image={data.sections[5].image}/>
        </div>
      </div>
    );
  }
}
