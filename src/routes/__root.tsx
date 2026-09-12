import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { CommerceProvider } from "../lib/commerce-context";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CartDrawer } from "../components/CartDrawer";
import { SearchOverlay } from "../components/SearchOverlay";
import { QuickViewModal } from "../components/QuickViewModal";
import { FragranceQuiz } from "../components/FragranceQuiz";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <span className="eyebrow text-accent">404 · Uncharted Territory</span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl text-foreground">Fragrance Not Found</h1>
        <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
          The sanctuary or distillation you are seeking does not exist or has been relocated within
          the house.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Return to Sanctuary
          </Link>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-foreground hover:bg-muted transition-colors"
          >
            Explore Collections
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
          A Disturbance in the Still
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
          Something interrupted the page rendering. You can retry or return to the sanctuary.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-xs font-semibold uppercase tracking-wider text-foreground hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Royale Aaroma | Fragrance Redefining Luxury" },
      {
        name: "description",
        content:
          "Contemporary Indian luxury fragrance house. Traditional Deg Bhapka hydro-distillation, pure alcohol-free attars, and sacred scent rituals.",
      },
      { name: "author", content: "Royale Aaroma" },
      { property: "og:title", content: "Royale Aaroma | Fragrance Redefining Luxury" },
      {
        property: "og:description",
        content:
          "Small-batch perfume oils, pure sandalwood distillations, and enduring fragrance character from Kannauj.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Manrope:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="overflow-x-hidden w-full max-w-full">
      <head>
        <HeadContent />
      </head>
      <body className="overflow-x-hidden w-full max-w-full bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <CommerceProvider>
        <div className="flex min-h-screen w-full max-w-full flex-col overflow-x-hidden bg-background text-foreground">
          <Header />
          <main className="min-h-[75vh] flex-1 w-full max-w-full overflow-x-hidden">
            <Outlet />
          </main>
          <CartDrawer />
          <SearchOverlay />
          <QuickViewModal />
          <FragranceQuiz />
          <Footer />
        </div>
      </CommerceProvider>
    </QueryClientProvider>
  );
}
