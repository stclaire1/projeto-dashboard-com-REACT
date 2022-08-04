import { Footer } from '../Footer'
import { Header } from '../Header'

export const ContentWrapper = () => {
    return(
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
            <Header />
            <Footer />
            </div>
        </div>
    )
}