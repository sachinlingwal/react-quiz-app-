import { Button, MenuItem } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import React from "react";
import "./Home.css";
import Categories from "../../Data/Categories";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";

const Home = ({ name, setName, fetchQuestions }) => {
  const history = useHistory();

  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      history.push("/quiz");
    }
  };

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Settings</span>

        <div className="setting__select">
          {/* Error  */}
          {error && <ErrorMessage>Please Fill the Fields</ErrorMessage>}

          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <TextField
            select
            label="Select Category"
            variant="outlined"
            style={{ marginBottom: 25 }}
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Select Difficulty"
            variant="outlined"
            style={{ marginBottom: 30 }}
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>

      <img src="/quiz.svg" alt="quizimage" className="banner" />
    </div>
  );
};

export default Home;
