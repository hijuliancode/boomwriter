import styled from 'styled-components';

const TeachersWillElm = styled.div`
  text-align: center;
  @media ${props => props.theme.MediaQueries.lg} {}
`;
const Title = styled.h2`
  color: ${props => props.theme.colors.dark};
  font-size: 40px;
  line-height: 40px;
  text-align: center;
`;
const FeaturesList = styled.div`
  padding-top: 24px;
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
  Title,
  FeaturesList,
  Feature,
}