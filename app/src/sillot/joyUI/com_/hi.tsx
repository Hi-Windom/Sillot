import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Client from "react-dom/client";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";

export class HiJoy {
  public readonly root: any;
  public readonly id: string;
  constructor(props: { id: string }) {
    this.id = props.id;
    this.CloseButton = this.CloseButton.bind(this);
    let e = document.getElementById(props.id);
    if (!e) {
      return;
    }
    e.style.position = "fixed";
    this.root = Client.createRoot(e);
    this.root.render(
      <>
        <CssVarsProvider>
        <this.ModeToggle />
        <this.CloseButton />
          <Sheet
            sx={{
              width: 300,
              mx: "auto", // margin left & right
              my: 4, // margin top & botom
              py: 3, // padding top & bottom
              px: 2, // padding left & right
              display: "flex",
              flexDirection: "column",
              gap: 2,
              borderRadius: "sm",
              boxShadow: "md",
            }}
          >
            <div>
              <Typography level="h4" component="h1">
                Welcome!
              </Typography>
              <Typography level="body2">Sign in to continue.</Typography>
            </div>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                // html input attribute
                name="email"
                type="email"
                placeholder="johndoe@email.com"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input name="password" type="password" placeholder="password" />
            </FormControl>
            <Button sx={{ mt: 1 /* margin top */ }}>Log in</Button>
            <Typography
              endDecorator={<Link href="/sign-up">Sign up</Link>}
              fontSize="sm"
              sx={{ alignSelf: "center" }}
            >
              Don't have an account?
            </Typography>
          </Sheet>
        </CssVarsProvider>
      </>
    );
  }
  ModeToggle() {
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = React.useState(false);

    // necessary for server-side rendering
    // because mode is undefined on the server
    React.useEffect(() => {
      setMounted(true);
    }, []);
    if (!mounted) {
      return null;
    }

    return (
      <Button
        variant="outlined"
        onClick={() => {
          setMode(mode === "light" ? "dark" : "light");
        }}
      >
        {mode === "light" ? "Turn dark" : "Turn light"}
      </Button>
    );
  }
  CloseButton() {
    return (
      <Button
      variant="outlined"
      onClick={() => {this.root.render()}}
      >
        Close
      </Button>
    )
  }
}
