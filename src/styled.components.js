import styled from 'styled-components';

export const PrimaryButton = styled.button`
    background-color: ${(props) => props.bg};
    color: ${(props) => props.color};
    padding: ${(props) => props.padding};
    border-radius: ${(props) => props.radius};
    outline: none;
    border: none;
    font-size: 14px;
    font-weight: ${(props) => props.radius};
    transition: 0.3s;
    margin-top: ${(props) => props.marginTop};
  
`;