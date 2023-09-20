import "./App.css";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ClearIcon from "@mui/icons-material/Clear";

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
    <Container className="App" maxWidth="md">
      <h1>COPYDF</h1>
      <p>
        You know when you're copy-pasting text from PDFs and the newlines and
        spaces go all wonky? Yeah. This fixes that.
      </p>
      <p>
        This tool removes all newlines and unnecessary spaces between words.
      </p>
      <Stack>
        <TextField
          sx={{ mt: 2 }}
          label="Paste your text here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          multiline
          rows={4}
        />
        <Stack direction="row" className="button-stack">
          {/*TODO: abstract out Button into a separate component*/}
          <Button
            sx={{ m: 2 }}
            className="Button"
            onClick={clearText}
            variant="contained"
            endIcon={<ClearIcon />}
          >
            <Typography variant="button">Clear text</Typography>
          </Button>
          <Button
            sx={{ m: 2 }}
            className="Button"
            onClick={processText}
            variant="contained"
            endIcon={<SendIcon />}
          >
            <Typography variant="button">Process text</Typography>
          </Button>
        </Stack>
      </Stack>
      <div>
        <h2>Your processed text will appear here!</h2>
        <Box
          sx={{ px: 2.5, py: 1, borderRadius: 1, border: "1px solid darkgrey" }}
        >
          <p className="processed-text">{processedText}</p>
        </Box>
        <Button
          sx={{ m: 2 }}
          className="Button"
          onClick={copyText}
          variant="contained"
          endIcon={<ContentCopyIcon />}
        >
          <Typography variant="button">Copy to clipboard</Typography>
        </Button>
      </div>
    </Container>
  );
}

export default App;
