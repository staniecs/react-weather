import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

export default function App() {
  return (
    <div className="App">
      <Container>
        <Weather />
        <Footer />
      </Container>
    </div>
  );
}
