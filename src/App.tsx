import Container from "./layout/Container";
import NavgationBar from "./components/Nav/Nav";
import Card from "./components/Card/Card";
import Main from "./components/Main/Main";


function App() {
  return (
    <Container>
      <NavgationBar />
      <Card />
      <Main />
    </Container>
  );
}

export default App;
