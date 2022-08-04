import logo from './logo.svg';
import { Layout } from "antd";
const { Header, Content } = Layout;

function App() {
  return (
      //1.outter curly bracket: use curly braces to embed a JavaScript expression in an attribute
      //2. inner curly bracket: obj
      <Layout style = {{ height: "100vh"}}>
          <Header>header</Header>
          <Content
              style={{
                  padding: "50px",
                  maxHeight: "calc(100% - 64px)",
                  overflowY : "auto",
              }}
          >content</Content>

      </Layout>
  );
}

export default App;