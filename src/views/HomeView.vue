<template>
  <div class="flex flex-col min-h-screen">
    <AppNavbar />

    <!-- Hero Section -->
    <AppHero
      :background-image="headerImage"
      title="Hawk Softworks"
      subtitle="Software for virtual pilots and air traffic controllers"
    />

    <!-- Products Section -->
    <section class="py-20 bg-[#060914]">
      <div class="max-w-6xl mx-auto px-8 lg:px-16">
        <div class="grid md:grid-cols-2 gap-12">
          <!-- FlightStrip Manager Card -->
          <ProductCard
            title="FlightStrip Manager"
            :description="fsmDescription"
            :image="fsmImage"
            read-more-link="/fsm"
            launch-link="https://fsm.hawk-softworks.de"
          />

          <!-- FlightPlanner Card -->
          <ProductCard
            title="FlightPlanner"
            :description="fpmDescription"
            :image="fpmImage"
            read-more-link="/fp"
            launch-link="https://fpm.hawk-softworks.de"
          />
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <ContactSection />

    <AppFooter />
  </div>
</template>

<script setup>
import AppNavbar from '../components/layout/AppNavbar.vue'
import AppHero from '../components/layout/AppHero.vue'
import AppFooter from '../components/layout/AppFooter.vue'
import ProductCard from '../components/sections/ProductCard.vue'
import ContactSection from '../components/sections/ContactSection.vue'

// Import images
import headerImage from '../assets/images/Header_1.png'
import fsmImage from '../assets/images/fsm_screen.png'
import fpmImage from '../assets/images/fp_screen.png'

// Product descriptions
const fsmDescription = "The FlightStrip Manager is the ideal web-based tool to keep track of your traffic. Each controlled aircraft is displayed as a flight strip and can be edited in real-time together with other air traffic controllers in multiplayer mode."

const fpmDescription = "With the FlightPlanner you can create your individual flight plan, where you get all important information about your flight on one DIN A4 page. Access your current SimBrief flight plan, the current weather, an extensive frequency database and the current AIRAC cycle to find the necessary SIDs and STARs."
</script>
