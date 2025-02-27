import { HashRouter as Router, Routes, Route } from "react-router-dom";
import App from "@/App";
import { Home, ErrorPage } from "@pages";

const RouterConfig = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}

export default RouterConfig;
