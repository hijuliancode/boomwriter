import styled from 'styled-components';

const CountriesElm = styled.div`
  margin-bottom: ${props => props.theme.baseSize * 12}px;
  text-align: center;
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