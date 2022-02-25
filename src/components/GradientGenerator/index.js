import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  GradientGeneratorContainer,
  ResponsiveContainer,
  Heading,
  DirectionsDescription,
  GradientDirectionList,
  ColorsPickersDescription,
  ColorPickerContainer,
  CustomInputAndColorContainer,
  ColorValue,
  CustomInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    gradientDirection: gradientDirectionsList[0].value,
    firstGradientColor: '#8ae323',
    secondGradientColor: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeFirstGradientColor = event => {
    this.setState({firstGradientColor: event.target.value})
  }

  onChangeSecondGradientColor = event => {
    this.setState({secondGradientColor: event.target.value})
  }

  onChangeGradientDirection = value => {
    this.setState({gradientDirection: value})
  }

  onGenerateGradientValue = () => {
    const {
      firstGradientColor,
      secondGradientColor,
      gradientDirection,
    } = this.state
    this.setState({
      gradientValue: `to ${gradientDirection}, ${firstGradientColor}, ${secondGradientColor}`,
    })
  }

  render() {
    const {
      gradientDirection,
      firstGradientColor,
      secondGradientColor,
      gradientValue,
    } = this.state
    return (
      <GradientGeneratorContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <ResponsiveContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <DirectionsDescription>Choose Direction</DirectionsDescription>
          <GradientDirectionList>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                key={each.directionId}
                gradientDirectionDetails={each}
                onChangeGradientDirection={this.onChangeGradientDirection}
                isActive={each.value === gradientDirection}
              />
            ))}
          </GradientDirectionList>
          <ColorsPickersDescription>Pick the Colors</ColorsPickersDescription>
          <ColorPickerContainer>
            <CustomInputAndColorContainer>
              <ColorValue>{firstGradientColor}</ColorValue>
              <CustomInput
                type="color"
                value={firstGradientColor}
                onChange={this.onChangeFirstGradientColor}
              />
            </CustomInputAndColorContainer>
            <CustomInputAndColorContainer>
              <ColorValue>{secondGradientColor}</ColorValue>
              <CustomInput
                type="color"
                value={secondGradientColor}
                onChange={this.onChangeSecondGradientColor}
              />
            </CustomInputAndColorContainer>
          </ColorPickerContainer>
          <GenerateButton onClick={this.onGenerateGradientValue}>
            Generate
          </GenerateButton>
        </ResponsiveContainer>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
