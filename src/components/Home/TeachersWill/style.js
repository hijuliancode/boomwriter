import styled from 'styled-components';

const TeachersWillElm = styled.div`
  margin-bottom: ${props => props.theme.baseSize * 12}px;
  text-align: center;
  @media ${props => props.theme.MediaQueries.lg} {
    column-gap: 32px;
    display: flex;
    margin-bottom: ${props => props.theme.baseSize * 24}px;
  }
`;
const TitleAndButton = styled.div`
  @media ${props => props.theme.MediaQueries.lg} {
    text-align: left;
    width: 25%;
  }
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
    margin-bottom: ${props => props.theme.baseSize * 10}px;
    text-align: left;
  }
`;
const FeaturesList = styled.div`
  padding-top: 24px;
  position: relative;
  @media ${props => props.theme.MediaQueries.lg} {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    width: 85%;
    position: relative;
    padding: 48px 0;
    :before {
      background-image: url('https://boomwriter.com/static/media/blackSphere.486b1118.svg');
      border-radius: 50%;
      content: "";
      display: block;
      height: 500px;
      left: 50%;
      position: absolute;
      top: 0;
      transform: translateX(-50%);
      width: 500px;
    }
    .Feature {
      margin: 0;
      :nth-child(1) { transform: translateY(32px) }
      :nth-child(3) { transform: translateY(32px) }
    }
  }
  .Feature {
    :nth-child(1):before { background-color: #ffa826; }
    :nth-child(2):before { background-color: #8e2bf0; }
    :nth-child(3):before { background-color: #ee6283; }
    :nth-child(4):before { background-color: #97d33b; }
  }
`;
const Feature = styled.article`
  align-items: flex-start;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 30px -5px rgba(5,95,230,.5);
  color: ${ props => props.theme.colors.brand1 };
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 16px;
  max-width: 390px;
  min-height: 160px;
  padding: 1.5em;
  position: relative;
  text-align: left;
  width: 100%;
  h4 {
    font-size: 20px;
    margin-bottom: 12px;
  }
  p { margin-bottom: 0; }
  :before {
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
    content: "";
    height: 75%;
    position: absolute;
    right: calc(100% - 6px);
    top: 12.5%;
    width: 6px;
  }
`;
export {
  TeachersWillElm,
  TitleAndButton,
  Title,
  FeaturesList,
  Feature,
}