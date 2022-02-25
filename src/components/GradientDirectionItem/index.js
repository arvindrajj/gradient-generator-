import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionDetails, onChangeGradientDirection, isActive} = props
  const {displayText, value} = gradientDirectionDetails
  const changeGradientDirection = () => {
    onChangeGradientDirection(value)
  }

  return (
    <ListItem>
      <DirectionButton
        type="button"
        onClick={changeGradientDirection}
        isActive={isActive}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
