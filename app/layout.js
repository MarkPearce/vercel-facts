import './globals.css';

export const metadata = {
  title: 'Xentinl Fact Check',
  description: 'Professional fact-checking and analysis',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}