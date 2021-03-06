import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import MainTabLayout from "layouts/MainTabLayout";
import { isValidElement, ReactNode } from "react";

type ParaListItemProps = {
  title: ReactNode | string;
  content: ReactNode | string;
};
const ParaListItem = ({ title, content }: ParaListItemProps) => (
  <ListItem>
    <Typography variant="body1" textAlign="justify">
      {isValidElement(title) ? (
        title
      ) : (
        <Typography fontWeight="bold" component="span">
          {title}
        </Typography>
      )}
      {isValidElement(content) ? content : <Typography component="span">{content}</Typography>}
    </Typography>
  </ListItem>
);

export default function TermsOfServicePage() {
  return (
    <MainTabLayout>
      <Paper elevation={0}>
        <Typography variant="h5" component="h5">
          IOHK Terms of Service Agreement
        </Typography>
        <Typography textAlign="justify">
          This terms of service agreement ("Agreement") is made between SingularityNet Limited ("Company") and any
          person ("User") who completes the process to download, utilize, or operate any software or application created
          or offered by Company, including, but not limited to, the ERC-20 Converter ("Product"). You agree that this
          Agreement is a separate and independent agreement for each such Product. By confirming your acceptance of this
          Agreement, you agree to be bound by these terms on your own behalf. If you are duly authorized by a corporate
          entity, you agree on behalf of your corporate entity that it will be bound by the Agreement. Company and User
          are collectively referred to as the "parties."
        </Typography>
        <Typography variant="subtitle2" component="p" fontWeight="bold" textAlign="justify">
          1. General Terms - All Products
        </Typography>
        <List>
          <ParaListItem
            title="1.1 Effective Date."
            content="This Agreement is effective as of the date User clicks the acceptance button or accesses, uses or installs any part of a Product (???Effective Date???). Access to, use of or installation of a Product in whole or in part signifies that the User has unconditionally agreed to be bound by the relevant terms of this Agreement. For the avoidance of doubt, these General Terms apply to all Products of the Company. In addition, Special Terms may also apply depending on the nature of the Product."
          />
          <ParaListItem
            title="1.2 User Representations."
            content="User represents and warrants to Company that: (a) User is over the age of eighteen (18) and has the power and authority to enter into and perform User's obligations under this Agreement; (b) all information provided by User to Company is truthful, accurate and complete; (c) User will comply with all laws and regulations of any applicable jurisdiction with regard to the User's access, use or installation of the Product; (d) User shall comply with all terms and conditions of this Agreement, including, without limitation, the provisions set forth at Section 1.7 (Prohibited Uses); and (e) User has provided and will provide accurate and complete information as required for access, use or installation of the Product."
          />
          <ParaListItem
            title="1.3 Reservation of Rights."
            content="The Company retains all intellectual property rights, title, and interest in and to all of the Company's work, the Product, brands, logos, and trademarks, including but not limited to, SingularityNet Limited, ERC-20 Converter, and variations of the wording of the aforementioned brands, logos, and trademarks. User acknowledges and agrees that this Agreement conveys no title or ownership rights and User does not acquire any rights over the Company???s intellectual property law, express or implied, other than those expressly granted in this Agreement. All rights not expressly granted to User are reserved by the Company."
          />
          <ParaListItem
            title="1.4 Grant of a License."
            content={
              <Typography component="span">
                The Product is licensed to User under the terms of the Apache License, Version 2.0 (the "License"). The
                Product may not be used except in compliance with the License. User may obtain a copy of the License at
                <a href="http://www.apache.org/licenses/LICENSE-2.0" target="_blank" rel="noreferrer noopener">
                  http://www.apache.org/licenses/LICENSE-2.0
                </a>
                . User acknowledges and agrees that the Company shall not be responsible for any aspect of the
                information, content, or services contained in any third-party materials or on any third party sites
                accessible or linked to the Product and/or the Company.
              </Typography>
            }
          />
          <ParaListItem
            title="1.5 User Obligations."
            content="User is solely responsible for (a) providing, maintaining and ensuring compatibility with the Product, all hardware, software, electrical and other physical requirements for User's use of the Product, including, without limitation, telecommunications and internet access connections and links, web browsers or other equipment, programs and services required to access and use the Product; (b) the security, confidentiality and integrity of all information and content that User receives, transmits through or stores on the Product; and (c) any authorized or unauthorized access to any account of User by any person."
          />
          <ParaListItem
            title="1.6 Privacy."
            content="When reasonably practicable, Company will endeavor to respect User's privacy. Company will not monitor, edit, or disclose any personal information about User or User's account, including its contents or User's use of the Product, without User's prior consent unless Company has a good faith belief that such action is necessary to: (i) comply with legal process or other legal requirements of any governmental authority; (ii) protect and defend the rights or property of Company; (iii) enforce this Agreement; (iv) protect the interests of users of the Product other than User or any other person; or (v) operate or conduct maintenance and repair of Company's services or equipment, including the Product as authorized by law. User has no expectation of privacy with respect to the Internet generally. User acknowledges that IP addresses are transmitted and recorded with each message or other information User sends from the Product."
          />
          <ParaListItem
            title="1.7 Prohibited Uses."
            content="User is solely responsible for any and all acts and omissions that occur under User's account, security information, keys or password, and User agrees not to engage in unacceptable use of the Product, which includes, without limitation, use of the Product to: (a) disseminate, store or transmit unsolicited messages, chain letters or unsolicited commercial email; (b) disseminate or transmit material that, to a reasonable person may be abusive, obscene, pornographic, defamatory, harassing, grossly offensive, vulgar, threatening or malicious; (c) disseminate, store or transmit files, graphics, software or other material that actually or potentially infringes the copyright, trademark, patent, trade secret or other intellectual property right of any person; (d) create a false identity or to otherwise attempt to mislead any person as to the identity or origin of any communication; (e) export, re-export or permit downloading of any message or content in violation of any export or import law, regulation or restriction of any applicable jurisdiction, or without all required approvals, licenses or exemptions; (f) interfere, disrupt or attempt to gain unauthorized access to other accounts on the Product or any other computer network; or (g) disseminate, store or transmit viruses, trojan horses or any other malicious code or program."
          />
          <ParaListItem
            title="1.8 Warranties."
            content="While the Product has undergone beta testing and continues to be improved by feedback from the developers community, open-source contributors and beta-testers, the Company cannot guarantee there will not be bugs in the Product. Unless required by applicable law or agreed to in writing, the Product is distributed on an &#34;AS IS&#34; BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License. User agrees that from time to time the Product may be inaccessible or inoperable for any reason, including, without limitation: (i) equipment malfunctions; (ii) periodic maintenance procedures or repairs which Company may undertake from time to time; or (iii) causes beyond the control of Company or which are not reasonably foreseeable by Company. User acknowledges that User's use of this Product is at User's risk and discretion."
          />
          <ParaListItem
            title="1.9 Liability."
            content="IN NO EVENT WILL SINGULARITYNET OR ITS SHAREHOLDERS, DIRECTORS, OFFICERS, EMPLOYEES, CONTRACTORS OR SERVICE PROVIDERS, BE LIABLE TO USER OR ANY THIRD PARTY FOR ANY USE, INTERRUPTION, DELAY OR INABILITY TO USE THE SOFTWARE, LOST REVENUE OR PROFITS, LOST REWARDS, DELAYS, INTERRUPTION OR LOSS OF SERVICE, BUSINESS OR GOODWILL, LOSS OR CORRUPTION OF DATA, LOSS OF CRYPTOCURRENCY LOSS RESULTING FROM SYSTEM OR SYSTEM SERVICE FAILURE, MALFUNCTION OR SHUTDOWN, FAILURE TO ACCURATELY TRANSFER, READ OR TRANSMIT INFORMATION, FAILURE TO UPDATE OR PROVIDE CORRECT INFORMATION, SYSTEM INCOMPATIBILITY OR PROVISION OF INCORRECT COMPATIBILITY INFORMATION OR BREACHES IN SYSTEM SECURITY, OR FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, INCIDENTAL, EXEMPLARY, SPECIAL OR PUNITIVE DAMAGES, WHETHER ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE) OR OTHERWISE, AND REGARDLESS OF WHETHER SUCH DAMAGES WERE FORESEEABLE AND WHETHER OR NOT COMPANY WAS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN NO EVENT SHALL THE COMPANY OR ITS SHAREHOLDERS, DIRECTORS, OFFICERS, EMPLOYEES, AFFILIATES OR AGENTS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM OR IN ANY WAY RELATED TO USER'S ACCESS, USE OR INSTALLATION OF THE SOFTWARE. SOME JURISDICTIONS PROHIBIT THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, THUS THIS LIMITATION OF LIABILITY MAY NOT APPLY TO USER. IF USER IS DISSATISFIED WITH THE SOFTWARE, USER'S SOLE AND EXCLUSIVE REMEDY SHALL BE FOR USER TO DISCONTINUE USE OF THE SOFTWARE."
          />
          <ParaListItem
            title="1.10 Indemnification."
            content="User agrees to indemnify, hold harmless and defend Company, its shareholders, directors, officers, employees, affiliates and agents (&#34;Indemnified Parties&#34;) from and against any action, cause, claim, damage, debt, demand or liability, including reasonable costs and attorney's fees, asserted by any person, arising out of or relating to: (a) this Agreement; (b) User's access, use or installation of the Product, including any data or work transmitted or received by User; and (c) any unacceptable use of the Product by any person, including, without limitation, any statement, data or content made, transmitted or republished by User or any person which is prohibited as unacceptable under Section 1.7. THIS INDEMNIFICATION INCLUDES THE EXPRESS INDEMNIFICATION OF COMPANY AND ALL INDEMNIFIED PARTIES FOR ANY ALLEGED NEGLIGENCE, ALLEGED GROSS NEGLIGENCE, OR OTHER ALLEGED MISCONDUCT OF COMPANY OR ANY INDEMNIFIED PARTIES."
          />
          <ParaListItem
            title="1.11 Taxes and Fees."
            content="All currency conversion charges, third party fees, sales, use, value-added, personal property or other tax, duty or levy of any kind, including interest and penalties thereon, whether imposed now or hereinafter by any governmental entity fees incurred by User by reason of User's access, use or installation of the Product shall be the sole responsibility of User."
          />
          <ParaListItem
            title="1.12 Termination."
            content="This Agreement shall continue in full force so long as User engages in any access, use or installation of the Product. Company reserves the right, in its sole discretion and without notice, at any time and for any reason, to: (a) remove or disable access to all or any portion of the Product; (b) suspend User's access to or use of all or any portion of the Product; and (c) terminate this Agreement."
          />
          <ParaListItem
            title="1.13 Amendment."
            content="Company shall have the right, at any time and without notice, to add to or modify the terms of this Agreement. Any changes to these Terms will be made available to User online. For clarity, once Company posts an updated Agreement online, the online version of such Agreement will supersede any prior versions provided to User. By continuing to access, test or use the Product, User agrees to be bound by the updated Agreement."
          />
          <ParaListItem
            title="1.14 Severance."
            content="If any provision or part-provision of this Agreement is, or becomes invalid, illegal or unenforceable, it shall be deemed modified to the minimum extent necessary to make it valid, legal and enforceable. If such modification is not possible, the relevant provision or part-provision shall be deemed deleted. Any modification to or deletion of a provision or part-provision under this paragraph shall not affect the validity and enforceability of the rest of this Agreement."
          />
          <ParaListItem
            title="1.15 Entire Agreement ??? Disclaimer of Reliance."
            content="This Agreement comprises of the General Terms which are applicable to all Users and Special Terms which are applicable to Users who download, utilize, or operate specific products or services created or offered by Company. This Agreement constitutes the entire agreement between the Parties with respect to the subject matter hereof and supersedes all prior agreements or understandings. Each Party expressly warrants and represents that it is not relying upon any statements, understandings, representations, expectations or agreements other than those expressly set forth in this Agreement."
          />
          <ParaListItem
            title="1.16 Dispute Resolution."
            content="This Agreement is subject to binding arbitration. User agrees that any and all disputes or claims against any person arising out of or in any way related to this Agreement or the access, use or installation of the Product by User or any other person shall be subject to binding arbitration under the Rules of Arbitration of the International Chamber of Commerce by one or more arbitrators appointed in accordance with the said Rules. The location of the arbitration shall be Hong Kong. The language of the arbitration shall be English."
          />
          <ParaListItem
            title="1.17 Language."
            content="This Agreement is made in the English language. In case of discrepancy between the English version and translations in other languages, the English version will prevail."
          />
        </List>
      </Paper>
    </MainTabLayout>
  );
}
