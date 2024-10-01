import 'styles/globals.css';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        Personal blog demo layout
        <main>{children}</main>
      </body>
    </html>
  );
}
