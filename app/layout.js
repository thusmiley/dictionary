import "./globals.css";

export const metadata = {
  title: "Dictionary Webapp",
  description: "Dictionary Webapp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/preview.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
