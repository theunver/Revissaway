// Privacy Policy – DRAFT v2 (source: QA legal-drafts/privacy-policy-DRAFT.md). NOT legally approved.
// EN = patient-facing text of the draft; internal notes are not shown. Every unresolved item is a
// <Pending> / <Proposed> marker. TR = faithful translation of the EN draft – REVIEW:legal (language + legal).
import { ContactBox, H3, List, OList, Para, Pending, Proposed } from "@/components/legal/LegalDoc";

export function PrivacyEN() {
  return (
    <>
      <H3>1. Who we are</H3>
      <Para>
        This website is operated by <Pending>legal name, ABN and business-name registration</Pending> trading as
        RevissaWay (&ldquo;RevissaWay&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;).
      </Para>
      <Para>
        RevissaWay is a health tourism coordination service operating from Australia. We do not provide medical
        treatment. Treatment is provided by independent healthcare providers (clinics and hospitals) in Türkiye. We work
        with more than one independent provider.
      </Para>
      <Para>Privacy contact (postal address: <Pending>postal address, if any</Pending>):</Para>
      <ContactBox />
      <Para>
        This policy explains how we handle personal information, including under the Privacy Act 1988 (Cth) where it
        applies to us. <Pending>whether and how the Privacy Act 1988 applies to RevissaWay</Pending>
      </Para>

      <H3>2. Information we collect</H3>
      <Para><strong>From you</strong>, we may collect:</Para>
      <List>
        <li>your name, email address and phone number;</li>
        <li>the treatment you are interested in, your preferred dates and anything you write in your message;</li>
        <li>
          information you send us by WhatsApp, email or phone, which may include <strong>photographs</strong> and{" "}
          <strong>health information</strong> (for example, medical history, medications or images of the area to be
          treated).
        </li>
      </List>
      <Para>
        Information about the treatment you are interested in, and anything about your health (including photographs
        taken for a treatment assessment), is health information. Health information is sensitive information. We
        collect it only with your consent.
      </Para>
      <Para>
        Please do not include detailed medical history or photographs in our website form. If a treating provider needs
        them, we will first tell you who that provider is and ask for your separate consent (see section 5).
      </Para>
      <Para>
        <strong>From a treating provider:</strong> when you ask us to coordinate with a provider, we receive that
        provider&apos;s assessment of your enquiry, its treatment proposal and its quotation, and we pass them on to you.
      </Para>
      <Para>
        <strong>From our website:</strong> technical information such as your IP address, browser and device type is
        processed by our hosting provider. To prevent spam, our website briefly processes your IP address to limit
        repeated submissions; it is not included in your enquiry. If you allow analytics or marketing tools, additional
        information is collected as described in section 6.
      </Para>
      <Para>We do not collect payment details. You pay treatment providers directly.</Para>

      <H3>3. How we use your information</H3>
      <Para>We use your information to:</Para>
      <List>
        <li>respond to your enquiry and discuss treatment and travel options;</li>
        <li>
          with your separate, explicit consent, share your information with a named treating provider in Türkiye so it
          can assess your enquiry, and pass its assessment, treatment proposal and quotation back to you (section 5);
        </li>
        <li>coordinate travel, accommodation and appointments you ask us to arrange;</li>
        <li>keep our website secure (for example, to prevent spam and abuse);</li>
        <li>if you allow it, understand how our website is used and measure our advertising (section 6).</li>
      </List>
      <Proposed>
        &ldquo;Coordinating travel and accommodation may include sharing your name, contact details and travel dates with
        the relevant hotel or transfer provider.&rdquo;
      </Proposed>
      <Para>
        We do not sell your personal information. RevissaWay may receive a commission (referral fee) from a treatment
        provider. We will tell you about this before we share your information with that provider.{" "}
        <Pending>when a commission is payable; legal review of the commission disclosure</Pending>
      </Para>
      <Proposed>
        &ldquo;We will only send you marketing messages with your consent, and you can opt out at any time.&rdquo;
      </Proposed>

      <H3>4. Service providers who handle your information</H3>
      <Para>We use the following providers. They may store or process information in the United States and other countries:</Para>
      <List>
        <li>
          <strong>Vercel Inc.</strong> – website hosting. Our server-side functions run in Sydney, Australia; technical
          data may be processed in other countries.
        </li>
        <li>
          <strong>Google</strong> – email. Enquiries submitted through our website are sent by email using Google&apos;s
          Gmail service to our business mailbox (info@revissaway.com.au).{" "}
          <Pending>sending email account and who can access it</Pending> Also Google Analytics (only if you allow it) and
          YouTube video players (privacy-enhanced mode).
        </li>
        <li>
          <strong>Meta Platforms</strong> – the Meta Pixel (only if you allow it) and <strong>WhatsApp</strong>. When you
          message us on WhatsApp, your messages and photographs are handled by WhatsApp and stored on the device(s) we
          use for WhatsApp. <Pending>devices used and whether chat backups are enabled</Pending>
        </li>
      </List>

      <H3>5. Sharing your information with a treating provider in Türkiye</H3>
      <Para>Before we share your health information or photographs with a treating provider, we will:</Para>
      <OList>
        <li>tell you the name and location of the provider (clinic or hospital) in Türkiye that we propose to share it with;</li>
        <li>tell you exactly what information we will share and why;</li>
        <li>tell you that we may receive a referral fee from that provider; and</li>
        <li>ask for your separate, explicit consent, which we record.</li>
      </OList>
      <Para>
        <Pending>this process is proposed and not yet in operation</Pending>
      </Para>
      <Para>
        We share only the information you agreed to. The provider then sends us its assessment, treatment proposal and
        quotation, which we pass on to you. You decide whether to proceed and you pay the provider directly.
      </Para>
      <Para>
        The provider is an independent healthcare provider. It will hold your information in Türkiye and handle it under
        Turkish law, including Law No. 6698 on the Protection of Personal Data (KVKK), and may ask for your own consent.
      </Para>
      <Para>
        Australian privacy law may not apply to how the provider handles your information, and you may not be able to
        seek redress under the Privacy Act for the provider&apos;s acts or practices.{" "}
        <Pending>
          this sentence depends on the approach to overseas disclosure (APP 8); KVKK questions, including transfers from
          the provider back to Australia
        </Pending>
      </Para>

      <H3>6. Analytics, advertising tools and cookies</H3>
      <Para>
        Analytics and marketing tools are <strong>off by default</strong>. They only run if you turn them on in our
        privacy choices (&ldquo;Accept all&rdquo;, or &ldquo;Choose&rdquo;). You can change your choices at any time using
        &ldquo;Privacy settings&rdquo; at the bottom of every page; when you withdraw consent we delete these tools&apos;
        cookies on our website.
      </Para>
      <List>
        <li>
          <strong>Google Analytics</strong> (Analytics choice): records visits and page views using cookies. We send
          generic page names (for example &ldquo;Home&rdquo;), remove most URL parameters, send only the website (not the
          page) that referred you, and turn off Google Signals and ad personalisation.
        </li>
        <li>
          <strong>Meta Pixel</strong> (Marketing choice): measures visits and actions such as clicking our WhatsApp
          button, to measure our Facebook and Instagram advertising, using cookies.
        </li>
        <li>Neither tool is loaded on our treatment pages (hair transplant, cosmetic surgery and dental pages).</li>
        <li>
          We never send the contents of our contact form (such as your name, email, phone number, message or treatment
          of interest) to Google Analytics or Meta.
        </li>
        <li>Our YouTube players use YouTube&apos;s privacy-enhanced mode. Google may still collect information when a video plays.</li>
        <li>Our website stores your language choice and your privacy choices in your browser&apos;s local storage.</li>
        <li>Our fonts are hosted on our own website.</li>
      </List>

      <H3>7. Storage, security and retention</H3>
      <Para>
        Your information is held in our email account and in our WhatsApp conversations{" "}
        <Pending>any other storage locations</Pending>. We protect it with the measures described in our internal data
        handling procedure, including <Pending>only the security measures actually in place at publication</Pending>.
      </Para>
      <Para>
        Retention: <Pending>retention period undecided – subject to legal and operational review</Pending>. When we no
        longer need information, we delete it, including photographs and messages in WhatsApp, in line with our
        retention schedule.
      </Para>

      <H3>8. Access, correction and deletion</H3>
      <Para>
        You can ask to access or correct the personal information we hold about you, or ask us to delete it, using the
        contact details in section 1. We aim to respond within 30 days and may need to verify your identity. If you ask
        us to delete information that we have already shared with a treating provider, we will tell you how to contact
        that provider, because it holds its own copy.
      </Para>

      <H3>9. Withdrawing consent</H3>
      <Para>
        You can withdraw your consent to us using your health information, or to sharing it with a treating provider, at
        any time by contacting us. We will stop further sharing and let the provider know. This does not affect
        information already shared with your consent.
      </Para>

      <H3>10. Complaints</H3>
      <Para>
        Please contact us first. If you are not satisfied with our response, you can contact the Office of the
        Australian Information Commissioner (www.oaic.gov.au, 1300 363 992). New Zealand residents can contact the
        Office of the Privacy Commissioner (www.privacy.org.nz).
      </Para>

      <H3>11. Age</H3>
      <Para>Our services are intended for adults aged 18 and over.</Para>
      <Proposed>&ldquo;If you are under 18, please do not send us your information.&rdquo;</Proposed>

      <H3>12. Language</H3>
      <Para>
        This policy is available in English and Turkish. <Pending>which language version prevails</Pending>
      </Para>

      <H3>13. Changes</H3>
      <Para>
        We may update this policy. The date and version at the top show when it last changed. If we change how we use
        health information, we will ask for your consent again.
      </Para>
    </>
  );
}

