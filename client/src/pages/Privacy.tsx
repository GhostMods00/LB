import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import privacyPdf from "@assets/LBG Privacy Policy_1761220769266.pdf";

export default function Privacy() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif font-bold text-4xl md:text-5xl mb-4">
            Privacy Policy
          </h1>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-6">
            Last modified: 27th June 2024
          </p>
          <a href={privacyPdf} download="LBG_Privacy_Policy.pdf">
            <Button variant="outline" size="lg" className="bg-background/10 border-background/20 text-background hover:bg-background/20" data-testid="button-download-privacy">
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </Button>
          </a>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 text-muted-foreground">
              
              {/* About Us */}
              <div>
                <h2 className="font-serif font-bold text-2xl text-foreground mb-4">About us</h2>
                <p className="leading-relaxed mb-4">
                  Lundy Building Group (LBG) is a full service construction company. We specialise in building and managing commercial and residential projects, including educational facilities, mixed use developments and industrial sites.
                </p>
                <p className="leading-relaxed mb-4">
                  In this policy:
                </p>
                <p className="leading-relaxed mb-2">
                  <strong>"Lundy Building Group" "LBG" "we" "us" or "our"</strong> and similar terms means Lundy Building Services Pty. Limited (ACN 051 797 436), Lundy Building Group Pty Ltd (ACN 678 874 925) and/or any related entities.
                </p>
                <p className="leading-relaxed">
                  <strong>"Website"</strong> means https://www.lundybuilding.com.au and other website as we may operate from time to time.
                </p>
              </div>

              {/* Your Privacy */}
              <div>
                <h2 className="font-serif font-bold text-2xl text-foreground mb-4">Your Privacy</h2>
                <p className="leading-relaxed mb-4">
                  Your privacy is important to us. We are committed to taking all reasonable steps to, protect your personal information and, be clear and open about what we do with your information.
                </p>
                <p className="leading-relaxed mb-4">
                  This policy explains how we collect, handle and use your personal information, and your rights in relation to that information.
                </p>
                <p className="leading-relaxed">
                  LBG is subject to the Australian Privacy Principles set out in the Privacy Act 1988 (the Privacy Act).
                </p>
              </div>

              {/* Scope of Privacy Policy */}
              <div>
                <h2 className="font-serif font-bold text-2xl text-foreground mb-4">Scope of Privacy Policy</h2>
                <p className="leading-relaxed mb-4">
                  This Privacy Policy applies to your use of our Website as well as your other dealings and engagements with us, including in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>When you contact and correspond with us, including when you request information from us or provide information to us by any means</li>
                  <li>When you use our Website or services, including when you complete online or hardcopy application forms and visit our mobile apps</li>
                  <li>When you or the organisation you work for engages or proposes to engage our services</li>
                  <li>When you apply for a position of employment with us</li>
                </ul>
                <p className="leading-relaxed">
                  Your use of our services or your provision of information constitutes your acknowledgment of the terms of this Privacy Policy.
                </p>
              </div>

              {/* What is personal information? */}
              <div>
                <h2 className="font-serif font-bold text-2xl text-foreground mb-4">What is personal information?</h2>
                <p className="leading-relaxed mb-4">
                  Generally, personal information is information which may be used to reasonably identify you.
                </p>
                <p className="leading-relaxed">
                  For example, your name, address, date of birth, gender, email address and telephone number is considered to be personal information. Personal information may also include information we collect about your individual preferences.
                </p>
              </div>

              {/* What information do we collect? */}
              <div>
                <h2 className="font-serif font-bold text-2xl text-foreground mb-4">What information do we collect?</h2>
                <p className="leading-relaxed mb-4">
                  The kinds of personal information we collect from you will depend on the type of interaction you have with us but may include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Information about your identity – including your name, address (postal and residential), occupation, email address, telephone number(s), date of birth, gender and marital status (this may include obtaining copies of your identity documents)</li>
                  <li>Information about your organisation – including company name(s) and particulars, employer details, financial information, information relating to company assets and information on contracts entered into by the organisation</li>
                  <li>Individual preferences in respect of the services we provide you, including preferences and interests</li>
                  <li>Financial and transaction information, including credit information</li>
                  <li>Paypal, credit card and direct debit details for your bank account</li>
                  <li>When you visit our Websites or use our mobile apps – your IP address, location information, any third-party sites you access, including the date, time, duration and pages you have accessed</li>
                </ul>
              </div>

              {/* How we collect information */}
              <div>
                <h2 className="font-serif font-bold text-2xl text-foreground mb-4">How we collect information</h2>
                <p className="leading-relaxed mb-4">
                  We will collect personal information about you:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Directly from you</li>
                  <li>From identity documents provided (for example Drivers Licences, Passports, Medicare Cards, Citizen Certificates etc)</li>
                  <li>From our clients or authorised representatives</li>
                  <li>From companies or bodies that you own shares in, have an interest in, are an employee of or are an officer of</li>
                  <li>From third parties – including regulatory authorities, electronic databases, government agencies, service providers, agents, brokers, recruitment agencies, Google Analytics</li>
                </ul>
                <p className="leading-relaxed">
                  We may also collection information about you or your business that is publically available (for example, in public registers or on social media).
                </p>
              </div>

              {/* Why we collect personal information */}
              <div>
                <h2 className="font-serif font-bold text-2xl text-foreground mb-4">Why we collect personal information</h2>
                <p className="leading-relaxed mb-4">
                  The purposes for which we collect, use and hold your information may include:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Providing you or a client with services or information</li>
                  <li>Responding to enquiries</li>
                  <li>Preparing tenders</li>
                  <li>Contacting you (including via electronic messaging, by mail or by phone)</li>
                  <li>Managing our relationship with you, evaluating our business performance and building our customer database</li>
                  <li>To consider employment applications</li>
                  <li>Managing our business</li>
                  <li>Managing visits made to our Website, including analysing data collected from our Website concerning site visits and activities of users</li>
                </ul>
                <p className="leading-relaxed">
                  We may also use your personal information for other purposes not listed above but this will be made clear to you at the time we collect your personal information. We may be able to provide you with limited information and services in the absence of you providing personal information but generally we will be unable to provide you with services unless you provide personal information.
                </p>
              </div>

              {/* How we may use and disclose personal information */}
              <div>
                <h2 className="font-serif font-bold text-2xl text-foreground mb-4">How we may use and disclose personal information</h2>
                <p className="leading-relaxed mb-4">
                  LBG may use or disclose your personal information for the purpose for which it was collected. We will also use and disclose your personal information for a related second purpose, if the use or disclosure could be reasonably expected and as otherwise authorised or required by law.
                </p>
                <p className="leading-relaxed mb-4">
                  We may share your information and disclose information collected from you to our related entities, advisors (lawyers, accountants and other professionals), consultants, insurers, employees, agents, contractors and third parties. These third parties can include:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Service providers we use in conducting our business – including outsourced administrative support service provider, banks, debt recovery firms, data storage services and IT support</li>
                  <li>Government and law enforcement agencies or regulators, including courts</li>
                  <li>Credit reporting bodies and credit providers</li>
                </ul>
                <p className="leading-relaxed mb-4">
                  Sometimes, we (or the third parties) may send your information overseas, including to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Service providers or third parties who store data or operate outside Australia</li>
                  <li>Complete a project</li>
                  <li>Comply with law</li>
                </ul>
                <p className="leading-relaxed mb-4">
                  The countries in which these third parties are located will depend on the circumstances. However, in the course of our ordinary business operations, we commonly disclose personal information to third parties located in the following countries:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Philippines</li>
                  <li>United Kingdom</li>
                  <li>New Zealand</li>
                  <li>Ireland</li>
                  <li>United States of America</li>
                  <li>India</li>
                  <li>China</li>
                </ul>
                <p className="leading-relaxed">
                  We will not sell, trade or rent your personal information to any third parties for marketing purposes without your consent.
                </p>
              </div>

              {/* Keeping your information safe */}
              <div>
                <h2 className="font-serif font-bold text-2xl text-foreground mb-4">Keeping your information safe</h2>
                <p className="leading-relaxed mb-4">
                  We store information in paper, physical and electronic form.
                </p>
                <p className="leading-relaxed mb-4">
                  We will take reasonable steps to keep secure and protect any personal information which we hold about you, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Using software which encrypts information you input</li>
                  <li>Using firewalls, intrusion detection and virus scanning tools to stop viruses and unauthorised people accessing our systems</li>
                  <li>Securing our physical premises and digital storage media</li>
                  <li>Placing password protection and access control over our information technology systems and databases to limit access and protect electronic information from unauthorised interference, access, modification and disclosure</li>
                  <li>Taking regular back-ups of our electronic systems</li>
                </ul>
                <p className="leading-relaxed">
                  The providing of information via the internet is not completely secure. We cannot guarantee the security of your data provided online. You need to be vigilant about the protection of your own personal information when using the internet.
                </p>
              </div>

              {/* Cookies and Analytics */}
              <div>
                <h2 className="font-serif font-bold text-2xl text-foreground mb-4">Cookies and Analytics</h2>
                <p className="leading-relaxed mb-4">
                  We use a cookie system on our Website. Cookies are small files of information that save and retrieve information about your visit to our Website. If you do not wish to grant us the right to use cookies to gather information about you while you are using our Website, then you may elect to set your browser settings to disable cookies. This may cause parts of our Website to not function properly.
                </p>
                <p className="leading-relaxed">
                  We may use statistical analytics software tools such as Google Analytics and software known as cookies which transmit data to third party servers located overseas.
                </p>
              </div>

              {/* Not identifying yourself */}
              <div>
                <h2 className="font-serif font-bold text-2xl text-foreground mb-4">Not identifying yourself</h2>
                <p className="leading-relaxed mb-4">
                  Under the Privacy Act, individuals have the option of not identifying themselves, or of using a pseudonym. Because of the nature of our business, it is sometimes impracticable to deal with people on an anonymous basis or using a pseudonym.
                </p>
                <p className="leading-relaxed">
                  We may be able to provide you with limited information and services in the absence of you identifying yourself but generally we will be unable to provide you with services unless you have identified yourself.
                </p>
              </div>

              {/* External websites */}
              <div>
                <h2 className="font-serif font-bold text-2xl text-foreground mb-4">External websites</h2>
                <p className="leading-relaxed mb-4">
                  Our site contains links to external websites, including social media platforms. The terms of this Privacy Policy do not apply to externally linked websites and you should read their privacy policies.
                </p>
                <p className="leading-relaxed">
                  LBG makes no representation or warranty as to how third party websites may handle, collect or disclose your personal information.
                </p>
              </div>

              {/* Updating your personal information */}
              <div>
                <h2 className="font-serif font-bold text-2xl text-foreground mb-4">Updating your personal information</h2>
                <p className="leading-relaxed mb-4">
                  LBG makes all efforts to ensure that your personal information is complete, current and accurate.
                </p>
                <p className="leading-relaxed">
                  You have a right to request a correction or update of your personal information held by us. If you wish to correct or update any personal information we may hold about you, please contact us as set out below.
                </p>
              </div>

              {/* Access to personal information */}
              <div>
                <h2 className="font-serif font-bold text-2xl text-foreground mb-4">Access to personal information</h2>
                <p className="leading-relaxed mb-4">
                  You are entitled to access any personal information we have collected which is about you. If you wish to access any personal information we may hold about you, please contact us as set out below.
                </p>
                <p className="leading-relaxed">
                  We may charge for providing access to your personal information.
                </p>
              </div>

              {/* Complaint process / Contact us */}
              <div>
                <h2 className="font-serif font-bold text-2xl text-foreground mb-4">Complaint process / Contact us</h2>
                <p className="leading-relaxed mb-4">
                  If you have any enquiries about this Privacy Policy, or want to submit a written complaint to us about how we handle your personal information, please contact us at:
                </p>
                <div className="bg-muted/30 p-6 rounded-md mb-4">
                  <p className="mb-2"><strong>Attention: Privacy Officer</strong></p>
                  <p className="mb-2"><strong>Lundy Building Group</strong></p>
                  <p className="mb-2">Suite 102</p>
                  <p className="mb-2">7 – 11 Clarke Street</p>
                  <p className="mb-2">Crows Nest NSW 2065</p>
                  <p className="mb-2">Telephone: 0482 907 552</p>
                  <p>Email: admin@lundybuilding.com.au</p>
                </div>
                <p className="leading-relaxed mb-4">
                  We take any privacy complaint seriously. We will aim to resolve any such complaint in a timely and efficient manner. We will:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Keep a record of your complaint; and</li>
                  <li>Aim to provide you with a response in 30 days.</li>
                </ul>
                <p className="leading-relaxed">
                  If you are not satisfied with our handling of a complaint or the outcome of a complaint you may make an application to the Office of the Australian Information Commissioner or the Privacy Commissioner in your State or Territory.
                </p>
              </div>

              {/* Notifiable Data Breaches Scheme */}
              <div>
                <h2 className="font-serif font-bold text-2xl text-foreground mb-4">Notifiable Data Breaches Scheme</h2>
                <p className="leading-relaxed mb-4">
                  In the event that you believe that there has been a breach of the Privacy Act, we invite you to contact us as soon as possible.
                </p>
                <p className="leading-relaxed">
                  In the event of any loss, unauthorised access or disclosure of your personal information that is likely to result in serious harm to you, LBG will investigate and notify you and the Australian Information Commissioner as soon as practicable, in accordance with the Privacy Act.
                </p>
              </div>

              {/* Updating our Privacy Policy */}
              <div>
                <h2 className="font-serif font-bold text-2xl text-foreground mb-4">Updating our Privacy Policy</h2>
                <p className="leading-relaxed mb-4">
                  LBG may amend this policy from time to time. The most up to date version of our Privacy Policy is contained on our Website.
                </p>
                <p className="leading-relaxed">
                  <strong>Last modified: 27th June 2024</strong>
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
