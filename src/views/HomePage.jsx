import {
    Grid,
    GridItem,
    Box,
    useMediaQuery,
    Text
  } from "@chakra-ui/react";
  
function HomePage() {
    const [largeScreen] = useMediaQuery("(min-width: 1024px)");
  
    return (
      <Grid
        templateAreas={{
          base: '"main"',
          lg: '"aside main"',
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <Box display={largeScreen ? "block" : "none"}>
          <GridItem area="aside" paddingX={5}>
          </GridItem>
        </Box>
        <GridItem area="main">
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Home Page
          </Text>
        </GridItem>
      </Grid>
    );
  }
  
  export default HomePage;