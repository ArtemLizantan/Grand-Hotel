import { Container } from '@mui/material';
import * as classes from './style';
import BackgroundSection from '../BackgroundSection';
import { privacy } from './privacy.data';

export default function Privacy() {
  return (
    <>
      <BackgroundSection
        title={privacy.title}
        path={privacy.img}
      />
      <section css={classes.privacy}>
        <Container>
          <h1>
            <strong>Privacy Policy</strong>
          </h1>

          <p>
            On the m.magyargaleria.com website, which can be accessed at m.magyargaleria.com, one of the most important
            priority is visitor order confidentiality. This privacy policy covers these types of information we collect
            and register at m.magyargaleria.com and how we use it.
          </p>

          <p>
            If you have further questions or need more information about our privacy policy, please contact contact us.
          </p>

          <p>
            This privacy policy applies only to our online activities and only to those activities on our website
            information shared with and/or collected from visitors to m.magyargaleria.com. This policy does not apply to
            all information collected offline or through channels other than the website.
          </p>

          <h2>Contribution</h2>

          <p>By using our website, you accept and agree to be bound by our Privacy Policy terms and conditions.</p>

          <h2>The data we collect</h2>
          <p>
            The personal information that you will be asked to provide and the reasons for providing it will be
            explained to you, when we ask you to provide personal data.
          </p>
          <p>
            If you contact us directly, we may receive additional information about you, such as your name Your email
            address address, telephone number, the content of any messages and/or attachments you may send us, and
            anything else you may want to include in a other information that you may provide.
          </p>
          <p>
            When you register an account, we may ask you for contact details, including items such as your name, company
            name, address, email address and phone number.
          </p>

          <h2>How we use your data</h2>

          <p>The information we collect is used in a number of ways, including:</p>

          <ul>
            <li>Supply, operation and maintenance of our website</li>
            <li>Developing, customising and expanding our website</li>
            <li>Measure and analyse how you use our website</li>
            <li>Development of new products, services, features and services</li>
            <li>
              Communicate with you directly or through one of our partners, including Customer Service updates and other
              information about the Site and for marketing and promotional purposes
            </li>
            <li>We will send you an email</li>
            <li>Detection and prevention of fraud</li>
          </ul>

          <h2>Log files</h2>

          <p>
            m.magyargaleria.com follows the standard procedure for the use of log files. These files are recorded
            visitors when they visit the websites. All hosting companies do this and service analysis part of hosting.
            Information The data collected with log files includes IP addresses, browser type and Internet Service
            Provider (ISP), date and time, referring/exit pages and, where applicable, the number of clicks. They are
            not linked to any personal data. Purpose of the information analyse trends, administer the website, track
            users movements around the site and collects information on demographics.
          </p>
          <h2>Privacy policy for advertising partners</h2>

          <p>Here in the list you can see the privacy policy of each partner advertising on m.magyargaleria.com.</p>

          <p>
            Third-party ad servers or ad networks use technologies such as cookies, JavaScript, or web beacons in
            relevant ads and links that are submitted directly from the user&apos;s browser. When this happens, they
            automatically receive your IP address. These technologies are used to improve the effectiveness of their
            advertising campaigns and/or to customise content as you see it on the websites you visit.
          </p>

          <p>
            Please note that m.magyargaleria.com does not have access to the cookies it uses and does not third party
            advertisers.
          </p>

          <h2>Third Party Privacy Policy</h2>

          <p>
            The privacy policy of commmmms does not apply to other advertisers or websites web. This is offered to be
            reviewed review the privacy policies of those third-party ad servers for more information Information. May
            include practices and guidelines on how to to unsubscribe from certain options.{' '}
          </p>

          <p>
            You can disable cookies through your individual browser settings. Learn more in detail about cookies You can
            find information on how to manage cookies with certain browsers or websites.
          </p>

          <h2>CCPA privacy rights (don&apos;t give away your personal information)</h2>

          <p>Under the CCPA, California consumers have the right to, among other things:</p>
          <p>
            Require companies that collect personal information from consumers to disclose the categories and EXCLUDE
            the personal information the company collects about consumers.
          </p>
          <p>Require the company to delete the personal consumer information it collects.</p>
          <p>
            Ask the company selling your personal consumer information to stop selling your personal consumer
            information.
          </p>
          <p>
            If you make a request, we have one month to respond. If you want to do any of these things rights, please
            contact us.
          </p>

          <h2>GDPR privacy rights</h2>

          <p>
            We want to ensure that you are fully aware of all your data protection rights. All user is entitled to the
            following:
          </p>
          <p>
            Right of access - You have the right to request a copy of your personal data. You may be charged a small fee
            for this service. You may have the right to access your personal data.
          </p>
          <p>
            Right to rectification - You have the right to ask us to correct any information that you believe to be
            incorrect or inaccurate. You also have the right to ask us to complete any information you want left
            incomplete.
          </p>
          <p>
            Right to erasure - in certain cases you have the right to request that we erase your personal data Contact
            us contact.
          </p>
          <p>
            Right to restriction of processing - you have the right to request that we restrict the processing of your
            data personal data, subject to certain conditions.
          </p>
          <p>
            Right to object to processing - You have the right to object to our processing of your data processing of
            your personal data, subject to certain conditions.
          </p>
          <p>
            Right to data portability - You have the right to request the transfer of your data held by us to another
            organisation or, under certain conditions, collected directly from you.
          </p>
          <p>
            If you make a request, we have one month to respond. If you wish to do any of these things rights, please
            contact us.
          </p>
        </Container>
      </section>
    </>
  );
}
