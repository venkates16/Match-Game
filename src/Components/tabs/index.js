import './index.css'

const Tabs = props => {
  const {obj, tabOnclick, favorite} = props
  const {tabId, displayText} = obj
  const classValue = 'tabunderLine'
  const active = favorite ? classValue : null

  const click = () => {
    tabOnclick(tabId)
  }
  return (
    <li>
      <button className={`${active} btn`} onClick={click} type="button">
        {displayText}
      </button>
    </li>

  )
}

export default Tabs

