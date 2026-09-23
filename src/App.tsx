import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import routers from "./routes/AppRouter";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <RouterProvider router={routers}/>
    </ThemeProvider>
  )
}

export default App