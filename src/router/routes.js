import Home from "../views/Home/Home";
import About from "../views/About/About";
import NotFound from "../views/NotFound/NotFound";
import Content from "../views/Content/Content";

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
