import * as React from "react";
import * as Client from "react-dom/client";
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlined from "@mui/icons-material/ModeCommentOutlined";
import SendOutlined from "@mui/icons-material/SendOutlined";
import Face from "@mui/icons-material/Face";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import CloseIcon from "@mui/icons-material/Close";

export default function SillotDrawer(props: { id: string }) {
  const id = props.id;
  const e = document.getElementById(id);
  if (!e) {
    return;
  }
  const root = Client.createRoot(e);
  // 在 React 中， <></> 是 <React.Fragment/> 的语法糖
  root.render(
    <>
      <InstagramPost />
    </>
  );
}

function InstagramPost() {
  const [open, setOpen] = React.useState(true); // react hooks
  return (
    <Card
      variant="soft"
      sx={{
        display: open ? "flex" : "none",
        minWidth: 300,
        backgroundColor: "var(--b3-theme-surface)",
        "--Card-radius": (theme) => theme.vars.radius.xs,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", pb: 1.5, gap: 1 }}>
        <Box
          sx={{
            position: "relative",
            "&:before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              m: "-2px",
              borderRadius: "50%",
              background:
                "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
            },
          }}
        >
          <Avatar
            size="sm"
            src="/stage/icon.png"
            sx={{ p: 0.5, border: "2px solid", borderColor: "background.body" }}
          />
        </Box>
        <Typography fontWeight="lg">Sillot</Typography>
        <IconButton
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ ml: "auto" }}
        >
          <MoreHoriz />
        </IconButton>
      </Box>
      <CardOverflow>
        <AspectRatio>
          <img src="/stage/icon.png" alt="" loading="lazy" />
        </AspectRatio>
      </CardOverflow>
      <Box sx={{ display: "flex", alignItems: "center", mx: -1, my: 1 }}>
        <Box sx={{ width: 0, display: "flex", gap: 0.5 }}>
          <IconButton variant="plain" color="neutral" size="sm">
            <FavoriteBorder />
          </IconButton>
          <IconButton variant="plain" color="neutral" size="sm">
            <ModeCommentOutlined />
          </IconButton>
          <IconButton variant="plain" color="neutral" size="sm">
            <SendOutlined />
          </IconButton>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 0.5, mx: "auto" }}
        >
          {[...Array(5)].map((_, index) => (
            <Box
              key={index}
              sx={{
                borderRadius: "50%",
                width: `max(${6 - index}px, 3px)`,
                height: `max(${6 - index}px, 3px)`,
                bgcolor: index === 0 ? "primary.solidBg" : "background.level3",
              }}
            />
          ))}
        </Box>
        <Box sx={{ width: 0, display: "flex", flexDirection: "row-reverse" }}>
          <IconButton variant="plain" color="neutral" size="sm">
            <BookmarkBorderRoundedIcon />
          </IconButton>
        </Box>
      </Box>
      <Link
        component="button"
        underline="none"
        fontSize="sm"
        fontWeight="lg"
        textColor="text.primary"
      >
        8.1M Likes
      </Link>
      <Typography fontSize="sm">
        <Link
          component="button"
          color="neutral"
          fontWeight="lg"
          textColor="text.primary"
        >
          Sillot
        </Link>{" "}
        The React component library you always wanted
      </Typography>
      <Link
        component="button"
        underline="none"
        fontSize="sm"
        startDecorator="…"
        sx={{ color: "text.tertiary" }}
      >
        more
      </Link>
      <Link
        component="button"
        underline="none"
        fontSize="10px"
        sx={{ color: "text.tertiary", my: 0.5 }}
      >
        2 DAYS AGO
      </Link>
      <CardOverflow sx={{ p: "var(--Card-padding)", display: "flex" }}>
        <IconButton size="sm" variant="plain" color="neutral" sx={{ ml: -1 }}>
          <Face />
        </IconButton>
        <Input
          variant="plain"
          size="sm"
          placeholder="Add a comment…"
          sx={{ flexGrow: 1, mr: 1, "--Input-focusedThickness": "0px" }}
        />
        <Button
          onClick={() => {
            setOpen(false);
          }}
          startDecorator={<CloseIcon />}
        >
          Close
        </Button>
      </CardOverflow>
    </Card>
  );
}
