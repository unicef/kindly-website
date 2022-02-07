/* eslint-disable react/no-unescaped-entities */
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import IconArrowLeftLightblue from "./img/icon-arrow-left-lightblue.svg";

function PrivacyTerms() {
  return (
    <main>
      <div className="p-5 text-center background-light-blue text-blue" id="privacy_terms">
        <div className="container-lg cover-cover mx-auto mt-auto row g-5">
          {" "}
          <div className="offset-lg-1 text-lg-start text-center px-5">
            <div className="pb-3">
              <a href="/" className="nav-link-kindly">
                <img
                  src={IconArrowLeftLightblue}
                  className="icon-arrow-down"
                  alt="Downward Arrow"
                />
                &nbsp;&nbsp;Learn about Kindly
              </a>
            </div>
            <h1 className="my-5">Privacy Policy and Terms of Use for Kindly</h1>
            <div className="mt-5" id="privacy_policy" style={{fontSize: "0.95em"}}>
              <h2>Privacy Policy</h2>
              <h3>What does this Privacy Policy cover?</h3>
              <p>
                Taking care of your information is important to us. This Privacy Policy
                sets out how we collect, use and store your personal information on the
                Kindly site and what steps we take to protect your personal information.
                Please read our Privacy Policy carefully before using our site and refer
                back to it regularly to check for updates. Remember, by accessing and
                using this site, you agree to all provisions of this Privacy Policy.
              </p>
              <h3>What is Personal Information?</h3>
              <p>
                For the purposes of this policy, “Personal Information” is any information
                that enables us to identify you, directly or indirectly, by reference to
                any identifiers - such as your name, address, phone number, email address,
                identification number, location data, or online identifier - or one or
                more other factors specific to you as an individual that would allow us to
                identify you. In brief: How do we protect your Personal Information?
                <ul>
                  <li>
                    We will not use your Personal Information other than for the purposes
                    described in this Policy.
                  </li>
                  <li>We will not sell your Personal Information.</li>
                  <li>
                    We will not keep your Personal Information for longer than is
                    necessary for the stated purposes, except to the extent legally
                    required.
                  </li>
                  <li>
                    We will take all reasonable and necessary technical and organizational
                    measures to protect your Personal Information. For example, we use
                    outside service providers to host our website and provide other
                    services to us. We have implemented the necessary contractual
                    arrangements with the aim of ensuring the confidentiality and security
                    of your Personal Information that we share with them.
                  </li>
                </ul>
              </p>
              <ol>
                <h3>
                  <li>What personal information do we collect from you?</li>
                </h3>
                <p>
                  <em>User-Generated Content</em>
                </p>
                <p>
                  We collect any information that you provide to us when you submit a
                  contribution to be added to the training data set through the Contribute
                  page on this site.
                </p>
                <p>
                  <em>Communications</em>
                </p>
                <p>
                  If you contact us directly, we may receive additional information about
                  you. For example, when you contact the Kindly team, we may receive your
                  name, email address, phone number, the contents of a message or
                  attachments that you may send to us, and other information you choose to
                  provide.
                </p>
                <h3>
                  <li>How do we use your personal information?</li>
                </h3>
                <p>
                  We collect and will use your Personal Information only for the purposes
                  indicated below and only when it is necessary to:
                  <ul>
                    <li>Contact you in response to a query or suggestion</li>
                    <li>
                      Enforce our Terms of Use, defend our legal rights, and comply with
                      our legal obligations and policies
                    </li>
                  </ul>
                </p>
                <h3>
                  <li>How do we share your personal information?</li>
                </h3>
                <p>
                  We generally do not share your Personal Information. We may share it
                  only for the purposes indicated below and only when it is necessary.
                </p>
                <p>
                  Why and how do we share your Personal Information?
                  <ul>
                    <li>
                      If you have expressed interest in a Kindly partnership or
                      collaboration, we may share some of your Personal Information with
                      our partners so that they may contact you further.
                    </li>
                    <li>
                      We may disclose your Personal Information with your permission. For
                      example, another UNICEF personnel may be better equipped to respond
                      to a query. In that case, we may share some of your Personal
                      Information with that UNICEF personnel so that they may contact you
                      with an appropriate response.
                    </li>
                  </ul>
                </p>
                <p>
                  We will only transfer your Personal Information to trusted third parties
                  who provide sufficient guarantees that your Personal Information will be
                  kept secure.
                </p>
                <p>
                  Some of the third parties mentioned in this Privacy Policy may be
                  located in countries outside your country of residence. Where we
                  transfer your Personal Information outside of your country, we take
                  steps to ensure that your Personal Information is treated securely. You
                  agree to us handling your Personal Information in the manner set out in
                  this Privacy Policy and that the obligations imposed by privacy laws in
                  other countries may be less stringent than the requirements established
                  by the privacy laws in your country. Where we transfer your Personal
                  Information internationally we will take reasonable steps to ensure that
                  your Personal Information is treated securely and the means of transfer
                  provides adequate safeguards.
                </p>
                <p>We will never sell your Personal Information.</p>
                <p>
                  <em>Aggregate Data </em>
                </p>
                <p>
                  We may de-identify (i.e. anonymize), aggregate and share information
                  collected through the site with third party providers for statistical
                  analysis and other lawful purposes, including use in research studies,
                  publications, and an open-source training data set to better understand
                  the usage of the Kindly website, improve the operation of the site, and
                  improve the Kindly API’s performance.
                </p>
                <h3>
                  <li>How can you control your personal information?</li>
                </h3>
                <p>
                  If you decide at any time that you no longer wish to receive
                  communications regarding a query or suggestion that you had previously
                  contacted us about, you can inform us to do so by sending your request
                  by email at <a href="mailto:kindly@unicef.org">kindly@unicef.org</a>.
                </p>
                <h3>
                  <li>How long do we keep your personal information?</li>
                </h3>
                <p>
                  We will only use and store your Personal Information for as long as we
                  need to. How long we need your Personal Information depends on the
                  purposes it was collected for and the requirements of UNICEF’s retention
                  policy. For example, we retain your Personal Information as long as
                  necessary to comply with our obligations, resolve disputes, or enforce
                  our agreements and rights. If we no longer need your Personal
                  Information, we will delete it or make it anonymous by removing all
                  details that identify you. If we asked for your permission to use your
                  Personal Information and you withdraw your permission, we will delete
                  your Personal Information (aiming to do so within two months of your
                  withdrawal).
                </p>
                <h3>
                  <li>Is the Kindly website secured?</li>
                </h3>
                <p>
                  We are committed to protecting your Personal Information through the
                  implementation of encryption methods, firewalls, regular security
                  patches and antivirus. Unfortunately, such precautions may not be
                  sufficient to guarantee complete security of your data. It is always a
                  possibility that third parties may unlawfully intercept or access your
                  Personal Information or private communications. So, although we work
                  extremely hard to safeguard your Personal Information, we cannot
                  guarantee that your information or communications will always remain
                  private.
                </p>
                <p>
                  We also ask that you do your part to safeguard your Personal
                  Information. Be careful about connecting to the site using an insecure
                  Wi-Fi. Public Wi-Fi, for example, is inherently insecure — so be
                  cautious.
                </p>
                <p>
                  Should you have reasons to question the integrity of this site or your
                  data, please do promptly contact us at{" "}
                  <a href="mailto:kindly@unicef.org">kindly@unicef.org</a>.
                </p>
                <h3>
                  <li>
                    What about links to third party sites referenced or embedded on the
                    site?
                  </li>
                </h3>
                <p>
                  This site may contain links to other websites that are not covered by
                  this Privacy Policy. This Privacy Policy applies only to the processing
                  of your Personal Information on this site. It does not address, and we
                  are not responsible for, the privacy, information, or other practices of
                  any third parties, including any third party operating any site or
                  service to which this site links. The inclusion of a link on this site
                  does not imply endorsement of the linked site or service by us.
                </p>
                <p>
                  Please be aware that the terms of this Privacy Policy do not apply to
                  these other websites or content, or to any collection of data after you
                  click on links to such other websites.
                </p>
                <h3>
                  <li>Notifications of changes to this privacy policy</li>
                </h3>
                <p>
                  If we make changes to our privacy practices, we will post a notification
                  to this site alerting that the Privacy Policy has been amended. Such
                  changes will be effective immediately upon posting them to this site.
                  For this reason, we encourage you to check our Privacy Policy
                  frequently. The “Last Updated” date at the bottom of this page indicates
                  when this Privacy Policy was last revised. Your continued use of this
                  site following these changes means that you accept the revised Privacy
                  Policy.
                </p>
                <h3>
                  <li>Cookies</li>
                </h3>
                <p>
                  This site does not use any client-side state, such as cookies, to
                  collect usage metrics. Cookies are small text files which identify your
                  computer, phone, and other devices to our server. You may also wish to
                  refer to{" "}
                  <a href="http://www.allaboutcookies.org/manage-cookies/index.html">
                    http://www.allaboutcookies.org/manage-cookies/index.html
                  </a>{" "}
                  more general information about cookies.
                </p>
                <h3>
                  <li>Contact Us</li>
                </h3>
                <p>
                  If you have any questions about this Privacy Policy, please contact us
                  at <a href="mailto:kindly@unicef.org">kindly@unicef.org</a>.
                </p>
                <p>
                  <em>Last Updated:</em> 7 February 2022
                </p>
              </ol>
            </div>
            <div className="mt-5" id="terms_use" style={{fontSize: "0.95em"}}>
              <h2>Terms of Use</h2>
              <p>Welcome to the Kindly website!</p>
              <p>
                The Kindly site is operated by the United Nations Children’s Fund (UNICEF)
                offering a collection of resources and services for your personal use and
                viewing.
              </p>
              <p>
                Please take a moment to read the following Terms of Use. These Terms of
                Use constitute an agreement between you and UNICEF. By using this site,
                you agree that you have read, understood, and accepted the terms and
                conditions contained below. If you do not agree to any of these terms and
                conditions, please do not use this site.
              </p>
              <p>
                These Terms of Use are subject to change, so please make sure you check
                out this page from time to time. The date of the most recent revisions
                will appear at the bottom of this page. If you continue to use this site,
                this means that you accept any changes to or revisions of these Terms of
                Use.
              </p>
              <p>
                Your privacy is very important to us – please also read our{" "}
                <a href="#privacy_policy">Privacy Policy</a>, which will walk you through
                how UNICEF collects, stores, and uses the information that you provide to
                us. By using this site, you are confirming to us that you are agreeing to
                our Privacy Policy.
              </p>
              <p>
                As used in these Terms of Use and our Privacy Policy, “we,” “us,” and
                “our” refers to UNICEF. The terms “you,” “your”, “yours” and “user” refer
                to you as the individual or organization accessing or using this site.
              </p>
              <ol>
                <h3>
                  <li>Use of the site by minors</li>
                </h3>
                <p>
                  Use of this site by minors is subject to the consent of their parent or
                  guardian. We advise parents or guardians who permit their children to
                  use this site that it is important that they communicate with their
                  children about their safety online. Minors who are using this site
                  should be made aware by their parent or guardian of the potential risks
                  to them and of their obligation to comply with the Terms of Use when
                  using this site.
                </p>
                <p>
                  We will do our best to assess any possible risks to minors from third
                  parties when they use this site and we will decide in each case whether
                  it is appropriate to use moderation of the relevant service (including
                  what kind of moderation to use) in light of those risks.{" "}
                </p>
                <p>
                  For minors under ages 14, the email address used for contacting us must
                  be that of their parent or guardian.
                </p>
                <h3>
                  <li>Rules of Usage</li>
                </h3>
                <p>
                  The site is open to and welcomes people from around the world. UNICEF
                  aims to create an environment on the Kindly website where every person
                  feels comfortable, no matter their nationality, gender, cultural
                  background, religion, sexual orientation or political conviction.
                </p>
                <p>
                  You agree to use this site only for lawful purposes, and in a manner
                  that does not infringe the rights of, or restrict or inhibit the use and
                  enjoyment of this site by, any third party.
                </p>
                <p>
                  You agree not to do any of the following: (a) defame, abuse, harass,
                  stalk, threaten or otherwise violate the legal, moral, or human rights
                  of others (such as rights of privacy and publicity); (b) advertise or
                  offer to sell any goods or services, or conduct or forward surveys,
                  contests, or chain letters. UNICEF reserves the right to delete any
                  material posted to this site without notice to users.
                </p>
                <p>
                  UNICEF reserves the right to seek all remedies available by law for any
                  violation of these Terms of Use, including any violation of UNICEF's
                  rights in the UNICEF name and emblem and its rights in connection with
                  the information, artwork, text, video, audio, pictures or other content
                  of the site.
                </p>
                <h3>
                  <li>Submitting a Contribution</li>
                </h3>
                <p>
                  Submitting a contribution to Kindly’s open data set is encouraged for
                  all eligible users, but we want to make sure you do it respectfully!
                  When you submit a contribution, do not use any Personal Information and
                  be aware that it will be reviewed by the UNICEF Kindly Team.
                </p>
                <p>
                  UNICEF reserves the right to anonymize any content that includes
                  Personal Information or remove any content that is not in accordance
                  with these Terms of Use of which we become aware of.
                </p>
                <h3>
                  <li>Links to External Resources</li>
                </h3>
                <p>
                  The site may include links to other websites that are not under UNICEF's
                  control. UNICEF provides these links merely as a convenience and the
                  inclusion of such links does not imply an endorsement or approval by
                  UNICEF of any website, product or service. If you decide to access
                  linked third-party websites or applications, you do so at your own risk.
                  UNICEF does not assume any responsibility or liability in respect of
                  such websites, including, for example, responsibility or liability for
                  the accuracy or reliability of any information, data, opinions, advice
                  or statements made on those websites.
                </p>
                <h3>
                  <li>Virus Protection</li>
                </h3>
                <p>
                  While the Kindly team makes efforts to test the site and its content,
                  100% virus free is not guaranteed, thus we encourage you to run an
                  anti-virus program on your device, especially when downloading materials
                  or opening email communications.
                </p>
                <h3>
                  <li>Intellectual Property Rights</li>
                </h3>
                <p>
                  We intend to make certain content and resources available on this site
                  for use in accordance with these Terms of Use. Some of the content and
                  resources will consist of user content, in whole or in part. Other
                  resources will be created or provided by us or our other licensors.
                </p>
                <p>
                  Subject to these Terms of Use, you may use the resources in the ways in
                  which users are permitted to use them, as described on this site.
                </p>
                <p>
                  The content on this site is licensed under the{" "}
                  <a href="https://github.com/unicef/kindly-website/blob/main/LICENSE.content.md">
                    Creative Commons Attribution-ShareAlike 4.0
                  </a>{" "}
                  which means that you are free to:
                  <ul>
                    <li>
                      <b>Share</b> — copy and redistribute the material in any medium or
                      format
                    </li>
                    <li>
                      <b>Adapt</b> — remix, transform, and build upon the material for any
                      purpose, even commercially.
                    </li>
                  </ul>
                </p>
                <p>
                  Under the following terms:
                  <ul>
                    <li>
                      <b>Attribution</b> — You must give appropriate credit, provide a
                      link to the license, and indicate if changes were made. You may do
                      so in any reasonable manner, but not in any way that suggests the
                      licensor endorses you or your use
                    </li>
                    <li>
                      <b>ShareAlike</b> — If you remix, transform, or build upon the
                      material, you must distribute your contributions under the same
                      license as the original.
                    </li>
                  </ul>
                </p>
                <p>
                  The content, resources, and all other parts of this site are the
                  property of UNICEF and/or licensors and are protected by copyright,
                  patent and/or other proprietary intellectual property rights under
                  national and international law. We and/or our licensors reserve all
                  rights to the resources and this site that are not expressly granted in
                  these Terms of Use.
                </p>
                <h3>
                  <li>Disclaimers</li>
                </h3>
                <p>
                  The United Nations and UNICEF disclaim any liability or responsibility
                  arising from the use of this site or its content. The United Nations,
                  including UNICEF, its officials, employees, consultants, agents, and
                  contractors, will not be liable for any financial or other consequences
                  whatsoever arising from the use of this site and its content, including
                  the inappropriate, improper, or fraudulent use of such content.
                </p>
                <p>
                  UNICEF accepts no responsibility or liability in respect of the conduct
                  of any user in connection with this site, or for any material submitted
                  by users and carried on this site, including, for example,
                  responsibility or liability for the accuracy or reliability of any
                  information, data, opinions, advice or statements made in such material.
                </p>
                <p>
                  UNICEF does not warrant that the functions contained in the content or
                  resources on this site will be uninterrupted or error-free, that defects
                  will be corrected, or that this site or the server that makes it
                  available are free of viruses or represent the full functionality,
                  accuracy, reliability of the content or resources. No representations or
                  warranties of any kind concerning this site are given, including
                  responsibility for any infection by virus or any other contamination or
                  by anything which has destructive properties.
                </p>
                <p>
                  You agree that you are solely responsible for any issues that you may
                  encounter that result from your use of this site. Under no circumstances
                  can UNICEF be held responsible for any damages or injuries you may have
                  related to your use of this site.
                </p>
                <p>
                  You agree to indemnify, at your own expense, UNICEF, its officials,
                  employees, consultants, and agents, against any claims, including their
                  costs and expenses, by any third party, relating to or arising out of
                  (a) your use or attempted use of this site, resources or services in
                  violation of this agreement; (b) your violation of any law or rights of
                  any third party; and (c) any user content that you post or otherwise
                  make available on this site or through any service, including without
                  limitation any claim of infringement or misappropriation of intellectual
                  property or other proprietary rights.
                </p>
                <p>
                  The mention of names of specific companies or products on this site does
                  not imply any intention to infringe proprietary rights, nor should it be
                  interpreted as an endorsement or recommendation on the part of UNICEF.
                </p>
                <p>
                  The use of particular designations of countries or territories or maps
                  on this site does not reflect a position by UNICEF on the legal status
                  of such countries or territories, of their authorities and institutions
                  or of the delimitation of their boundaries.
                </p>
                <h3>
                  <li>Privileges and Immunities</li>
                </h3>
                <p>
                  Nothing in or relating to these Terms of Use, the Privacy Policy or this
                  site shall be deemed a waiver of any of the privileges and immunities of
                  UNICEF under the Convention on the Privileges and Immunities of the
                  United Nations.
                </p>
                <h3>
                  <li>Contact Us</li>
                </h3>
                <p>
                  If you have any questions about this site or Kindly, please contact us
                  at <a href="mailto:kindly@unicef.org">kindly@unicef.org</a>.
                </p>
                <p>
                  <em>Last Updated:</em> 7 February 2022
                </p>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default PrivacyTerms;
