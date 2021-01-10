import styled from 'styled-components';

const AwardsElm = styled.div`
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
const TitleImage = styled.img`
  display: block;
  margin: 0 auto 12px;
  max-width: 100%;
`;
const Description = styled.p`
  color: ${props => props.theme.colors.brand1}
  margin-bottom: 24px;
  text-align: center;
  @media ${props => props.theme.MediaQueries.lg} {
    text-align: left;
  }
`;
const AwardsImagesBox = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.white};
  border-radius: 20px;
  box-shadow: 0 0 30px -5px rgba(5,95,230,.5);
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  padding: 2em;
`;
const AwardImage = styled.img`
  max-width: 100%;
`;

export {
  AwardsElm,
  Title,
  TitleImage,
  Description,
  AwardsImagesBox,
  AwardImage,
}