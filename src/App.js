import React, { useState } from "react";
import "./App.css";

import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";
import Link from "@mui/material/Link";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "./logo.png";

const theme = createTheme({
  palette: {
    primary: {
      main: "#38cccc",
    },
    secondary: {
      main: "#d47d9a",
    },
    tonalOffset: 0.1,
  },
  typography: {
    caption: {
      fontSize: 14,
    },
  },
  breakpoints: {
    // need to provide all
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1200,
      xl: 1536,
    },
  },
});

function App() {
  const [inputText, setInputText] = useState("");
  const [processedText, setProcessedText] = useState("");
  const [showCopySuccessMessage, setshowCopySuccessMessage] = useState(false);

  const clearText = () => {
    setInputText("");
    setProcessedText("");
    setshowCopySuccessMessage(false);
  };

  const processText = () => {
    const processed = inputText.replace(/\s+/g, " ").trim();
    setProcessedText(processed);
    setshowCopySuccessMessage(false);
  };

  const copyText = () => {
    navigator.clipboard.writeText(processedText);
    setshowCopySuccessMessage(true);

    setTimeout(() => {
      setshowCopySuccessMessage(false);
    }, 2000);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container className="App">
        <Grid item xs={12} md={6} sx={{ bgcolor: "ghostwhite" }} p={4}>
          <img src={Logo} alt="Logo" className="logo" />
          <h1>COPYDF</h1>
          <p>
            You know when you're copy-pasting text from PDFs and the newlines
            and spaces go all wonky? Yeah. This fixes that.
          </p>
          <p>
            This tool removes all newlines and unnecessary spaces between words.
          </p>
          <div className="text-buttons-stack">
            {/*TODO: add option to correct hyphen spacing - turn on by default*/}
            {/*TODO: add ML to detect and handle e.g. "whenitcopieslikethis", "o r t h i s"*/}
            <TextField
              sx={{ mt: 2 }}
              label="Paste your text here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              multiline
              rows={6}
            />
            <div class="process-text-buttons">
              {/*TODO: abstract out all components*/}
              {/*TODO: "reset" instead of "clear"? move to the right?*/}
              <Button
                sx={{ mx: 0, my: 2 }}
                onClick={clearText}
                variant="outlined"
                color="secondary"
                startIcon={<ClearIcon />}
              >
                <Typography variant="button">Clear</Typography>
              </Button>
              <Button
                sx={{ mx: 0, my: 2 }}
                onClick={processText}
                variant="contained"
                disableElevation
                startIcon={<SendIcon />}
              >
                <Typography variant="button">Process</Typography>
              </Button>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            background: "linear-gradient(lavender, lavenderblush)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          p={4}
        >
          <h2>Your processed text will appear here!</h2>
          <div className="text-buttons-stack">
            {/*TODO: change label? feels a bit awkward at the moment*/}
            <TextField
              sx={{ mt: 2 }}
              label="Processed text..."
              value={processedText}
              onChange={(e) => setProcessedText(e.target.value)}
              InputProps={{
                readOnly: true,
              }}
              multiline
              rows={6}
            />
            <div className="copy-text">
              <Button
                sx={{ mx: 0 }}
                onClick={copyText}
                variant="contained"
                disableElevation
                startIcon={<ContentCopyIcon />}
              >
                <Typography variant="button">Copy to clipboard</Typography>
              </Button>
              <Grow in={showCopySuccessMessage}>
                <Typography sx={{ ml: 1 }} color="grey" variant="caption">
                  Copied!
                </Typography>
              </Grow>
            </div>
            <footer>
              <p>
                © 2023 by&nbsp;
                <Link
                  href="https://github.com/valerietanhx/copydf"
                  target="_blank"
                  color="secondary"
                >
                  valerietanhx
                </Link>
                . Favicon and logo by&nbsp;
                <Link
                  href="https://www.flaticon.com/free-animated-icon/pdf-file_10826752"
                  target="_blank"
                  color="secondary"
                >
                  Freepik - Flaticon
                </Link>
                .
              </p>
            </footer>
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
