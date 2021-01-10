import styled from 'styled-components';

const SliderTestimonialsElm = styled.div`
  @media ${props => props.theme.MediaQueries.lg} {}
`;
const Title = styled.h2`
  color: ${props => props.theme.colors.dark};
  font-size: 40px;
  line-height: 40px;
  text-align: center;
`;
const Description = styled.p`
  color: ${props => props.theme.colors.brand1}
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 24px;
  text-align: center;
  @media ${props => props.theme.MediaQueries.lg} {
    text-align: left;
  }
`;
const Testimonials = styled.div``;
const TestimonialCard = styled.article`
  background-color: ${props => props.theme.colors.white};
  border-radius: 24px;
  box-shadow: 0 0 30px -5px rgba(5,95,230,.5);
  color: ${props => props.theme.colors.brand1};
  margin: 0 auto 16px;
  padding: 1.75em;
  : > p {
    font-size: 16px;
    line-height: 20px;
    margin: 0;
  }
`;
const TwitterIcon = styled.a`
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 20px;
  color: ${props => props.theme.colors.white};
  display: flex;
  margin-bottom: 16px;
  height: 60px;
  justify-content: center;
  position: relative;
  width: 60px;
  img {
    max-width: 100%;
    width: 28px;
  }
`;
const User = styled.a`
  display: grid;
  column-gap: 16px;
  grid-template-areas:
    "area_image area_name"
    "area_image area_occupation";
  grid-template-columns: 80px 1fr;
  img {
    border-radius: 100%;
    display: block;
    grid-area: area_image;
    max-width: 100%;
    object-fit: cover;
    overflow: hidden;
    width: 80px;
  }
  strong {
    align-self: flex-end;
    color: ${props => props.theme.colors.brand1};
    font-size: 20px;
    grid-area: area_name;
  }
  p {
    color: ${props => props.theme.colors.muted};
    grid-area: area_occupation;
  }
`;

export {
  SliderTestimonialsElm,
  Title,
  Description,
  Testimonials,
  TestimonialCard,
  TwitterIcon,
  User,
}