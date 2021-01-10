import styled from 'styled-components';

const CountriesElm = styled.div`
  text-align: center;
  @media ${props => props.theme.MediaQueries.lg} {}
`;
const Title = styled.h2`
  color: ${props => props.theme.colors.dark};
  font-size: 32px;
  line-height: 32px;
  text-align: center;
  @media ${props => props.theme.MediaQueries.lg} {
    font-size: 40px;
    line-height: 40px;
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