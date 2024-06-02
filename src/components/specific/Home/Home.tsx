import homeImage from '../../../assets/home-image.svg'
import Button from '../../common/Button/Button'
import Card from '../../common/Card/Card'
import { GradientImageResize, HomeContainer, HomeTextContainer, ImageContainer, MainParagraph, SecundaryParagraph } from './Home.styled'

const Home = () => {
  return (
    <HomeContainer turncolumnontablet={true}>
			<ImageContainer>
				<GradientImageResize src={homeImage} alt='Imagem principal'/>
				<Card top='30%' right='72%' icon='illustration'/>
				<Card top='37%' right='18%' icon='uiUx'/>
			</ImageContainer>
			<HomeTextContainer>
				<MainParagraph>
					Your Learning Journey Begins Here!
				</MainParagraph>
				<SecundaryParagraph>
					where knowledge meets convenience in the palm of your hand!
				</SecundaryParagraph>
				<Button width='196px' text='Get Started'></Button>
			</HomeTextContainer>
    </HomeContainer>
  )
}

export default Home