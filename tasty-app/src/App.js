import logo from './logo.svg';
import { Layout, Typography } from "antd";
import { useState } from "react";
import LoginForm from "./components/LoginForm";
import MyCart from "./components/MyCart"
import SignupForm from "./components/SignupForm"
import FoodList from "./components/FoodList"

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
    const [authed, setAuthed] = useState(false);

    return (
      //1.outter curly bracket: use curly braces to embed a JavaScript expression in an attribute
      //2. inner curly bracket: obj
        <Layout style={{ height: "100vh" }}>
            <Header>
                <div className="header">
                    <Title
                        level={2}
                        style={{ color: "white", lineHeight: "inherit", marginBottom: 0 }}
                    >
                        TastyApp
                    </Title>
                    <div>{authed ? <MyCart /> : <SignupForm />}</div>
                </div>
            </Header>
            <Content
                style={{
                    padding: "50px",
                    maxHeight: "calc(100% - 64px)",
                    overflowY: "auto",
                }}
            >
                {authed ? (
                    <FoodList />
                ) : (
                    <LoginForm onSuccess={() => setAuthed(true)} />
                )}
            </Content>
        </Layout>

    );
}

export default App;