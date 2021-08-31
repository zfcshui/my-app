import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import NotFound from "../pages/NotFound/NotFound";
import Content from "../pages/Content/Content";

export const routes = [
  {
    path: "/home",
    component: Home,
    name: "Home"
  },
  {
    path: "/about",
    component: About,
    name: "About"
  },
  {
    path: "/content",
    component: Content,
    name: "Content"
  },
  {
    path: "/404",
    component: NotFound,
    name: "NotFound"
  }
];
