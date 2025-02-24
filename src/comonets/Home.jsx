import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleQuizStart = () => {
    const user = localStorage.getItem("users"); // Check if user exists
    if (user) {
      navigate("/quiz"); // Go to Quiz Page if user is logged in
    } else {
      navigate("/login"); // Redirect to Login Page if user is not logged in
    }
  };

  return (
    <div className="container">
      <h1>Welcome to the Quiz</h1>
      <p>Test your knowledge and have fun!</p>
      <button onClick={handleQuizStart}>Start Quiz</button>
      
    </div>
  );
};

export default Home;
