import styled from 'styled-components';

const TheMissingPieceElm = styled.section`
  @media ${props => props.theme.MediaQueries.lg} {}
`;

const TitleAndDescription = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h2`
  color: ${props => props.theme.colors.dark};
  font-size: 40px;
  line-height: 40px;
  text-align: center;
`;
const Description = styled.p`
  color: ${props => props.theme.colors.brand1};
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  text-align: center;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;
const CardPiece = styled.article`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 30px -5px rgba(5,95,230,.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 1em 1em;
  padding: 1.5em;
  position: relative;
  text-align: left;
  transition: all 1.5s ease;
  h3 {
    color: ${ props => props.theme.colors.brand1 }
    font-size: 20px;
    line-height: 26px;
  }
  p {
    color: ${ props => props.theme.colors.brand1 }
    font-size: 16px;
    line-height: 26px;
  }
`;
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