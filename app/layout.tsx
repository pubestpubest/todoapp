import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const myTheme = {
    components: {
      Flex: {
        defaultProps: {
          gap: "md",
        },
      },
      Stack: {
        defaultProps: {
          gap: "md",
          mt: "md",
        },
      },
    },
  };
  return (
    <html lang="en">
      <body>
        <MantineProvider theme={myTheme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
