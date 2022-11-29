import styled from 'styled-components';

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    height: 80%;
  }
`
export const ContactForm = styled.form`
background: linear-gradient(to right bottom, #6B0AC9, #36EAEF);
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: flex;

  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  padding:  30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }
  
  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
`
export const ContactFormTextarea = styled.textarea`
padding: 16px 16px;
margin-bottom: 32px;
height:150px;
border-radius: 4px;
`
export const ContactFormInput = styled.input`
padding: 16px 16px;
margin-bottom: 32px;
border-radius: 4px;
`
export const ContactFormLabel = styled.label`
margin-bottom: 8px;
font-size: 14px;
color: #fff;
`
export const InfoContainer = styled.div`
    color:#fff;
    background: $white;
    
    backgroundColor: lightblue;

    @media screen and (max-width: 768px){
        padding: 0px 0;
    }
`
export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    max-width: 1100px;
    margin-right: auto;
    

    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`
export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col2 col1';
    @media screen and (max-width: 768px) {
    grid-template-areas: 'col2' 'col1';
    }
`
export const Column1 = styled.div`
    margin-bottom:15px;
    padding: 0 15px;
    grid-area: col1;
`
export const Column2 = styled.div`
    margin-bottom:15px;
    grid-area: col2;
    @media screen and (max-width: 768px) {
        padding: 0 ;
    }
`
export const TextWrapper = styled.div`
    max-width:540px;
    padding-top:0;
    padding-bottom:60px;
`
export const TopLine = styled.p`
    color:#23b5b5;
    font-size:16px;
    line-height:16px;
    font-weight:700;
    letter-spacing:1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`
export const Heading = styled.h1`
    margin-bottom:24px;
    font-size:48px;
    line-height:1.1;
    font-weight:600;
    color:  #010606;
    @media screen and (max-width: 480px) {
        font-size: 32px;
      }
`
export const Subtitle = styled.p`
    max-width:440px;
    margin-bottom:35px;
    font-size:18px;
    line-height:24px;
    color:  #010606;
`
export const ContactFormButton = styled.input`
border-radius:50px;
background:#000;
white-space:nowrap;
padding : 10px 22px;
color : #fff;
font-size:16px;
outline:none;
border:none;
cursor:pointer;
transition : all 0.2s ease-in-out;
text-decoration : none;
&:hover {
    transition: all 0.2s ease-in-out;
    background:#fff;
    color: #010606;
}
`