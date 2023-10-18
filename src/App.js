import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="main">
      <h1>School Days</h1>
      <div className="sub">
        <h4>School Friends</h4>
        <ol>
        <li>Rahul</li>
        <li>Sumit</li>
        <li>Samir</li>
        <li>Firoz</li>
        </ol>
      </div>
      <div className="sub">
        <h4>School Routine</h4>
        <ol type="A">
          <li>I used to Woke Up Early In the Morning</li>
          <li>I used to Brush My Teeth</li>
          <li>I used to take bath</li>
          <li>I used to Take breakfast</li>
          <li>I used to Catch My school Bus</li>
          <li>I used to Enjoy My Day at School</li>
          <li>I used to catch bus to come back to home</li>
        </ol>
      </div>
      <div className="sub">
            <h4>School Games</h4>
            <ol>
              <li>Cricket</li>
              <li>Football</li>
              <li>VolleyBall</li>
              <li>Kabaddi</li>
              <li>Kho-Kho</li>
            </ol>
      </div>
      <div className="sub">
        <h4>School Books</h4>
        <ol>
          <li>Marathi</li>
          <li>Hindi</li>
          <li>English</li>
          <li>Math</li>
          <li>Science</li>
          <li>Social Science</li>
          <li>Urdu</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
