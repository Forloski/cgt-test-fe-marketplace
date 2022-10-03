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
            <IconButton onClick={() => navigate({ to: "/" })} size="large" color="inherit">
              <HomeIcon />
            </IconButton>
            <IconButton onClick={() => navigate({ to: "/cart" })} size="large" color="inherit">
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
