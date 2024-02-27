import React from "react";
import NavigationBar from "./NavigationBar";

import Card from "@mui/material/Card";
import { CardContent, Avatar, Stack, Grid, Item } from "@mui/material";
import Typography from "@mui/material/Typography";

import data from "../data/employees 2.json";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      width: 150,
      height: 150,
      fontSize: 80,
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

function Home() {
  return (
    <div>
      <NavigationBar />

      <Grid container spacing={2}>
        {data.Employees.map((employees) => (
          <Grid item xs={8}>
            <Card sx={{ maxWidth: 300 }}>
              <CardContent>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ display: "flex", justifyContent: "center", pt: 2 }}
                >
                  <Avatar {...stringAvatar(employees.Name)} />
                </Stack>
                <Typography gutterBottom variant="h5" component="div">
                  {employees.Name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {employees.Spot}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <h1>Hola</h1>
    </div>
  );
}

export default Home;
