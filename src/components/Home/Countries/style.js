import styled from 'styled-components';

const CountriesElm = styled.div`
  margin-bottom: ${props => props.theme.baseSize * 12}px;
  text-align: center;
  @media ${props => props.theme.MediaQueries.lg} {
    margin-bottom: ${props => props.theme.baseSize * 24}px;
  }
`;
const Title = styled.h2`
  color: ${props => props.theme.colors.dark};
  font-size: 24px;
  line-height: 24px;
  margin-bottom: ${props => props.theme.baseSize * 6}px;
  text-align: center;
  @media ${props => props.theme.MediaQueries.lg} {
    color: ${props => props.theme.colors.brand1};
    margin-bottom: ${props => props.theme.baseSize * 15}px;
    font-size: 50px;
    line-height: 50px;
  }
`;
const CountriesImage = styled.figure`
  img {
    max-width: 100%;
  }
`;

export {
  CountriesElm,
  Title,
  CountriesImage,
}