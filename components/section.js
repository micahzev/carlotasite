import './section.sass'

const Section = (props) => (
  <div className="section" name={props.info.headline}>
    <div className="section-header">
      {props.info.headline}
    </div>
    <div className="section-body">
      {props.info.text.map((text) =>
        <div className="section-body-paragraph">
          {text}
        </div>
      )}
    </div>
    {props.info.bios ?
      <div className="bios">
      </div>
       : null}
  </div>
)

export default Section