export function PrivacyTR() {
  return (
    <>
      <H3>1. Biz kimiz</H3>
      <Para>
        Bu web sitesi, RevissaWay adıyla faaliyet gösteren <Pending>yasal ad, ABN ve iş adı kaydı</Pending>{" "}
        (&ldquo;RevissaWay&rdquo;, &ldquo;biz&rdquo;) tarafından işletilmektedir.
      </Para>
      <Para>
        RevissaWay, Avustralya&apos;dan faaliyet gösteren bir sağlık turizmi koordinasyon hizmetidir. Tıbbi tedavi
        sunmayız. Tedavi, Türkiye&apos;deki bağımsız sağlık hizmeti sağlayıcıları (klinikler ve hastaneler) tarafından
        verilir. Birden fazla bağımsız sağlayıcıyla çalışırız.
      </Para>
      <Para>Gizlilik iletişimi (posta adresi: <Pending>varsa posta adresi</Pending>):</Para>
      <ContactBox />
      <Para>
        Bu politika, kişisel bilgileri nasıl işlediğimizi, bize uygulandığı ölçüde 1988 tarihli Avustralya Gizlilik Yasası
        (Privacy Act 1988 (Cth)) kapsamı dahil olmak üzere açıklar.{" "}
        <Pending>Gizlilik Yasası&apos;nın RevissaWay&apos;e uygulanıp uygulanmadığı ve nasıl uygulandığı</Pending>
      </Para>

      <H3>2. Topladığımız bilgiler</H3>
      <Para><strong>Sizden</strong> şu bilgileri toplayabiliriz:</Para>
      <List>
        <li>adınız, e-posta adresiniz ve telefon numaranız;</li>
        <li>ilgilendiğiniz tedavi, tercih ettiğiniz tarihler ve mesajınızda yazdığınız her şey;</li>
        <li>
          WhatsApp, e-posta veya telefonla bize gönderdiğiniz, <strong>fotoğraflar</strong> ve{" "}
          <strong>sağlık bilgileri</strong> (örneğin tıbbi geçmiş, kullandığınız ilaçlar veya tedavi edilecek bölgenin
          görüntüleri) içerebilecek bilgiler.
        </li>
      </List>
      <Para>
        İlgilendiğiniz tedaviye ilişkin bilgiler ve sağlığınızla ilgili her türlü bilgi (tedavi değerlendirmesi için
        çekilen fotoğraflar dahil) sağlık bilgisidir. Sağlık bilgisi hassas bilgidir. Bu bilgileri yalnızca onayınızla
        toplarız.
      </Para>
      <Para>
        Lütfen web sitemizdeki forma ayrıntılı tıbbi geçmiş veya fotoğraf eklemeyin. Bir tedavi sağlayıcısının bunlara
        ihtiyacı olursa, önce size o sağlayıcının kim olduğunu söyler ve ayrı onayınızı isteriz (bkz. 5. bölüm).
      </Para>
      <Para>
        <strong>Tedavi sağlayıcısından:</strong> bir sağlayıcıyla koordinasyon yapmamızı istediğinizde, o sağlayıcının
        talebinize ilişkin değerlendirmesini, tedavi önerisini ve fiyat teklifini alır ve size iletiriz.
      </Para>
      <Para>
        <strong>Web sitemizden:</strong> IP adresiniz, tarayıcınız ve cihaz türünüz gibi teknik bilgiler barındırma
        hizmeti sağlayıcımız tarafından işlenir. İstenmeyen gönderimleri önlemek için web sitemiz, tekrarlanan
        gönderimleri sınırlamak amacıyla IP adresinizi kısa süreliğine işler; IP adresiniz talebinize eklenmez. Analitik
        veya pazarlama araçlarına izin verirseniz, 6. bölümde açıklandığı şekilde ek bilgiler toplanır.
      </Para>
      <Para>Ödeme bilgisi toplamayız. Tedavi ödemelerini doğrudan sağlayıcılara yaparsınız.</Para>

      <H3>3. Bilgilerinizi nasıl kullanırız</H3>
      <Para>Bilgilerinizi şu amaçlarla kullanırız:</Para>
      <List>
        <li>talebinize yanıt vermek, tedavi ve seyahat seçeneklerini sizinle görüşmek;</li>
        <li>
          ayrı ve açık onayınızla, talebinizi değerlendirebilmesi için bilgilerinizi Türkiye&apos;deki adı belirtilen bir
          tedavi sağlayıcısıyla paylaşmak ve sağlayıcının değerlendirmesini, tedavi önerisini ve fiyat teklifini size
          iletmek (5. bölüm);
        </li>
        <li>düzenlememizi istediğiniz seyahat, konaklama ve randevuları koordine etmek;</li>
        <li>web sitemizi güvende tutmak (örneğin istenmeyen gönderimleri ve kötüye kullanımı önlemek);</li>
        <li>izin verirseniz, web sitemizin nasıl kullanıldığını anlamak ve reklamlarımızı ölçmek (6. bölüm).</li>
      </List>
      <Proposed>
        &ldquo;Seyahat ve konaklama koordinasyonu, adınızın, iletişim bilgilerinizin ve seyahat tarihlerinizin ilgili otel
        veya transfer sağlayıcısıyla paylaşılmasını içerebilir.&rdquo;
      </Proposed>
      <Para>
        Kişisel bilgilerinizi satmayız. RevissaWay bir tedavi sağlayıcısından komisyon (yönlendirme ücreti) alabilir.
        Bilgilerinizi o sağlayıcıyla paylaşmadan önce bunu size bildiririz.{" "}
        <Pending>komisyonun hangi durumda ödendiği; komisyon açıklamasının hukuki incelemesi</Pending>
      </Para>
      <Proposed>
        &ldquo;Size yalnızca onayınızla pazarlama mesajı göndeririz ve istediğiniz zaman bunu durdurabilirsiniz.&rdquo;
      </Proposed>

      <H3>4. Bilgilerinizi işleyen hizmet sağlayıcıları</H3>
      <Para>
        Aşağıdaki hizmet sağlayıcılarını kullanırız. Bunlar bilgileri Amerika Birleşik Devletleri&apos;nde ve diğer
        ülkelerde saklayabilir veya işleyebilir:
      </Para>
      <List>
        <li>
          <strong>Vercel Inc.</strong> – web sitesi barındırma. Sunucu tarafı işlevlerimiz Sidney, Avustralya&apos;da
          çalışır; teknik veriler başka ülkelerde işlenebilir.
        </li>
        <li>
          <strong>Google</strong> – e-posta. Web sitemiz üzerinden gönderilen talepler, Google&apos;ın Gmail hizmeti
          kullanılarak iş e-posta kutumuza (info@revissaway.com.au) e-postayla iletilir.{" "}
          <Pending>gönderen e-posta hesabı ve bu hesaba kimlerin erişebildiği</Pending> Ayrıca Google Analytics (yalnızca
          izin verirseniz) ve YouTube video oynatıcıları (gizlilik artırılmış mod).
        </li>
        <li>
          <strong>Meta Platforms</strong> – Meta Pixel (yalnızca izin verirseniz) ve <strong>WhatsApp</strong>. Bize
          WhatsApp üzerinden mesaj gönderdiğinizde, mesajlarınız ve fotoğraflarınız WhatsApp tarafından işlenir ve
          WhatsApp için kullandığımız cihaz(lar)da saklanır.{" "}
          <Pending>kullanılan cihazlar ve sohbet yedeklemesinin açık olup olmadığı</Pending>
        </li>
      </List>

      <H3>5. Bilgilerinizin Türkiye&apos;deki bir tedavi sağlayıcısıyla paylaşılması</H3>
      <Para>Sağlık bilgilerinizi veya fotoğraflarınızı bir tedavi sağlayıcısıyla paylaşmadan önce:</Para>
      <OList>
        <li>paylaşmayı önerdiğimiz Türkiye&apos;deki sağlayıcının (klinik veya hastane) adını ve yerini size bildiririz;</li>
        <li>hangi bilgileri neden paylaşacağımızı tam olarak açıklarız;</li>
        <li>o sağlayıcıdan yönlendirme ücreti alabileceğimizi size bildiririz; ve</li>
        <li>ayrı ve açık onayınızı ister ve bunu kayda geçiririz.</li>
      </OList>
      <Para>
        <Pending>bu süreç önerilmiştir ve henüz uygulanmamaktadır</Pending>
      </Para>
      <Para>
        Yalnızca onay verdiğiniz bilgileri paylaşırız. Sağlayıcı daha sonra değerlendirmesini, tedavi önerisini ve fiyat
        teklifini bize gönderir, biz de bunları size iletiriz. Devam edip etmeyeceğinize siz karar verirsiniz ve ödemeyi
        doğrudan sağlayıcıya yaparsınız.
      </Para>
      <Para>
        Sağlayıcı bağımsız bir sağlık hizmeti sağlayıcısıdır. Bilgilerinizi Türkiye&apos;de tutar ve 6698 sayılı Kişisel
        Verilerin Korunması Kanunu (KVKK) dahil Türk hukukuna göre işler; sizden ayrıca kendi onayınızı isteyebilir.
      </Para>
      <Para>
        Avustralya gizlilik hukuku, sağlayıcının bilgilerinizi nasıl işlediğine uygulanmayabilir ve sağlayıcının eylem
        veya uygulamaları nedeniyle Gizlilik Yasası kapsamında hak arayamayabilirsiniz.{" "}
        <Pending>
          bu cümle yurt dışına aktarım yaklaşımına (APP 8) bağlıdır; sağlayıcıdan Avustralya&apos;ya geri aktarım dahil
          KVKK soruları
        </Pending>
      </Para>

      <H3>6. Analitik, reklam araçları ve çerezler</H3>
      <Para>
        Analitik ve pazarlama araçları <strong>varsayılan olarak kapalıdır</strong>. Yalnızca gizlilik tercihlerimizde
        bunları açarsanız (&ldquo;Tümünü kabul et&rdquo; veya &ldquo;Seç&rdquo;) çalışırlar. Tercihlerinizi her sayfanın
        altındaki &ldquo;Gizlilik ayarları&rdquo; bağlantısıyla istediğiniz zaman değiştirebilirsiniz; onayınızı geri
        çektiğinizde bu araçların web sitemizdeki çerezlerini sileriz.
      </Para>
      <List>
        <li>
          <strong>Google Analytics</strong> (Analitik seçeneği): ziyaretleri ve sayfa görüntülemelerini çerezlerle kaydeder.
          Genel sayfa adları (örneğin &ldquo;Ana Sayfa&rdquo;) göndeririz, URL parametrelerinin çoğunu kaldırırız, sizi
          yönlendiren sayfayı değil yalnızca web sitesini göndeririz ve Google Signals ile reklam kişiselleştirmeyi
          kapatırız.
        </li>
        <li>
          <strong>Meta Pixel</strong> (Pazarlama seçeneği): Facebook ve Instagram reklamlarımızı ölçmek için ziyaretleri
          ve WhatsApp düğmemize tıklama gibi işlemleri çerezlerle ölçer.
        </li>
        <li>Bu araçların hiçbiri tedavi sayfalarımızda (saç ekimi, estetik cerrahi ve diş sayfaları) yüklenmez.</li>
        <li>
          İletişim formumuzun içeriğini (adınız, e-posta adresiniz, telefon numaranız, mesajınız veya ilgilendiğiniz
          tedavi gibi) asla Google Analytics&apos;e veya Meta&apos;ya göndermeyiz.
        </li>
        <li>
          YouTube oynatıcılarımız YouTube&apos;un gizlilik artırılmış modunu kullanır. Bir video oynatıldığında Google
          yine de bilgi toplayabilir.
        </li>
        <li>Web sitemiz dil tercihinizi ve gizlilik tercihlerinizi tarayıcınızın yerel depolama alanında saklar.</li>
        <li>Yazı tiplerimiz kendi web sitemizde barındırılır.</li>
      </List>

      <H3>7. Saklama, güvenlik ve saklama süresi</H3>
      <Para>
        Bilgileriniz e-posta hesabımızda ve WhatsApp konuşmalarımızda tutulur{" "}
        <Pending>varsa diğer saklama yerleri</Pending>. Bilgilerinizi iç veri işleme prosedürümüzde açıklanan
        önlemlerle koruruz; bunlar arasında{" "}
        <Pending>yalnızca yayın tarihinde fiilen uygulanan güvenlik önlemleri</Pending> yer alır.
      </Para>
      <Para>
        Saklama süresi:{" "}
        <Pending>saklama süresi belirlenmedi – hukuki ve operasyonel incelemeye tabidir</Pending>. Artık ihtiyaç
        duymadığımız bilgileri, WhatsApp&apos;taki fotoğraflar ve mesajlar dahil, saklama planımıza uygun olarak sileriz.
      </Para>

      <H3>8. Erişim, düzeltme ve silme</H3>
      <Para>
        1. bölümdeki iletişim bilgilerini kullanarak hakkınızda tuttuğumuz kişisel bilgilere erişmeyi, bunların
        düzeltilmesini veya silinmesini isteyebilirsiniz. 30 gün içinde yanıt vermeyi hedefleriz ve kimliğinizi
        doğrulamamız gerekebilir. Bir tedavi sağlayıcısıyla daha önce paylaştığımız bilgilerin silinmesini isterseniz,
        sağlayıcı kendi kopyasını tuttuğu için o sağlayıcıyla nasıl iletişime geçebileceğinizi size bildiririz.
      </Para>

      <H3>9. Onayın geri çekilmesi</H3>
      <Para>
        Sağlık bilgilerinizi kullanmamıza veya bunları bir tedavi sağlayıcısıyla paylaşmamıza verdiğiniz onayı,
        bizimle iletişime geçerek istediğiniz zaman geri çekebilirsiniz. Bundan sonraki paylaşımları durdurur ve
        sağlayıcıyı bilgilendiririz. Bu, onayınızla daha önce paylaşılmış bilgileri etkilemez.
      </Para>

      <H3>10. Şikayetler</H3>
      <Para>
        Lütfen önce bizimle iletişime geçin. Yanıtımızdan memnun kalmazsanız Avustralya Bilgi Komiserliği&apos;ne (Office
        of the Australian Information Commissioner – www.oaic.gov.au, 1300 363 992) başvurabilirsiniz. Yeni Zelanda&apos;da
        yaşayanlar Gizlilik Komiserliği&apos;ne (Office of the Privacy Commissioner – www.privacy.org.nz) başvurabilir.
      </Para>

      <H3>11. Yaş</H3>
      <Para>Hizmetlerimiz 18 yaş ve üzeri yetişkinlere yöneliktir.</Para>
      <Proposed>&ldquo;18 yaşından küçükseniz lütfen bize bilgilerinizi göndermeyin.&rdquo;</Proposed>

      <H3>12. Dil</H3>
      <Para>
        Bu politika İngilizce ve Türkçe olarak sunulmaktadır. <Pending>hangi dildeki metnin esas alınacağı</Pending>
      </Para>

      <H3>13. Değişiklikler</H3>
      <Para>
        Bu politikayı güncelleyebiliriz. Sayfanın başındaki tarih ve sürüm, en son ne zaman değiştiğini gösterir. Sağlık
        bilgilerini kullanma şeklimizi değiştirirsek onayınızı yeniden isteriz.
      </Para>
    </>
  );
}
