import { Box, Typography } from "@mui/material";
import { CardInterested } from "../../components/CardInterested/CardInterested.component";
import { useGetProducts } from "../../queries/products/getProducts.query";

const HomePage = () => {
  const { data: products } = useGetProducts(["products"]);

  return (
    <div>
      <Box
        m={4}
        sx={{
          display: "flex",
          gap: "16px",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" component="h1">
          Welcome to ur Shop!
        </Typography>
        <Typography variant="h4" component="h1">
          Products you might be interested in:
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "16px" }}>
        {products?.map((product) => (
          <CardInterested product={product} />
        ))}
      </Box>
    </div>
  );
};

export default HomePage;
