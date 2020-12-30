import styled from 'styled-components';

const ConsistencyElm = styled.div`
  padding-bottom: 24px;
  @media ${props => props.theme.MediaQueries.lg} {
    display: flex;
    justify-content: space-around;
    margin-bottom: 120px;
  }
  .ConsistencyElm__areaA,
  .ConsistencyElm__areaB {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media ${props => props.theme.MediaQueries.lg} {
      align-items: flex-start;
      width: 480px;
    }
  }
`;

const ImageProcess = styled.img`
  max-width: 100%;
  object-fit: content;
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.dark};
  font-size: 40px;
  font-weight: 700;
  line-height: 40px;
  margin-bottom: 24px;
  text-align: center;
  @media ${props => props.theme.MediaQueries.lg} {
    font-size: 50px;
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
const ImageWeek = styled.img`
  max-width: 100%;
  position: relative;
  @media ${props => props.theme.MediaQueries.lg} {
    margin-left: -30px;
    order: 1;
  }
`;

export {
  ConsistencyElm,
  Title,
  Description,
  ImageProcess,
  ImageWeek,
}