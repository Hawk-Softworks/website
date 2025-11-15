<template>
  <div class="flex min-h-screen flex-col">
    <AppNavbar />

    <!-- Header -->
    <section class="section-bg-gradient py-16">
      <div class="mx-auto max-w-6xl px-8 lg:px-16">
        <div class="text-center">
          <h1
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
            class="heading-primary mb-4 text-4xl font-bold md:text-5xl"
          >
            Terms of Use
          </h1>
          <p class="text-muted-color">Last updated June 19, 2020</p>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="section-bg-primary py-20">
      <div class="mx-auto max-w-6xl px-8 lg:px-16">
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 300 } }"
          class="mx-auto max-w-4xl"
        >
          <div class="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-12">
            <div class="terms-content max-w-none text-slate-300">
              <!-- AGREEMENT TO TERMS -->
              <h3>AGREEMENT TO TERMS</h3>
              <p>
                These Terms of Use constitute a legally binding agreement made between you, whether
                personally or on behalf of an entity ("you") and Hawk Softworks ("Company", "we",
                "us", or "our"), concerning your access to and use of the hawk-softworks.de website
                as well as any other media form, media channel, mobile website or mobile application
                related, linked, or otherwise connected thereto (collectively, the "Site"). You
                agree that by accessing the Site, you have read, understood, and agreed to be bound
                by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE,
                THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE
                IMMEDIATELY.
              </p>
              <p>
                The Site is intended for users who are at least 18 years old. Persons under the age
                of 18 are not permitted to use or register for the Site.
              </p>

              <!-- INTELLECTUAL PROPERTY RIGHTS -->
              <h3>INTELLECTUAL PROPERTY RIGHTS</h3>
              <p>
                Unless otherwise indicated, the Site is our proprietary property and all source
                code, databases, functionality, software, website designs, audio, video, text,
                photographs, and graphics on the Site (collectively, the "Content") and the
                trademarks, service marks, and logos contained therein (the "Marks") are owned or
                controlled by us or licensed to us, and are protected by copyright and trademark
                laws.
              </p>

              <!-- USER REPRESENTATIONS -->
              <h3>USER REPRESENTATIONS</h3>
              <p>By using the Site, you represent and warrant that:</p>
              <ul>
                <li>
                  All registration information you submit will be true, accurate, current, and
                  complete
                </li>
                <li>You will maintain the accuracy of such information</li>
                <li>You have the legal capacity and you agree to comply with these Terms of Use</li>
                <li>You are not a minor in the jurisdiction in which you reside</li>
                <li>You will not access the Site through automated or non-human means</li>
                <li>You will not use the Site for any illegal or unauthorized purpose</li>
                <li>Your use of the Site will not violate any applicable law or regulation</li>
              </ul>

              <!-- PROHIBITED ACTIVITIES -->
              <h3>PROHIBITED ACTIVITIES</h3>
              <p>As a user of the Site, you agree not to:</p>
              <ul>
                <li>
                  Systematically retrieve data or other content from the Site to create or compile a
                  collection, compilation, database, or directory
                </li>
                <li>Disparage, tarnish, or otherwise harm us and/or the Site</li>
                <li>
                  Make improper use of our support services or submit false reports of abuse or
                  misconduct
                </li>
                <li>
                  Attempt to bypass any measures designed to prevent or restrict access to the Site
                </li>
                <li>
                  Copy or adapt the Site's software, including but not limited to Flash, PHP, HTML,
                  JavaScript, or other code
                </li>
                <li>
                  Decipher, decompile, disassemble, or reverse engineer any of the software
                  comprising the Site
                </li>
              </ul>

              <!-- SITE MANAGEMENT -->
              <h3>SITE MANAGEMENT</h3>
              <p>
                We reserve the right, but not the obligation, to: (1) monitor the Site for
                violations of these Terms of Use; (2) take appropriate legal action against anyone
                who violates the law or these Terms of Use; (3) refuse, restrict access to, limit
                the availability of, or disable any of your Contributions; (4) remove from the Site
                or otherwise disable all files and content that are excessive in size; and (5)
                otherwise manage the Site in a manner designed to protect our rights and property.
              </p>

              <!-- PRIVACY POLICY -->
              <h3>PRIVACY POLICY</h3>
              <p>
                We care about data privacy and security. Please be advised the Site is hosted in
                Germany. If you access the Site from any other region of the world, then through
                your continued use of the Site, you are transferring your data to Germany, and you
                agree to have your data transferred to and processed in Germany.
              </p>

              <!-- GOVERNING LAW -->
              <h3>GOVERNING LAW</h3>
              <p>
                These conditions are governed by and interpreted following the laws of Germany, and
                the use of the United Nations Convention of Contracts for the International Sale of
                Goods is expressly excluded. Hawk Softworks and yourself both agree to submit to the
                non-exclusive jurisdiction of the courts of Siegburg.
              </p>

              <!-- DISCLAIMER -->
              <h3>DISCLAIMER</h3>
              <p>
                THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF
                THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED
                BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE
                AND YOUR USE THEREOF.
              </p>

              <!-- LIMITATIONS OF LIABILITY -->
              <h3>LIMITATIONS OF LIABILITY</h3>
              <p>
                IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY
                THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL,
                OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER
                DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE
                POSSIBILITY OF SUCH DAMAGES.
              </p>

              <!-- INDEMNIFICATION -->
              <h3>INDEMNIFICATION</h3>
              <p>
                You agree to defend, indemnify, and hold us harmless from and against any loss,
                damage, liability, claim, or demand made by any third party due to or arising out
                of: (1) use of the Site; (2) breach of these Terms of Use; (3) any breach of your
                representations and warranties; (4) your violation of third party rights; or (5) any
                harmful act toward any other user of the Site.
              </p>

              <!-- USER DATA -->
              <h3>USER DATA</h3>
              <p>
                We will maintain certain data that you transmit to the Site for managing
                performance. You are solely responsible for all data that you transmit or that
                relates to any activity using the Site. You agree that we shall have no liability
                for any loss or corruption of such data.
              </p>

              <!-- ELECTRONIC COMMUNICATIONS -->
              <h3>ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h3>
              <p>
                Visiting the Site, sending us emails, and completing online forms constitute
                electronic communications. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES,
                CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES AND
                POLICIES.
              </p>

              <!-- MISCELLANEOUS -->
              <h3>MISCELLANEOUS</h3>
              <p>
                These Terms of Use constitute the entire agreement between you and us. Our failure
                to exercise any right shall not operate as a waiver. We may assign any of our rights
                at any time. If any provision is determined to be unlawful, that provision is deemed
                severable and does not affect the validity of remaining provisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import AppNavbar from '../../components/layout/AppNavbar.vue'
