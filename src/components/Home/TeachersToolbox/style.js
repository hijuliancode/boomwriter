import styled from 'styled-components';

const TeachersToolboxElm = styled.div`
  margin-bottom: ${props => props.theme.baseSize * 12}px;
  @media ${props => props.theme.MediaQueries.lg} {}
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.dark};
  font-size: 24px;
  line-height: 24px;
  margin-bottom: ${props => props.theme.baseSize * 6}px;
  text-align: center;
  @media ${props => props.theme.MediaQueries.lg} {
    font-size: 50px;
    line-height: 50px;
    margin-bottom: ${props => props.theme.baseSize * 15}px;
  }
`;
const CardsSlider = styled.div`
  @media ${props => props.theme.MediaQueries.lg} {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(3, 1fr);
  }
`;
const Card = styled.article`
  background-color: ${props => props.theme.colors.white};
  border-radius: 10px;
  box-shadow: 0 10px 30px -5px rgba(5,95,230,.2);
  color: ${props => props.theme.colors.brand1};
  margin: 0 0 2em;
  padding: 2em;
  position: relative;
  text-align: left;
  transition: height .2s ease-in;
  @media ${props => props.theme.MediaQueries.lg} {
    display: flex;
    flex-direction: column;
    button {
      margin-top: auto;
      margin-right: auto;
    }
  }
  :nth-child(1) {
    figure {
      background-color: #f18056;
    }
  }
  :nth-child(2) {
    figure {
      background-color: ${props => props.theme.colors.brand1};
    }
  }
  :nth-child(3) {
    figure {
      background-color: ${props => props.theme.colors.secondary};
    }
  }
`;
const CardImage = styled.figure`
  align-items: center;
  border-radius: 100%;
  display: flex;
  height: 120px;
  justify-content: center;
  margin: 0 auto 24px;
  object-fit: cover;
  padding: 16px;
  width: 120px;
  @media ${props => props.theme.MediaQueries.lg} {
    margin: -60px auto 24px 0;
  }
  img {
    max-width: 100%;
  }
`;
const CardTitle = styled.h3`
  color: ${props => props.theme.colors.brand1};
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  margin-bottom: 8px;
`;
const CardDescription = styled.p`
  color: ${props => props.theme.colors.brand1};
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  margin-bottom: 16px;
`;
const SliderArrow = styled.div``;

export {
  TeachersToolboxElm,
  Title,
  CardsSlider,
  Card,
  CardImage,
  CardTitle,
  CardDescription,
  SliderArrow,
}