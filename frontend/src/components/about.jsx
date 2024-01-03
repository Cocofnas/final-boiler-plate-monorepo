import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import styled from "styled-components";
import alexandra from "../assets/alexandra.jpg";
import ulrika from "../assets/ulrika.png";
import malin from "../assets/newmalin.png";
import Techlogo from "../assets/technigologosmall.png";

const AboutWrapper = styled.div`
  margin: 0 auto;
  padding: 20px;
  background-color: white; /* Your chosen color */
  min-height: 100vh; /* Make sure it covers the full height of the viewport */
`;

const IntroParagraph = styled.p`
  font-size: 24px;
  margin-bottom: 30px;
  color: #01999a;
  text-align: center;
  font-family: "JosefinSans";
`;

const TeamSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const TeamMember = styled.div`
  flex-basis: calc(33.33% - 20px);
  margin-bottom: 20px;
  text-align: center;
  color: #01999a;
  font-family: Montserrat, sans-serif;
`;

const TeamMemberPhoto = styled.img`
  max-width: 100%;
  border-radius: 5px;
  height: 190px;
  width: 120px;
`;

const TeamMemberName = styled.h3`
  font-size: 30px;
  font-family: "JosefinSans";
  margin: 10px 10px;
  margin-top: 30px;
`;

const TeamMemberDescription = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
`;

const PortfolioLink = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: #0e6e6e;
`;

const TechnigoLogo = styled.img`
  height: 60px;
  width: auto;
`;

// AboutPage component
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <AboutWrapper>
        <IntroParagraph>
          Final project made for the &nbsp;
          <a
            href="https://www.technigo.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TechnigoLogo src={Techlogo} alt="Technigo Logo" />
          </a>
          &nbsp; Web Developer Footcamp of Fall 2023. <br></br>
          <br></br>This is a labour of sweat, tired knuckles and love - please
          feel free to reach out to any of us!
        </IntroParagraph>
        <TeamSection>
          <TeamMember>
            <TeamMemberPhoto src={malin} alt="Malin Lundhe" />
            <TeamMemberName>Malin Lunde</TeamMemberName>
            <TeamMemberDescription>
              Malin has the brains comparable to a filing cabinet, she can bring
              out any comment made on a subject from three weeks ago and deliver
              it with a "I think I heard something about that.." and then
              explain the whole thing in detail via excellent notes. Malin is an
              integral part of the team and this page would not exist without
              her!
            </TeamMemberDescription>
            <PortfolioLink
              href="portfolio1-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </PortfolioLink>
          </TeamMember>

          <TeamMember>
            <TeamMemberPhoto src={ulrika} alt="Ulrika Gålnander" />
            <TeamMemberName>Ulrika Gålnander</TeamMemberName>
            <TeamMemberDescription>
              For me when going out to restaurants, the enviroment can kill the
              best of foods. As soon as Alexandra mentioned her idea I was
              onboard as I felt "I would use that" instantly. We have a plethora
              of restaurants in Stockholm, but very little info to go on for the
              vibe, apart from looking through endless reviews - this changes
              that!
            </TeamMemberDescription>
            <PortfolioLink
              href="portfolio2-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </PortfolioLink>
          </TeamMember>

          <TeamMember>
            <TeamMemberPhoto src={alexandra} alt="Alexandra Meija" />
            <TeamMemberName>Alexandra Meija</TeamMemberName>
            <TeamMemberDescription>
              For me a foodie is someone who really loves food, and not just the
              high- end fancy pants restaurants, but just plain good food,
              either it is an amazing fishcake you buy for 10 bahts from a
              street vendor or having a seven course meal at Ekstedt. And for me
              the experience is enhanced when you find that perfect spot that
              suits you and the people you are with, that you can hold a
              conversation and that it's cozy. I always look for dogfriendly
              places so I can take with me my furrycompanion. I have a lot of
              favorites, but if I had to pick one place it's Bar Doma, it works
              for everything, and yes, it's dog friendly. An extra neat feature
              is the dessertcart which gets rolled out after every meal.
            </TeamMemberDescription>
            <PortfolioLink
              href="https://alexandrameijaportfolio.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </PortfolioLink>
          </TeamMember>
        </TeamSection>
      </AboutWrapper>
      <Footer />
    </>
  );
};

export default AboutPage;
