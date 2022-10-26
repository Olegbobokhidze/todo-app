import mobileLight from "./images/bg-mobile-light.jpg";
import mobileDark from "./images/bg-mobile-dark.jpg";
import desktopDark from "./images/bg-desktop-dark.jpg";
import desktopLight from "./images/bg-desktop-light.jpg";
import { createGlobalStyle } from "styled-components";
export const lightTheme = {
  backgroundImgMobile: `url(${mobileLight})`,
  backgroundImgDesktop: `url(${desktopLight})`,
  backgroundColor: "#FFF",
  backBoxColor: "#FFF",
  fontColor: "#494C6B",
  bottom: "solid 1px #E3E4F1",
  boxShadow: "10px 10px 20px 1px rgba(194, 195, 214, 0.3)",
  checkedColor: "#D1D2DA",
  iconTransition: "1.5s",
  iconTransform: "rotate(360deg)",
  footerColorP: "#9495A5",
  footerHoverP: "#494C6B",
};
export const darkTheme = {
  backgroundImgMobile: `url(${mobileDark})`,
  backgroundImgDesktop: `url(${desktopDark})`,
  backgroundColor: "#171823",
  backBoxColor: "#25273D",
  fontColor: "#C8CBE7",
  bottom: "solid 1px #393A4B",
  boxShadow: "10px 10px 20px 1px rgba(0, 0, 0, 0.5)",
  checkedColor: "#4D5067",
  iconTransition: "2.0s",
  iconTransform: "rotate(720deg)",
  footerColorP: "#5B5E7E",
  footerHoverP: "#E3E4F1",
};
export const GlobalStyle = createGlobalStyle`
body{
  font-family: 'Outfit', sans-serif;
  background-image: ${(props) => props.theme.backgroundImgMobile};
  background-repeat: no-repeat;
  background-size: 100vw 25vh;
  background-color: ${(props) => props.theme.backgroundColor};
  display: flex;
  justify-content:center;
  align-items:center;
  width:100vw;
  overflow-x:hidden;
  transition: background-color 0.70s;
  transition: background-image 0.70s;
  @media screen and (min-width: 750px) {
    background-size: 100vw 30vh;
    background-image: ${(props) => props.theme.backgroundImgDesktop};
  }
  @media screen and (min-width: 1440px) {
    background-size: 100vw 35vh;
  }
}
`;
