import "./App.css";
import Logo from "./logo.png";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ClearIcon from "@mui/icons-material/Clear";
import Link from "@mui/material/Link";

function App() {
  const [inputText, setInputText] = useState("");
  const [processedText, setProcessedText] = useState("");

  const clearText = () => {
    setInputText("");
  };

  const processText = () => {
    const processed = inputText.replace(/\s+/g, " ").trim();
    setProcessedText(processed);
  };

  const copyText = () => {
    navigator.clipboard.writeText(processedText);
  };

  return (
    <div className="App">
      {/*TODO: add theme*/}
      <div className="left">
        <img src={Logo} alt="Logo" className="logo" />
        <h1>COPYDF</h1>
        <p>
          You know when you're copy-pasting text from PDFs and the newlines and
          spaces go all wonky? Yeah. This fixes that.
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
            {/*TODO: abstract out Button into a separate component*/}
            <Button
              sx={{ mx: 0, my: 2 }}
              onClick={clearText}
              variant="outlined"
              endIcon={<ClearIcon />}
            >
              <Typography variant="button">Clear text</Typography>
            </Button>
            <Button
              sx={{ mx: 0, my: 2 }}
              onClick={processText}
              variant="contained"
              endIcon={<SendIcon />}
            >
              <Typography variant="button">Process text</Typography>
            </Button>
          </div>
        </div>
      </div>
      <div className="right">
        <h2>Your processed text will appear here!</h2>
        <div className="text-buttons-stack">
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
          <Button
            sx={{ mx: 0, my: 2 }}
            onClick={copyText}
            variant="contained"
            endIcon={<ContentCopyIcon />}
          >
            <Typography variant="button">Copy to clipboard</Typography>
          </Button>
          <footer>
            <p>
              © 2023 by{" "}
              <Link
                href="https://github.com/valerietanhx/copydf"
                target="_blank"
              >
                valerietanhx
              </Link>
              . Favicon and logo by&nbsp;
              <Link
                href="https://www.flaticon.com/free-animated-icon/pdf-file_10826752"
                target="_blank"
              >
                Freepik - Flaticon
              </Link>
              .
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
