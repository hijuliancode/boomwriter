import styled from 'styled-components';

const KeyFeaturesElm = styled.div`
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
    text-align: left;
  }
`;
const FeaturesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;
const Feature = styled.div`
  align-items: center;
  border-radius: 100%;
  box-shadow: 0 0 20px -5px rgba(5,95,230,.5);
  color: ${props => props.theme.colors.brand1};
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: center;
  padding: 16px;
  position: relative;
  width: 150px;
  :hover {
    .FeatureTooltip {
      display: block;
    }
  }
`;
const FeatureImage = styled.figure`
  height: 48px;
  margin: 0 0 8px;
  img {
    max-height: 100%;
    max-width: 100%;
  }
`;
const FeatureName = styled.p`
  text-align: center;
`;
const FeatureTooltip = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 4px 0 #b4cff7;
  display: none;
  padding: .5em 1em;
  position: absolute;
  text-align: left;
  top: 100px;
  width: 250px;
  z-index: 4;
  strong {
    display: block;
    margin-bottom: 8px;
  }
  :before {
    border-color: transparent transparent #fff #fff;
    border-style: solid;
    border-width: 5px;
    box-shadow: -2px 2px 4px 0 #b4cff7;
    box-sizing: border-box;
    content: '';
    height: 0;
    position: absolute;
    right: calc(50% - 14px);
    top: 0;
    transform-origin: 0 0;
    transform: rotate(135deg);
    width: 0;
  }
`;

export {
  KeyFeaturesElm,
  Title,
  FeaturesList,
  Feature,
  FeatureImage,
  FeatureName,
  FeatureTooltip,
}