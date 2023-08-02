import "./globals.css";

export const metadata = {
  title: "Dictionary Webapp",
  description: "Dictionary Webapp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/public/preview.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
