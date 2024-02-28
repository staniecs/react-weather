import "./App.css";
import Weather from "./Weather";
import { Container } from "react-bootstrap";

export default function App() {
  return (
    <div className="App">
      <Container>
        <Weather />
      </Container>
    </div>
  );
}
