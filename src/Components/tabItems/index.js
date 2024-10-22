import './index.css'

const TabItems = props => {
  const {obj, findUniqueImg} = props
  const { thumbnailUrl} = obj
  const click = () => {
    findUniqueImg(thumbnailUrl)
  }
  return (
    <li>
      <button type="button">
        <img src={thumbnailUrl} onClick={click} alt={thumbnailUrl} />
      </button>
    </li>
  )
}

export default TabItems
