import React from 'react'
import './loteriacards.sass'

export default class Modal extends React.Component {

  constructor(props){
    super(props)
  }

  render () {
    return (
      <div className={this.props.data.modalClass + ' modal-parent'}>
        <div className='close-modal' onClick={this.props.closeModal}>
        </div>
        <div className='modal-left'>
          <div className="modal-title">{this.props.data.headline}</div>
          {this.props.data.headline2 ? <div className="modal-title2">{this.props.data.headline2}</div> : null}
          <img className="modal-image" src={`../static/${this.props.data.image}`} alt='CARLOTA' />


          {this.props.data.bankingDetails ?
            <div className='modal-banking-details'>
              {this.props.data.bankingDetails.map((text, i) => <div className='modal-banking-details-detail' key={i*99}>{text}</div>)}
            </div>
             : null}



        </div>
        <div className='model-right'>
          {this.props.data.text.map((text, i) => <div className='model-text-paragraph' key={i}>{text}</div>)}
          {this.props.data.bios ?
            <div>
              <div className='modal-bio-headline'>
                {this.props.data.bios.headline}
              </div>

              {this.props.data.bios.committe.map((bio, i) =>
                <div className='modal-bio-box' key={i+50}>
                  <div className='modal-bio-name'>
                    {bio.name}
                  </div>
                  <div className='modal-bio-status'>
                    {bio.status}
                  </div>
                  {bio.bio.map((text, i) => <div className='modal-bio-bio' key={i-200}>{text}</div>)}
                </div>
              )}
            </div>
            :null}
        </div>
      </div>
    );
  }
}
