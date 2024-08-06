import BackgroundSection from '../BackgroundSection';
import Container from '../Container';
import { cookies } from './cookies.data';
import * as classes from './style';

export default function CookiesPage() {
  return (
    <>
      <BackgroundSection
        title={cookies.title}
        path={cookies.img}
      />
      <section css={classes.cookies}>
        <Container>
          <h1>
            <strong>Cookie Policy</strong>
          </h1>

          <p>
            This Cookie Policy explains how Grandpalaceresort (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar
            technologies to recognize you when you visit our website at grandpalaceresort.com (&quot;Website&quot;). It explains
            what these technologies are and why we use them, as well as your rights to control our use of them. What are
            cookies? Cookies are small data files that are placed on your computer or mobile device when you visit a
            website. Websites owners widely use cookies to make their websites work, or to work more efficiently, as
            well as to provide reporting information. Why do we use cookies? We use first and third-party cookies for
            several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we
            refer to these as &quot;essential&quot; or &quot;strictly necessary&quot; cookies. Other cookies also enable us to track and
            target the interests of our users to enhance the experience on our Website. Third parties serve cookies
            through our Website for advertising, analytics, and other purposes. The types of cookies we use
          </p>
          <p>
            Essential Cookies These cookies are strictly necessary to provide you with services available through our
            Website and to use some of its features, such as access to secure areas. Performance and Functionality
            Cookies These cookies are used to enhance the performance and functionality of our Website but are
            non-essential to their use. However, without these cookies, certain functionality may become unavailable.
            Analytics and Customization Cookies These cookies collect information that is used either in aggregate form
            to help us understand how our Website is being used or how effective our marketing campaigns are, or to help
            us customize our Website for you. Advertising Cookies These cookies are used to make advertising messages
            more relevant to you. They perform functions like preventing the same ad from continuously reappearing,
            ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your
            interests. Social Networking Cookies These cookies are used to enable you to share pages and content that
            you find interesting on our Website through third party social networking and other websites. These cookies
            may also be used for advertising purposes too. How can you control cookies? You have the right to decide
            whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate
            opt-out links provided below. Browser Controls: You can set or amend your web browser controls to accept or
            refuse cookies. If you choose to reject cookies, you may still use our Website though your access to some
            functionality and areas of our Website may be restricted. As the means by which you can refuse cookies
            through your web browser controls vary from browser to browser, you should visit your browser&apos;s help menu
            for more information. Disabling Most Interest Based Advertising: Most advertising networks offer you a way
            to opt out of Interest Based Advertising. If you would like to find out more information, please visit
            http://www.aboutads.info/choices/ or http://www.youronlinechoices.com. Mobile Advertising: You can opt out
            of having your mobile advertising identifiers used for certain types of Interest Based Advertising,
            including those performed by us and/or our third party service providers by accessing the settings on your
            mobile device and following the most recent published instructions. Changes to our Cookie Policy We may
            update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use
            or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy
            regularly to stay informed about our use of cookies and related technologies. More Information If you have
            any questions about our use of cookies or other technologies, please email us at:  <br /> <br />
            <a href='mailto:info@grandpalaceresort.com'>info@grandpalaceresort.com</a>
          </p>
        </Container>
      </section>
    </>
  );
}
