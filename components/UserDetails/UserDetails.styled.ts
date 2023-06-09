import { styled, Box } from "@mui/material";

export const StyledUserDetailsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  marginInline: '1rem',

  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: 'center'
  },
}));
