<template>
  <div class="flex min-h-screen flex-col">
    <AppNavbar />

    <!-- Hero Section -->
    <AppHero :background-image="headerImage">
      <template #content>
        <h1
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 300 } }"
          class="heading-primary mb-4 text-4xl leading-tight font-bold md:text-6xl"
        >
          FlightPlanner
        </h1>
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 300, delay: 50 } }"
          class="text-secondary-color mb-6 text-lg leading-relaxed md:text-xl"
        >
          Your tool for an organized flight
        </p>
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 300, delay: 100 } }"
        >
          <AppButton
            href="https://fpm.hawk-softworks.de"
            external
            variant="primary"
            class="px-8 py-4 text-lg"
          >
            Open WebApp
          </AppButton>
        </div>
      </template>
    </AppHero>

    <!-- Introduction -->
    <section class="section-bg-primary py-20">
      <div class="mx-auto max-w-6xl px-8 lg:px-16">
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 300 } }"
          class="mx-auto max-w-4xl text-center"
        >
          <h3 class="heading-primary mb-6 text-2xl font-bold md:text-3xl">FlightPlanner</h3>
          <p class="text-secondary-color text-lg leading-relaxed">
            With the FlightPlanner, simple flight plans can be created quickly. This ensures a good
            overview during a flight on e.g. IVAO or VATSIM. All important information needed during
            the route is clearly displayed on one page.
          </p>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="bg-gradient-dark py-20">
      <div class="mx-auto max-w-6xl space-y-20 px-8 lg:px-16">
        <!-- Feature 1: SimBrief and METAR -->
        <FeatureSection
          title="SimBrief and live METAR"
          description="The last flight plan created on SimBrief can be integrated with one click. Using the Fetch METAR buttons, the METAR can be retrieved in real-time."
          :image="fpmScreenImage"
          :image-left="true"
        />

        <!-- Feature 2: Frequency Database -->
        <FeatureSection
          title="Frequency-Database and SID/STAR Finder"
          description="All available frequencies can be obtained for every airport in the world. Also the current SID and STAR can be calculated based on the airport, the runway and a waypoint. Always with the latest AIRAC Cycle."
          :image="example1Image"
          :image-left="false"
        />

        <!-- Feature 3: Printable -->
        <FeatureSection
          title="Printable Flightplan"
          description="The final flight plan can be generated as PDF. You can choose between Light, Normal and Dark Theme. The flight plan is structured according to the different phases of a flight and contains all information, summarized on one page."
          :image="example2Image"
          :image-left="true"
        />
      </div>
    </section>

    <!-- Call to Action -->
    <section class="section-bg-primary py-20">
      <div class="mx-auto max-w-6xl px-8 lg:px-16">
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 300 } }"
          class="mx-auto max-w-3xl text-center"
        >
          <h2 class="heading-primary mb-6 text-3xl font-bold md:text-4xl">
            Ready to plan your next flight?
          </h2>
          <p class="text-secondary-color mb-8 text-lg leading-relaxed">
            Open the FlightPlanner web app and create your professional flight plan in minutes.
            Everything you need for a successful flight, on one page!
          </p>
          <AppButton
            href="https://fpm.hawk-softworks.de"
            external
            variant="primary"
            class="px-8 py-4 text-lg"
          >
            Open WebApp
          </AppButton>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import AppNavbar from '../components/layout/AppNavbar.vue'
import AppHero from '../components/layout/AppHero.vue'
import AppFooter from '../components/layout/AppFooter.vue'
import AppButton from '../components/ui/AppButton.vue'
import FeatureSection from '../components/sections/FeatureSection.vue'

// Import images
import headerImage from '../assets/images/Header_2.png'
import fpmScreenImage from '../assets/images/fp_screen.png'
import example1Image from '../assets/images/fp/fp_example_1.jpg'
import example2Image from '../assets/images/fp/fp_example_2.jpg'
</script>
