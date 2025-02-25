import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleQuizStart = () => {
    const user = JSON.parse(localStorage.getItem("user")); // Check if user is logged in

    if (user) {
      navigate("/quiz"); // Redirect to quiz page
    } else {
       
      navigate("/login"); // Redirect to login page
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
