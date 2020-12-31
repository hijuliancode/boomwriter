import styled from 'styled-components';

const TheMissingPieceElm = styled.section`
  @media ${props => props.theme.MediaQueries.lg} {}
`;

const TitleAndDescription = styled.div``;
const Title = styled.h2`
  text-align: center;
`;
const Description = styled.p``;
const Items = styled.div``;
const CardPiece = styled.article``;
const BoxImageDemo = styled.figure``;

export {
  TheMissingPieceElm,
  TitleAndDescription,
  Title,
  Description,
  Items,
  CardPiece,
  BoxImageDemo,
}