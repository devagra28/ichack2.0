import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Container, styled, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import heroImg from "../assets/hero-new-image-removebg-preview.png";
import CustomButton from "../components/CustomButton";
import Trackset from "../components/trackset";
import { tracks } from "../assets/tracks";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out",
      once: true, 
    });
    AOS.refresh(); 
  }, []);

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  const TextWithFadeRight = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    color: "#5A6473",
    my: 4,
    "&[data-aos='fade-right']": {
      opacity: 0,
      transform: "translateX(-20px)",
      transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
    },
    "&[data-aos='fade-right'].aos-animate": {
      opacity: 1,
      transform: "translateX(0)",
    },
  }));

  const PropertiesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  const HouseContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    maxWidth: "300px",
    transition: "background-color 0.3s, transform 0.3s",
    "&:hover": {
      backgroundColor: "#F0F0F0",
      transform: "scale(1.05)",
      cursor: "pointer",
    },
  }));

  return (
    <>
    {/* landing */}
    <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "100vh" }}>
      <Container>
        <Navbar />
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: "500",
                mt: 10,
                mb: 4,
                mx: 2,
              }}
            >
              Welcome to IC HACKS - 2023
            </Typography>
            <Title variant="h1">
              A hackathon where you'll love to compete.
            </Title>
            <TextWithFadeRight
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
              data-aos="fade-right" 
            >
              Get a head start on the hottest hackathons before they go mainstream!
              Access exclusive coding competitions with a single search.
            </TextWithFadeRight>
            {/* <TextWithFadeRight
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
              data-aos="fade-right" 
            >
              Access exclusive coding competitions with a single search.
            </TextWithFadeRight> */}
            <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="Know More"
              heroBtn={true}
            />
          </Box>

           <Hidden mdDown>
            <Box sx={{ flex: "1.25" }}>
              <img
                  src={heroImg}
                  alt="heroImg"
                  style={{ maxWidth: "100%", marginBottom: "2rem", marginTop: "5rem" }}
                  data-aos="fade-up"
              />
            </Box>
          </Hidden>
        </CustomBox>
      </Container>
    </Box>
    {/* tracks */}
    <Box sx={{ mt: 5, backgroundColor: "#ffffff", py: 10 }}>
      <Container>
        <PropertiesTextBox>
          <Typography
            sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold" }}
          >
            Featured Properties
          </Typography>
          <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
            Everything you need to know when looking for a new home!
          </Typography>
        </PropertiesTextBox>

        <PropertiesBox>
          {tracks.map((property) => (
            <HouseContainer key={property.id}>
              <Trackset
                img={property.img}
                price={property.price}
                address={property.address}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                space={property.space}
              />
            </HouseContainer>
          ))}
        </PropertiesBox>
      </Container>
    </Box>
    </>
  );
};

export default Home;
