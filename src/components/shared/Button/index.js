import React from 'react'
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ButtonBase = css`
  border-radius: ${props => props.theme.isRadius(2)};
  box-shadow: 0 4px 12px rgba(0,0,0,.1);
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  max-width: 100%;
  outline: none;
  padding: .75em 2em;
  text-align: center;
  transition: all .3s ease;
  width: 100%;
`;
const PrimaryType = css`
  background: ${props => props.theme.colors.primary};
  border: 1.5px solid ${props => props.theme.colors.primary};
  :hover, :focus {
    background-color: ${props => props.theme.colors.white};
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary}
  }
`;
const SecondaryType = css`
  background: ${props => props.theme.colors.secondary};
  border: 1.5px solid ${props => props.theme.colors.secondary};
  :hover, :focus {
    background-color: ${props => props.theme.colors.white};
    border-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.secondary}
  }
`;

const ButtonPrimary = styled.button`
  ${ButtonBase}
  ${PrimaryType}
`;
const ButtonSecondary = styled.button`
  ${ButtonBase}
  ${SecondaryType}
`;

const LinkPrimary = styled.a`
  ${ButtonBase}
  ${PrimaryType}
  text-decoration: none;
`;
const LinkSecondary = styled.a`
  ${ButtonBase}
  ${SecondaryType}
  text-decoration: none;
`;

const Button = ( props ) => {
  return (
    <>
    { (props.type) === 'link'
      ? renderLink(props)
      : renderButton(props)
    }
    </>
  );
}

const renderButton = ({ type, value, style = 'primary', width}) => {
  return (
    <>
    {
      (style === 'primary')
      ? <ButtonPrimary type={ type } style={ { width: width } } >{ value }</ButtonPrimary>
      : <ButtonSecondary type={ type } style={ { width: width } }>{ value }</ButtonSecondary>
    } 
    </>
  )
}

const renderLink = ({ value, style = 'primary', url, width}) => {
  return (
    <>
    {
      (style === 'primary')
      ? <LinkPrimary href={ url } class={`button button-${style}`}style={ { width: width } } >{ value }</LinkPrimary>
      : <LinkSecondary href={ url } class={`button button-${style}`} style={ { width: width } }>{ value }</LinkSecondary>
    } 
    </>
  )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  style: PropTypes.string,
  url: PropTypes.string,
}

export default Button;