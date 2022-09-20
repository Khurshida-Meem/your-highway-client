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

export const ImgZoom = styled.div`
height: 100%;
width: 100%;
background: ${(props) => props.url};
background-position:center;
  -webkit-transition: all .5s ease;
  -moz-transition: all .5s ease;
  -ms-transition: all .5s ease;
  -o-transition: all .5s ease;
  transition: all .5s ease;
&:hover {
    -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2);
  }
`

export const BannerBg = styled.div`
  background: ${(props) =>
    `url(${props.background}) no-repeat center`};
  height: 60vh;
  background-size: cover;
  
`; 