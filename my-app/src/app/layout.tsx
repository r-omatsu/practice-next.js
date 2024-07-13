export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <h1>Layout</h1>
        <main>{children}</main>
      </body>
    </html>
    // <html lang="ja">
    //   <body>
    //     <div className={styles.container}>
    //       <Header />
    //       <div className={styles.content}>
    //         <Nav />
    //         <main className={styles.main}>{children}</main>
    //       </div>
    //     </div>
    //   </body>
    // </html>
  );
}