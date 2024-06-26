import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import styled from "styled-components";
import alexandra from "../assets/alexandra.jpg";
import ulrika from "../assets/ulrika.png";
import malin from "../assets/newmalin.png";
import Techlogo from "../assets/technigologosmall.png";

const tablet = `(min-width: 640px)`;
const desktop = `(min-width: 1007px)`;

const AboutWrapper = styled.div`
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  min-height: 100vh;
`;

const IntroParagraph = styled.p`
  font-size: 15px;
  margin-bottom: 5px;
  padding: 10px 5px 10px 5px;
  color: #01999a;
  border: solid #01999a;
  border-radius: 10px;
  text-align: center;

  @media ${tablet} {
    font-size: 24px;
  }
  @media ${desktop} {
    font-size: 24px;
  }
`;

const TeamSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
  @media ${desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const TeamMember = styled.div`
  flex-basis: calc(33.33% - 20px);
  margin-bottom: 20px;
  text-align: center;
  color: #01999a;
  font-family: "JosefinSans";
`;

const TeamMemberPhoto = styled.img`
  max-width: 100%;
  border-radius: 5px;
  height: 150px;
  width: auto;

  @media ${tablet} {
    max-width: 100%;
    border-radius: 5px;
    height: 190px;
    width: 120px;
  }
  @media ${desktop} {
    max-width: 100%;
    border-radius: 5px;
    height: 190px;
    width: 120px;
  }
`;

const TeamMemberName = styled.h3`
  font-size: 30px;
  font-family: "JosefinSans";
  margin: 10px 10px;
  margin-top: 30px;
  text-decoration: none;
`;

const TeamMemberDescription = styled.p`
  font-size: 12px;
  margin-bottom: 5px;
  margin-right: 5px;

  @media ${tablet} {
    font-size: 15px;
    margin-bottom: 5px;
    margin-right: 5px;
  }
  @media ${desktop} {
    font-size: 15px;
    margin-bottom: 5px;
    margin-right: 5px;
  }
`;

const PortfolioLink = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: #0e6e6e;
`;

const GithubLink = styled.a`
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
        <TeamSection>
          <TeamMember>
            <a
              href="https://www.linkedin.com/in/malin-lunde-9a4558297/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TeamMemberPhoto src={malin} alt="Malin Lundhe" />
            </a>
            <TeamMemberName>Malin Lunde</TeamMemberName>

            <TeamMemberDescription>
              Malin has an incredible brain comparable to a filing cabinet, she
              can bring out any comment made on a subject from three weeks ago
              and deliver it with a "I think I heard something about that.." and
              then explain the whole thing in detail via excellent notes. Malin
              is an integral part of the team and this page would not exist
              without her!
            </TeamMemberDescription>
            <br></br>
            <GithubLink
              href="https://github.com/malinlunde"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </GithubLink>
            <br></br>
            <br></br>

            <PortfolioLink
              href="https://malin-lunde-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </PortfolioLink>
          </TeamMember>

          <TeamMember>
            <a
              href="https://www.linkedin.com/in/ulrika-gålnander-076563134"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TeamMemberPhoto src={ulrika} alt="Ulrika Gålnander" />
            </a>
            <TeamMemberName>Ulrika Gålnander</TeamMemberName>

            <TeamMemberDescription>
              The wrong enviroment or "mood" can kill any gourmet meal.<br></br>{" "}
              As soon as Alexandra mentioned her idea I was onboard as I
              instantly felt "I would use that". <br></br>We have a plethora of
              restaurants in Stockholm, but very little info to go on for the
              vibe, apart from looking through endless reviews - this changes
              that!
            </TeamMemberDescription>
            <br></br>

            <GithubLink
              href="https://github.com/Shiqwan"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </GithubLink>
            <br></br>

            <br></br>
            <PortfolioLink
              href="portfolio1-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </PortfolioLink>
          </TeamMember>
          <TeamMember>
            <a
              href="https://www.linkedin.com/in/alexandra-meija-0757403b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TeamMemberPhoto src={alexandra} alt="Alexandra Meija" />
            </a>
            <TeamMemberName>Alexandra Meija</TeamMemberName>

            <TeamMemberDescription>
              For me a foodie is someone who really loves food, and not just the
              high- end fancy pants restaurants, but just plain good food,
              either it is an amazing fishcake you buy for 10 bahts from a
              street vendor or having a seven course meal at Ekstedt. <br></br>{" "}
              <br></br>
              And for me the experience is enhanced when you find that perfect
              spot that suits you and the people you are with, that you can hold
              a conversation and that it's cozy. <br></br>I always look for
              dogfriendly places so I can take with me my furry companion.
              <br></br>I have a lot of favorites, but if I had to pick one place
              it's Bar Doma, it works for everything, and yes, it's dog
              friendly. <br></br>An extra neat feature is the dessert-cart which
              gets rolled out after every meal.
            </TeamMemberDescription>
            <br></br>

            <GithubLink
              href="https://github.com/Cocofnas"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </GithubLink>
            <br></br>
            <br></br>

            <PortfolioLink
              href="https://alexandrameijaportfolio.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </PortfolioLink>
          </TeamMember>
        </TeamSection>
        <IntroParagraph>
          Final project made for the &nbsp;
          <a
            href="https://www.technigo.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TechnigoLogo src={Techlogo} alt="Technigo Logo" />
          </a>
          &nbsp; Web Developer Bootcamp of Fall 2023. <br></br>
          <br></br>This is a labour of sweat, tired knuckles and love - please
          feel free to reach out to us! <br></br> <br></br>
          foodiemoodieappen@gmail.com
          <br></br>
        </IntroParagraph>
      </AboutWrapper>
      <Footer />
    </>
  );
};

export default AboutPage;
