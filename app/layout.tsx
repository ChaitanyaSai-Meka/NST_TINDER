import React from 'react';

export const metadata = {
  title: 'NST TINDER',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/nst-logo.jpg" /> 
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}