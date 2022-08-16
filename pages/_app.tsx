import '../styles/globals.css'
// LandingPage
import '../components/c-section/AssetSection.css'
import '../components/c-section/ChooseSection.css'
import '../components/c-section/ContactSection.css'
import '../components/c-section/FeatureSection.css'
import '../components/c-section/IntroSection.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
