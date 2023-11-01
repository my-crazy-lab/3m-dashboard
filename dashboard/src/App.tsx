/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { Switch, Route, Redirect } from "react-router-dom";
import Overview from "./pages/Overview";
// import Home from "./pages/Home";
// import Tables from "./pages/Tables";
// import Billing from "./pages/Billing";
// import Rtl from "./pages/Rtl";
// import Profile from "./pages/Profile";
// import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import useIam from "./hooks/useIam";
import { useEffect, PropsWithChildren } from "react";
import { Skeleton } from "antd";

function GuardAuth({ children }: PropsWithChildren<any>) {
  const { isLoading, onFetchData } = useIam();
  useEffect(() => {
    onFetchData({});
  }, []);

  if (isLoading) return <Skeleton />;
  return <>{children}</>;
}

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route path="/sign-up" exact component={SignUp} /> */}
        <Route
          path="/sign-in"
          exact
          component={() => (
            <GuardAuth>
              <SignIn />
            </GuardAuth>
          )}
        />
        <Main>
          <Route
            exact
            path="/3m/overview"
            component={() => (
              <GuardAuth>
                <Overview />
              </GuardAuth>
            )}
          />
          {/* <Route exact path="/dashboard" component={Home} />
          <Route exact path="/tables" component={Tables} />
          <Route exact path="/billing" component={Billing} />
          <Route exact path="/rtl" component={Rtl} />
          <Route exact path="/profile" component={Profile} /> */}
          <Redirect from="*" to="/3m/overview" />
        </Main>
      </Switch>
    </div>
  );
}

export default App;
