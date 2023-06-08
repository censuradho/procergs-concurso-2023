import { appSettings, isDevMode } from '@/config/app';
import './globals.css'
import ReactGA from "react-ga4";
import { GoogleAnalytics } from '@/components';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  if (appSettings.analytics) {
    ReactGA.initialize(appSettings.analytics, { testMode: isDevMode })
  }

  return (
    <html lang="pt-BR">
      <GoogleAnalytics />
      <body>{children}</body>
    </html>
  )
}
