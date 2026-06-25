import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ActivationAndroid from "./pages/ActivationAndroid";
import ActivationIOS from "./pages/ActivationIOS";
import ActivationSamsung from "./pages/ActivationSamsung";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/activation/android"} component={ActivationAndroid} />
      <Route path={"/activation/ios"} component={ActivationIOS} />
      <Route path={"/activation/samsung"} component={ActivationSamsung} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
