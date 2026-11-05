import React, { useState } from 'react';
import { X, Shield, Search, Copy, Check, ExternalLink, FileText } from 'lucide-react';
import { PRIVACY_POLICY_TEXT } from '../data/content.ts';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(PRIVACY_POLICY_TEXT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sectionsList = [
    '1. Introduction',
    '2. Information We Collect',
    '3. How We Use Your Information',
    '4. AI Tools and Third-Party Platforms',
    '5. Data Protection and Security',
    '6. Sharing of Information',
    '7. Cookies and Tracking Technologies',
    '8. Data Retention',
    '9. Your Privacy Rights (RA 10173)',
    '10. International Data Transfers',
    '11. Third-Party Websites and Services',
    '12. Children\'s Privacy',
    '13. Changes to This Privacy Policy',
    '14. Contact Information',
    '15. Commitment to Philippine Data Privacy Laws',
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-policy-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] rounded-3xl bg-[#090D1E] border border-cyan-500/40 shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 id="privacy-policy-title" className="text-base sm:text-lg font-bold text-white">
                Official Privacy Policy — AI AutoMission
              </h2>
              <p className="text-xs text-slate-400">
                Philippine Data Privacy Act of 2012 (RA 10173) Compliance • Effective Nov 5, 2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 border border-slate-700 transition-colors"
              title="Copy complete text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close Privacy Policy"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Search and Table of Contents Bar */}
        <div className="px-5 py-3 bg-[#070A16] border-b border-slate-800 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="relative w-full sm:w-72">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter policy sections..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>
          <div className="text-[11px] text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Official Policy Document • 15 Complete Articles</span>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-200 text-xs sm:text-sm leading-relaxed font-sans">
          {/* Document Header */}
          <div className="pb-6 border-b border-slate-800/80">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
              PRIVACY POLICY
            </h1>
            <p className="text-sm font-bold text-gold-gradient uppercase tracking-widest mb-3">
              AI AutoMission
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <span><strong>Effective Date:</strong> November 5, 2026</span>
              <span><strong>Last Updated:</strong> November 5, 2026</span>
              <span><strong>Location:</strong> Philippines</span>
            </div>
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-amber-300">1. Introduction</h3>
            <p>Welcome to <strong>AI AutoMission</strong>.</p>
            <p>
              At AI AutoMission, we value your privacy and are committed to protecting your personal information.
              This Privacy Policy explains how we collect, use, process, store, share, and protect your information
              when you visit our website, communicate with us, or use our AI automation services.
            </p>
            <p>
              AI AutoMission provides AI-powered automation solutions designed to help businesses streamline operations,
              improve productivity, automate repetitive tasks, and scale efficiently.
            </p>
            <p>
              By accessing our website or using our services, you acknowledge that you have read this Privacy Policy.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 pt-4 border-t border-slate-800/60">
            <h3 className="text-base sm:text-lg font-bold text-amber-300">2. Information We Collect</h3>
            <p>We may collect the following categories of information:</p>

            <div className="space-y-2 pl-3 border-l-2 border-cyan-500/40">
              <h4 className="font-bold text-cyan-300">A. Personal Information</h4>
              <p>When you contact us, request a consultation, or inquire about our services, we may collect:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-300">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business or company name</li>
                <li>Job title or professional role</li>
                <li>Information submitted through contact forms</li>
                <li>Information shared during consultations or business communications</li>
              </ul>
            </div>

            <div className="space-y-2 pl-3 border-l-2 border-purple-500/40 mt-3">
              <h4 className="font-bold text-purple-300">B. Business and Project Information</h4>
              <p>To understand your business requirements and deliver customized automation solutions, we may collect:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-300">
                <li>Business processes and operational details</li>
                <li>Workflow requirements</li>
                <li>Customer support requirements</li>
                <li>CRM information and integration requirements</li>
                <li>Automation project specifications</li>
                <li>Information necessary to configure and maintain automation systems</li>
              </ul>
            </div>

            <div className="space-y-2 pl-3 border-l-2 border-amber-500/40 mt-3">
              <h4 className="font-bold text-amber-300">C. Technical Information</h4>
              <p>When you visit our website, certain technical information may be collected automatically, including:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-300">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Website usage data</li>
                <li>Pages visited</li>
                <li>Referral sources</li>
                <li>Cookies and similar tracking technologies, where enabled</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 pt-4 border-t border-slate-800/60">
            <h3 className="text-base sm:text-lg font-bold text-amber-300">3. How We Use Your Information</h3>
            <p>AI AutoMission uses collected information for legitimate business purposes, including:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-300">
              <li>Responding to inquiries and consultation requests.</li>
              <li>Providing AI automation services and solutions.</li>
              <li>Developing customized AI agents and automated workflows.</li>
              <li>Integrating business applications and software platforms.</li>
              <li>Managing client relationships and projects.</li>
              <li>Sending service-related updates and communications.</li>
              <li>Improving our website, services, and customer experience.</li>
              <li>Maintaining security and preventing unauthorized activities.</li>
              <li>Complying with applicable legal and regulatory obligations.</li>
            </ul>
            <p className="text-xs text-slate-400 italic">
              We only intend to collect and process information that is reasonably necessary for these purposes.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 pt-4 border-t border-slate-800/60">
            <h3 className="text-base sm:text-lg font-bold text-amber-300">4. AI Tools and Third-Party Platforms</h3>
            <p>
              AI AutoMission uses various third-party platforms and technologies to develop, operate, and maintain AI-powered automation systems.
            </p>
            <p>Depending on the project and services requested, these platforms may include:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-300">
              <li><strong>OpenAI</strong> – AI-powered assistants, language models, and intelligent automation.</li>
              <li><strong>Make</strong> – Workflow automation and application integrations.</li>
              <li><strong>n8n</strong> – Automated workflows and custom system integrations.</li>
              <li><strong>Zapier</strong> – Business process automation and application connectivity.</li>
              <li><strong>GoHighLevel</strong> – CRM, lead management, marketing, and customer communication automation.</li>
              <li><strong>Google Workspace</strong> – Business communications, document management, and productivity tools.</li>
              <li><strong>HubSpot</strong> – CRM, marketing, sales, and customer relationship management.</li>
              <li><strong>Other third-party platforms</strong> – Additional tools required to deliver customized automation solutions.</li>
            </ul>
            <p>
              Information may be processed through these platforms when necessary to perform requested services, execute automated workflows,
              generate AI responses, manage customer interactions, or connect business applications.
            </p>
            <p>
              Third-party platforms operate under their respective privacy policies, security practices, and data processing terms.
            </p>
            <p>
              AI AutoMission aims to use reputable providers and appropriate security configurations when handling client and customer information.
            </p>
            <p>
              We do not intentionally use confidential client information for unrelated purposes. Where applicable, clients should review
              the data processing and AI model training settings of the platforms used in their automation systems.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 pt-4 border-t border-slate-800/60">
            <h3 className="text-base sm:text-lg font-bold text-amber-300">5. Data Protection and Security</h3>
            <p>
              AI AutoMission takes reasonable organizational, technical, and administrative measures to protect personal information against:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-300">
              <li>Unauthorized access.</li>
              <li>Accidental disclosure.</li>
              <li>Data loss or destruction.</li>
              <li>Unauthorized modification.</li>
              <li>Misuse of personal information.</li>
            </ul>
            <p>Depending on the systems used, security measures may include:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-300">
              <li>Restricted access to sensitive information.</li>
              <li>Secure authentication practices.</li>
              <li>Encryption where supported.</li>
              <li>Appropriate access permissions.</li>
              <li>Secure software integrations.</li>
              <li>Use of trusted hosting and technology providers.</li>
            </ul>
            <p className="text-xs text-slate-400 italic">
              Although we make reasonable efforts to protect information, no internet-based service, software platform,
              or electronic transmission method can guarantee absolute security.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3 pt-4 border-t border-slate-800/60">
            <h3 className="text-base sm:text-lg font-bold text-amber-300">6. Sharing of Information</h3>
            <p>AI AutoMission does not sell or rent personal information to third parties.</p>
            <p>We may share information when reasonably necessary:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-300">
              <li>With trusted technology providers that support our services.</li>
              <li>With AI platforms when required to perform requested automation functions.</li>
              <li>With CRM and communication platforms used for client projects.</li>
              <li>With hosting and infrastructure providers.</li>
              <li>With authorized business partners when necessary to fulfill agreed services.</li>
              <li>When required by applicable laws, regulations, or valid legal processes.</li>
              <li>When necessary to protect our rights, security, or legitimate business interests.</li>
            </ul>
            <p>
              We aim to ensure that information shared with service providers is handled with appropriate privacy and security safeguards.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 pt-4 border-t border-slate-800/60">
            <h3 className="text-base sm:text-lg font-bold text-amber-300">7. Cookies and Tracking Technologies</h3>
            <p>Our website may use cookies and similar technologies to improve user experience and website performance.</p>
            <p>These technologies may be used to:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-300">
              <li>Remember user preferences.</li>
              <li>Analyze website traffic.</li>
              <li>Understand visitor interactions.</li>
              <li>Improve website functionality.</li>
              <li>Measure marketing and advertising performance.</li>
            </ul>
            <p>You may manage or disable cookies through your browser settings.</p>
            <p>Where legally required, we will obtain consent before using non-essential cookies or tracking technologies.</p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3 pt-4 border-t border-slate-800/60">
            <h3 className="text-base sm:text-lg font-bold text-amber-300">8. Data Retention</h3>
            <p>
              AI AutoMission retains personal information only for as long as reasonably necessary to fulfill the purposes
              described in this Privacy Policy.
            </p>
            <p>Retention periods may depend on:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-300">
              <li>The nature of the information collected.</li>
              <li>The duration of the client relationship.</li>
              <li>Contractual obligations.</li>
              <li>Legal and regulatory requirements.</li>
              <li>Legitimate business and recordkeeping purposes.</li>
            </ul>
            <p>
              When information is no longer necessary, we will take reasonable steps to securely delete, destroy, or anonymize it,
              subject to applicable legal requirements and backup retention processes.
            </p>
            <p>Information processed through third-party platforms may also be subject to those providers' retention and deletion policies.</p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3 pt-4 border-t border-slate-800/60">
            <h3 className="text-base sm:text-lg font-bold text-amber-300">
              9. Your Privacy Rights (Philippine Data Privacy Act of 2012)
            </h3>
            <p>
              Under applicable Philippine privacy laws, including the Data Privacy Act of 2012 (Republic Act No. 10173),
              you may have the following rights, subject to applicable legal conditions:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-300">
              <li><strong>Right to Be Informed:</strong> Know how and why your personal information is collected and processed.</li>
              <li><strong>Right to Access:</strong> Request access to your personal information.</li>
              <li><strong>Right to Object:</strong> Object to certain types of personal information processing.</li>
              <li><strong>Right to Erasure or Blocking:</strong> Request deletion or blocking of personal information when legally justified.</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete information.</li>
              <li><strong>Right to Data Portability:</strong> Request a copy of your personal information in a structured and commonly used format, where applicable.</li>
              <li><strong>Right to Damages:</strong> Seek compensation for damages resulting from unlawful or unauthorized processing, where legally established.</li>
              <li><strong>Right to File a Complaint:</strong> Submit a complaint to the National Privacy Commission when your privacy rights have been violated.</li>
            </ul>
            <p className="text-xs text-slate-400">
              You may exercise applicable rights by contacting us through the email address provided below.
              We may request reasonable identity verification before processing certain requests.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3 pt-4 border-t border-slate-800/60">
            <h3 className="text-base sm:text-lg font-bold text-amber-300">10. International Data Transfers</h3>
            <p>
              Some third-party AI platforms, automation providers, cloud services, and software applications used by
              AI AutoMission may process or store information outside the Philippines.
            </p>
            <p>
              When international data transfers occur, we aim to implement appropriate safeguards and comply with applicable
              Philippine data protection requirements.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3 pt-4 border-t border-slate-800/60">
            <h3 className="text-base sm:text-lg font-bold text-amber-300">11. Third-Party Websites and Services</h3>
            <p>Our website or services may contain links to external websites, applications, or third-party platforms.</p>
            <p>AI AutoMission does not control the privacy practices, security, or content of these external services.</p>
            <p>
              We encourage users to review the privacy policies of third-party providers before submitting personal information
              through their platforms.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-3 pt-4 border-t border-slate-800/60">
            <h3 className="text-base sm:text-lg font-bold text-amber-300">12. Children's Privacy</h3>
            <p>Our website and professional AI automation services are primarily intended for businesses, professionals, and adults.</p>
            <p>We do not knowingly collect personal information from children without appropriate authorization or a lawful basis.</p>
            <p>
              If we become aware that personal information has been collected from a child inappropriately, we will take reasonable
              steps to address the situation in accordance with applicable laws.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-3 pt-4 border-t border-slate-800/60">
            <h3 className="text-base sm:text-lg font-bold text-amber-300">13. Changes to This Privacy Policy</h3>
            <p>AI AutoMission reserves the right to update or modify this Privacy Policy when necessary to reflect changes in:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-300">
              <li>Our business operations.</li>
              <li>AI technologies and automation services.</li>
              <li>Third-party software and integrations.</li>
              <li>Privacy and data protection requirements.</li>
              <li>Applicable laws and regulations.</li>
            </ul>
            <p>Any changes will be published on this page with an updated revision date.</p>
            <p>We encourage visitors and clients to review this Privacy Policy periodically.</p>
          </section>

          {/* Section 14 */}
          <section className="space-y-3 pt-4 border-t border-slate-800/60">
            <h3 className="text-base sm:text-lg font-bold text-amber-300">14. Contact Information</h3>
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or how your personal information is handled,
              please contact us:
            </p>
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5 font-mono text-xs text-slate-300">
              <p><strong>Business Name:</strong> AI AutoMission</p>
              <p>
                <strong>Email Address:</strong>{' '}
                <a
                  href="mailto:janryantanmiraflor.va@gmail.com"
                  className="text-amber-400 hover:underline"
                >
                  janryantanmiraflor.va@gmail.com
                </a>
              </p>
              <p><strong>Business Location:</strong> Philippines</p>
              <p><strong>Website:</strong> AI AutoMission Official Website</p>
            </div>
            <p className="text-xs text-slate-400">
              For privacy-related inquiries, please use the email address provided above. We will make reasonable efforts to respond
              to privacy-related requests within an appropriate timeframe.
            </p>
          </section>

          {/* Section 15 */}
          <section className="space-y-3 pt-4 border-t border-slate-800/60">
            <h3 className="text-base sm:text-lg font-bold text-amber-300">
              15. Commitment to Philippine Data Privacy Laws
            </h3>
            <p>
              AI AutoMission aims to handle personal information in accordance with the applicable provisions of the
              Philippine Data Privacy Act of 2012 (Republic Act No. 10173), its Implementing Rules and Regulations,
              and relevant issuances of the National Privacy Commission.
            </p>
            <p>We recognize and uphold the principles of:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-300">
              <li><strong>Transparency</strong> – Being clear about how personal information is collected and processed.</li>
              <li><strong>Legitimate Purpose</strong> – Processing information for lawful and declared purposes.</li>
              <li><strong>Proportionality</strong> – Collecting only information that is adequate, relevant, and necessary.</li>
            </ul>
            <p className="text-slate-300">
              We are committed to maintaining responsible data handling practices while providing businesses with intelligent
              AI automation solutions.
            </p>
          </section>

          {/* Final Brand Footer inside modal */}
          <div className="pt-6 border-t border-slate-800 text-center text-xs text-slate-400">
            <p className="font-bold text-white uppercase tracking-wider">AI AutoMission</p>
            <p className="italic text-amber-400 my-1">Automate Smarter. Work Better. Grow Faster.</p>
            <p className="text-[11px]">Your business deserves intelligent automation, and your privacy deserves responsible protection.</p>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors"
          >
            Close Policy
          </button>
        </div>
      </div>
    </div>
  );
};
