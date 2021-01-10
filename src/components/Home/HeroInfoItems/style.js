import styled from 'styled-components';

const HeroInfoItemsElm = styled.section`
  display: none;
  @media ${props => props.theme.MediaQueries.lg} {
    display: flex;
    justify-content: space-between;
    margin-bottom: 120px;
    padding-top: 40px;
  }
`;

const ItemInfo = styled.div`
  display: grid;
  grid-template-areas:
    "itemInfo_img itemInfo_text"
    "itemInfo_img itemInfo_desc";
  img {
    grid-area: itemInfo_img;
    margin-right: 12px;
  }
  p {
    color: ${props => props.theme.colors.dark};
    font-size: 50px;
    font-weight: 700;
    grid-area: itemInfo_text;
    line-height: 1;
    margin: 0;
    text-align: center;
  }
  strong {
    color: ${props => props.theme.colors.dark};
    font-size: 18px;
    grid-area: itemInfo_desc;
    text-align: center;
  }
`;

export {
  HeroInfoItemsElm,
  ItemInfo,
}