const Section = (props) => (
  <div className="section" name={props.info.headline}>
    <div className="section-header">
      {props.info.headline}
    </div>
    <div className="section-body">
      {props.info.text}
    </div>
  </div>
)

export default Section
