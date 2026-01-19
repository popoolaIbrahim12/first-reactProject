/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled"
import heroImage from "./assets/bg-masthead.jpeg"
import icon1 from "./assets/responsive_layout.png"
import icon2 from "./assets/fillo.png"
import icon3 from "./assets/terminal.png"
import pic from "./assets/bg-showcase-1.jpeg"
import pic2 from "./assets/bg-showcase-2.jpeg"
import pic3 from "./assets/bg-showcase-3.jpeg"
import pic4 from "./assets/Screenshot.png"
import pic5 from "./assets/Screenshot1.png"

const Body = styled.section`
width:100vw;
height:100vh;
`

const Header = styled.header`
width:100%;
height:70px;
background-color:white;
display:flex;
justify-content:center;
`
const Headerwrapper = styled.div`
width:80%;
height:100%;

display:flex;
justify-content:space-between;
`
const Logo = styled.div`
width:15%;
height:100%;

font-size:1.4rem;
font-weight:normal;
display:flex;
align-items:center;
`
const Navs = styled.div`
width:30%;
height:100%;

display:flex;
justify-content:space-between;
align-items:center
`
const Nav = styled.nav`
font-size:20px
`
const Hero = styled.section`
background-image:url(${heroImage});
width:100%;
height:90%;
display:flex;
justify-content:center;
align-items:center;
`
const HeroContent = styled.div`
width:40%;
height:70%;

`
const Text = styled.h1`
font-size:3rem;
text-align:center;
font-weight:bolder;
font-family:sans-serif;
margin-top:40px;
color:white;
`

const InpBut = styled.div`
margin-top:50px;
display:flex;
gap:28px;
`
const Input = styled.input`
width:400px;
height:65px;
padding:5px;
border-radius:10px;
border:none;

`
const Button = styled.button`
width:110px;
height:62px;
border-radius:10px;
background:#1D65CF;
color:white;  
font-size:20px;
border:none;
`

const SecondSec = styled.section`
width:100vw;
height:40%;

display:flex;
justify-content:center;
margin-top:50px;
`
const Wrapper = styled.div`
width:80%;
height:100%;

display:flex;
justify-content:space-between;
`
const Box  = styled.div`
width:27%;
height:100%;

`
const ImageDiv = styled.div`
width:100%;
height:30%;
display:flex;
justify-content:center;
margin-bottom:10px;
margin-top:20px;
`
const Image = styled.img`
width:50%;
height:100%;



`
const H1 = styled.h1`
font-size:1.7rem;
font-family:sans-serif;
text-align:center;
margin-bottom:15px;
`
const P = styled.p`
font-family:sans-serif;
font-size:18px;
text-align:center;
`

const ThirdSec = styled.section`
width:100%;
height:60%;
margin-top:70px;
background:blue;
display:flex;
justify-content:space-between;
`
const FirstKid = styled.div`
width:50%;
height:100%;
background:white;
display:flex;
justify-content:center;
align-items:center;
`
const Wrap = styled.div`
width:70%;
height:60%;
margin-top:20px;
`
const SecondKid = styled.div`
width:50%;
height:100%;
background:grey;
background-image:url(${pic});
background-size:contain;
`
const Paragraph = styled.p`

font-family:sans-serif;
font-size:22px;

`
const Bold = styled.h1`
font-size:1.7rem;
font-family:sans-serif;

margin-bottom:15px;
`
const FourthSec = styled.section`
width:100%;
height:60%;


display:flex;
justify-content:space-between;
`
const FifthSec = styled.section`
width:100%;
height:60%;


display:flex;
justify-content:space-between;
`
const Background = styled.div`
width:50%;
height:100%;
background:grey;
background-image:url(${pic2});
background-size:contain;
`
const Background2 = styled.div`
width:50%;
height:100%;
background:grey;
background-image:url(${pic3});
background-size:contain;
`

const SixthSec = styled.section`
width:100%;
height:70%;
background:blue;
background-image:url(${pic4});
background-size:cover;
background-repeat:No-repeat
`

const SeventhSec = styled.section`
background-image:url(${heroImage});
width:100%;
height:40%;
display:flex;
justify-content:center;
align-items:center;
`
const Font = styled.h1`
font-size:2rem;
text-align:center;
font-weight:bolder;
font-family:sans-serif;
margin-top:40px;
color:white;
`

const EigthSec = styled.section`
width:100%;
height:20%;

background-image:url(${pic5});
background-size:contain;
background-repeat:No-repeat
`
function App() {
  return (
    <>
   <Body>
    <Header>
      <Headerwrapper>
        <Logo>Start Bootstrap</Logo>
          <Navs>
            <Nav>Home</Nav>
            <Nav>About</Nav>
            <Nav>Features</Nav>
            <Nav>Blog</Nav>
          </Navs>
      </Headerwrapper>
    </Header>
    <Hero>
     <HeroContent>
        <Text>Generate more leads with a professional landing page!</Text>
        <InpBut>
          <Input placeholder = "Email Address"/>
          <Button>Submit</Button>
        </InpBut>
     </HeroContent>
    </Hero>
    <SecondSec>
      <Wrapper>
        <Box>
<ImageDiv>    <Image src= {icon1}/></ImageDiv>
    <H1>Fully Responsive</H1>
    <P>This theme will look great on any device, no matter the size!</P>
        </Box>
        <Box>
          <ImageDiv>    <Image src= {icon2}/></ImageDiv>
    <H1>Bootstrap 5 ready</H1>
    <P>Featuring the latest build of the new Bootstrap 5 framework!

</P>
        </Box>
        <Box>
                   <ImageDiv>    <Image src= {icon3}/></ImageDiv>
    <H1>Easy to Use</H1>
    <P>Ready to use with your own content, or customize the source files!



</P>
        </Box>
      </Wrapper>
    </SecondSec>

    <ThirdSec>
   <FirstKid>
     <Wrap>
      <Bold>Fully Responsive Design</Bold>
      <Paragraph>When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</Paragraph>
     </Wrap>
   </FirstKid>
   <SecondKid></SecondKid>
    </ThirdSec>

    <FourthSec>
        <Background></Background>
          <FirstKid>
     <Wrap>
      <Bold>Updated For Bootstrap 5</Bold>
      <Paragraph>Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</Paragraph>
     </Wrap>
   </FirstKid>
    </FourthSec>

     <FifthSec>
   <FirstKid>
     <Wrap>
      <Bold>Easy to Use & Customize</Bold>
      <Paragraph>Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</Paragraph>
     </Wrap>
   </FirstKid>
   <Background2></Background2>
    </FifthSec>

    <SixthSec>
      
    </SixthSec>

     <SeventhSec>
     <HeroContent>
        <Font>Ready to get started? Sign up now!</Font>
        <InpBut>
          <Input placeholder = "Email Address"/>
          <Button>Submit</Button>
        </InpBut>
     </HeroContent>
    </SeventhSec>
    <EigthSec></EigthSec>
   </Body>
    </>
  )
}

export default App