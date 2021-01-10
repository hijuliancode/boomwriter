import styled from 'styled-components';

const TheMissingPieceElm = styled.section`
  margin-bottom: ${props => props.theme.baseSize * 12}px;
  @media ${props => props.theme.MediaQueries.lg} {}
`;

const TitleAndDescription = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
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
const Description = styled.p`
  color: ${props => props.theme.colors.brand1}
  margin-bottom: 24px;
  text-align: center;
  @media ${props => props.theme.MediaQueries.lg} {
    text-align: left;
  }
`;
const Items = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;
const CardPiece = styled.article`
  background-color: ${ props => props.theme.colors.white };
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
    color: ${ props => props.theme.colors.brand1 };
    font-size: 20px;
    line-height: 26px;
  }
  p {
    color: ${ props => props.theme.colors.brand1 };
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