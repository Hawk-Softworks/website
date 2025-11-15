<template>
  <div class="flex flex-col min-h-screen">
    <AppNavbar />

    <!-- Hero Section -->
    <AppHero :background-image="headerImage">
      <template #content>
        <h1
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 300 } }"
          class="text-4xl md:text-6xl font-bold heading-primary mb-4 leading-tight"
        >
          FlightStrip Manager
        </h1>
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 300, delay: 50 } }"
          class="text-lg md:text-xl text-secondary-color mb-6 leading-relaxed"
        >
          Your web-based tool for air traffic controlling
        </p>
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 300, delay: 100 } }"
        >
          <AppButton
            href="https://fsm.hawk-softworks.de"
            external
            variant="primary"
            class="text-lg px-8 py-4"
          >
            Open WebApp
          </AppButton>
        </div>
      </template>
    </AppHero>

    <!-- Introduction -->
    <section class="py-20 section-bg-primary">
      <div class="max-w-6xl mx-auto px-8 lg:px-16">
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 300 } }"
          class="max-w-4xl mx-auto text-center"
        >
          <h3 class="text-2xl md:text-3xl font-bold heading-primary mb-6">
            FlightStrip Manager
          </h3>
          <p class="text-secondary-color text-lg leading-relaxed">
            As an ATC on an online network like IVAO, VATSIM or POSCON, have you ever lost track during the
            coordination process? Usually, for example as a tower controller, you are not only responsible for arrivals and departures,
            but also for movements on the ground and the start approvals.
            Here it can quickly happen that you lose track of which pilot has already received his take-off, taxi or
            take-off clearance. With the FlightStrip Manager you can set up your own individually designed virtual controller workplace
            and keep track of everything - directly in your browser, no installation required!
          </p>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-20 bg-gradient-dark">
      <div class="max-w-6xl mx-auto px-8 lg:px-16 space-y-20">
        <!-- Feature 1: Column Customization -->
        <FeatureSection
          title="Easily add and remove columns"
          description="The FlightStrip Manager has a dynamic system to add and remove columns. This allows you to map any airport in the world, regardless of whether it is called Ground or Apron, or how many stations the airport has. Customize your workspace to match your controlling needs perfectly."
          :image="columnImage"
          :image-left="true"
        />

        <!-- Feature 2: Multiplayer -->
        <FeatureSection
          title="Real-time collaboration with other controllers"
          description="Our multiplayer feature offers the possibility to connect and collaborate with other controllers in real-time. All changes are synchronized instantly between all connected users, allowing seamless teamwork during busy traffic situations. Perfect for larger airports with multiple active positions."
          :image="multiplayerImage"
          :image-left="false"
        />

        <!-- Feature 3: Network Integration -->
        <FeatureSection
          title="Connect to online networks"
          description="Fetch live data directly from VATSIM, IVAO, and POSCON servers. Automatically import aircraft information, flight plans, and current positions to quickly populate your flight strips without manual data entry."
          :image="networksImage"
          :image-left="true"
        />

        <!-- Feature 4: Proximity -->
        <FeatureSection
          title="Automatic proximity-based strip creation"
          description="Flight strips are automatically added when an aircraft enters a specified radius around your configured airport. Works for all traffic types - arrivals, departures, and VFR. Define your proximity range and let the system populate your workspace automatically."
          :image="proximityImage"
          :image-left="false"
        />

        <!-- Feature 5: Keybindings -->
        <FeatureSection
          title="Fully customizable keyboard shortcuts"
          description="Customize the keyboard shortcuts to your preferences for maximum efficiency. Control aids can be switched on and off as needed. Configure the application to match your workflow and controlling style perfectly."
          :image="keybindingsImage"
          :image-left="true"
        />
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 section-bg-primary">
      <div class="max-w-6xl mx-auto px-8 lg:px-16">
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 300 } }"
          class="max-w-3xl mx-auto text-center"
        >
          <h2 class="text-3xl md:text-4xl font-bold heading-primary mb-6">
            Ready to enhance your ATC experience?
          </h2>
          <p class="text-secondary-color text-lg mb-8 leading-relaxed">
            Launch the FlightStrip Manager web app now and start controlling with a modern,
            browser-based solution. No downloads, no installation - just open and control!
          </p>
          <AppButton
            href="https://fsm.hawk-softworks.de"
            external
            variant="primary"
            class="text-lg px-8 py-4"
          >
            Open WebApp Now
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
import columnImage from '../assets/images/fsm/fsm_column_customization.png'
import multiplayerImage from '../assets/images/fsm/fsm_multiplayer.png'
import networksImage from '../assets/images/fsm/fsm_networks.png'
import proximityImage from '../assets/images/fsm/fsm_proximity.png'
import keybindingsImage from '../assets/images/fsm/fsm_keybindings.png'
</script>