import AppFooter from '../../components/layout/AppFooter.vue'
</script>

<style scoped>
.text-muted-color {
  color: var(--color-text-muted);
}

.terms-content :deep(h3),
.terms-content :deep(h4) {
  font-weight: bold;
  margin-bottom: 1rem;
  color: #ffffff;
}

.terms-content :deep(h3) {
  font-size: 1.25rem;
  margin-top: 2rem;
}

.terms-content :deep(h3:first-child) {
  margin-top: 0;
}

@media (min-width: 768px) {
  .terms-content :deep(h3) {
    font-size: 1.5rem;
  }
}

.terms-content :deep(h4) {
  font-size: 1.125rem;
  margin-top: 1.5rem;
  font-weight: 600;
}

@media (min-width: 768px) {
  .terms-content :deep(h4) {
    font-size: 1.25rem;
  }
}

.terms-content :deep(p),
.terms-content :deep(ul),
.terms-content :deep(ol),
.terms-content :deep(li) {
  line-height: 1.75;
  /* Color inherited from parent .terms-content */
}

.terms-content :deep(p) {
  margin-bottom: 1rem;
}

.terms-content :deep(ul),
.terms-content :deep(ol) {
  margin-bottom: 1rem;
  margin-left: 1.5rem;
  list-style-type: disc;
}

.terms-content :deep(li) {
  margin-bottom: 0.5rem;
}
</style>
