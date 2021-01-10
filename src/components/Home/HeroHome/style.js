import styled, { css } from 'styled-components';

const TextAlign = css`
  text-align: center;
  @media ${props => props.theme.MediaQueries.lg} {
    text-align: left;
  }
`;
const HeroHomeElm = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  justify-content: center;
  margin-bottom: 0;
  position: relative;
  @media ${props => props.theme.MediaQueries.lg} {
    flex-direction: row;
    margin-bottom: 120px;
    .HeroHomeElm__sideA,
    .HeroHomeElm__sideB {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;
      position: relative;
      width: 50%;
    }
  }
  .HeroHomeElm__sideA,
  .HeroHomeElm__sideB {
    ${TextAlign}
  }
`;
const ImageLogo = styled.img`
  display: none;
  @media ${props => props.theme.MediaQueries.lg} {
    display: block;
    margin-bottom: ${props => props.theme.baseSize * 8}px;
  }
`;
const Title = styled.h1`
  color: ${props => props.theme.colors.brand1};
  font-size: ${props => props.theme.baseSize * 10}px;
  margin-bottom: ${props => props.theme.baseSize * 4}px;
  span {
    color: ${props => props.theme.colors.primary};
  }
`;
const Description = styled.p`
  color: ${props => props.theme.colors.brand1};
  font-size: ${props => props.theme.baseSize * 5}px;
  margin-bottom: ${props => props.theme.baseSize * 6}px;
  @media ${props => props.theme.MediaQueries.lg} {
    margin-bottom: ${props => props.theme.baseSize * 8}px;
  }
`;
const Recommended = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.baseSize * 5}px;
  margin-top: ${props => props.theme.baseSize * 6}px;
  @media ${props => props.theme.MediaQueries.lg} {
    display: none;
  }
`;
const HeroImage = styled.img`
  display: none;
  @media ${props => props.theme.MediaQueries.lg} {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;

export {
  HeroHomeElm,
  ImageLogo,
  Title,
  Description,
  Recommended,
  HeroImage,
}