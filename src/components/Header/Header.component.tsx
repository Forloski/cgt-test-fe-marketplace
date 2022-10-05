import { AppBar, Box, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "@tanstack/react-location";
import { useCartManagement } from "../../contexts/CartManagement.context";

export const Header = () => {
  const navigate = useNavigate();
  const cartManagement = useCartManagement();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ paddingX: "5%" }}>
        <Toolbar>
          <Typography
            onClick={() => navigate({ to: "/" })}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer", fontFamily: "Permanent Marker" }}
          >
            90s Shop
          </Typography>
          <Box>
            <IconButton id="link-to-home" onClick={() => navigate({ to: "/" })} size="large">
              <HomeIcon />
            </IconButton>
            <IconButton id="link-to-cart" onClick={() => navigate({ to: "/cart" })} size="large">
              <Badge badgeContent={cartManagement.cartCount} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
