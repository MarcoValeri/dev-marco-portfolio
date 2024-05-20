import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import { PAGES } from '../../content/pages';

import './Contact.scss';

const Contact = () => {
    return (
        <>
            <Header />
            <div className="contact">
                {PAGES.map(contentContactPage => contentContactPage.page === "contact" && (
                    contentContactPage.content.map((content, indexContent) => (
                        <p key={indexContent} className="body-1" dangerouslySetInnerHTML={{__html: content}} />
                    ))
                ))}
            </div>
            <Footer />
        </>
    )
}

export default Contact;