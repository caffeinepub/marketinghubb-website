import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { FloatingButtons } from "./components/FloatingButtons";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { ContentMarketingPage } from "./pages/services/ContentMarketingPage";
import { EmailMarketingPage } from "./pages/services/EmailMarketingPage";
import { PpcPage } from "./pages/services/PpcPage";
import { SeoPage } from "./pages/services/SeoPage";
import { SmmPage } from "./pages/services/SmmPage";
import { WebDesignPage } from "./pages/services/WebDesignPage";

const rootRoute = createRootRoute({
  component: () => (
    <div
      className="min-h-screen flex flex-col"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});
const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});
const seoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/seo",
  component: SeoPage,
});
const smmRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/smm",
  component: SmmPage,
});
const ppcRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/ppc",
  component: PpcPage,
});
const webDesignRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/web-design",
  component: WebDesignPage,
});
const emailMarketingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/email-marketing",
  component: EmailMarketingPage,
});
const contentMarketingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/content-marketing",
  component: ContentMarketingPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  servicesRoute,
  contactRoute,
  seoRoute,
  smmRoute,
  ppcRoute,
  webDesignRoute,
  emailMarketingRoute,
  contentMarketingRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
