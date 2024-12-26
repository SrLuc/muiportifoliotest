import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function BasicGrid() {
  return (
    <Box >
      <Grid container spacing={1} padding={1}   >
        <Grid size={8}>
          <Item>Images</Item>
        </Grid>
        <Grid size={4}>
          <Item>Projects</Item>
        </Grid>
        <Grid size={4}>
          <Item>Soundcloud</Item>
        </Grid>
        <Grid size={4}>
          <Item>Linkedin </Item>
        </Grid>
        <Grid size={4}>
          <Item>Linkedin </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
