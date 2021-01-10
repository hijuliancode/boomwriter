import styled from 'styled-components';

const AwardsElm = styled.div`
  @media ${props => props.theme.MediaQueries.lg} {}
`;
const Title = styled.h2`
  color: ${props => props.theme.colors.dark};
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  @media ${props => props.theme.MediaQueries.lg} {
    font-size: 40px;
    line-height: 40px;
  }
`;
const TitleImage = styled.img`
  display: block;
  margin: 0 auto 12px;
  max-width: 100%;
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
  AwardsImagesBox,
  AwardImage,
}