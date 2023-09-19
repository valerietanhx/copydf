import "./App.css";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


function App() {
  const [inputText, setInputText] = useState("");
  const [processedText, setProcessedText] = useState("");

  const processText = () => {
    const processed = inputText.replace(/\s+/g, " ").trim();
    setProcessedText(processed);
  };

  const copyText = () => {
    navigator.clipboard.writeText(processedText);
  };

  return (
    <Container className="App" maxWidth="md">
      <h1>Copydf</h1>
      <Stack>
        <TextField
          label="Paste your text here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          multiline
          rows={4}
        />
        <Button
          sx={{ m: 2 }}
          className="Button"
          onClick={processText}
          variant="contained"
          endIcon={<SendIcon/>}
        >
          <Typography variant="button">
            Process text
          </Typography>
        </Button>
      </Stack>
      <div>
        <h2>Your processed text will appear here!</h2>
        <Box sx={{ p: 2, borderRadius: 1, border: "1px solid grey" }}>
          <p className="processed-text">{processedText}</p>
        </Box>
        <Button
          sx={{ m: 2 }}
          className="Button"
          onClick={copyText}
          variant="contained"
          endIcon={<ContentCopyIcon/>}
        >
          <Typography variant="button">
            Copy processed text
          </Typography>
        </Button>
      </div>
    </Container>
  );
}

export default App;
