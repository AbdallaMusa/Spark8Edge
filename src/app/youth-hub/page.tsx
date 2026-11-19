import { pageMetadata } from "@/lib/pageMetadata";
import { ContactBand } from "@/components/OfferPage";
import { EditorialPhoto } from "@/components/EditorialPhoto";
import ContactLink from "@/components/ContactLink";

export const metadata = pageMetadata("/youth-hub", "Creative and Digital Skills Training in Nairobi", "Ask about Spark8Edge’s practical creative training in Nairobi, including what the programme covers, current dates, fees and equipment requirements.", "talent");

export default function Training() {
  return <>
    <section className="hero-field" aria-labelledby="training-title"><div className="wrap story-grid inside-split">
      <div className="prose"><p className="eyebrow">Training · Nairobi</p><h1 id="training-title">Training for creative and digital work</h1><p className="lede">We offer one practical programme. Tell us what you want to learn and we’ll explain what it covers and whether it fits.</p><ContactLink intent="training">Ask about training on WhatsApp</ContactLink></div>
      <EditorialPhoto photo="desk" priority />
    </div></section>
    <section className="wrap detail-grid" aria-labelledby="training-goal">
      <div><p className="eyebrow">Start with your goal</p><h2 id="training-goal">What would you like to make?</h2></div>
      <div className="prose"><p>You might want to edit a short video or get better at planning content for a community group. Give us one example of what you’d like to be able to do. It helps us explain where the programme fits and where it doesn’t.</p><p>If you’ve tried something already, send a link. You don’t need a finished portfolio to ask.</p></div>
    </section>
    <section className="brief-section" aria-labelledby="training-steps"><div className="wrap detail-grid">
      <div><p className="eyebrow">Before you decide</p><h2 id="training-steps">From first message to enrolment</h2></div>
      <ol className="process-list"><li><strong>Tell us what you’ve tried.</strong> A few lines about your goal and what you can already do are enough.</li><li><strong>Check the practical details.</strong> Ask about the next dates, fees, time commitment and equipment you’ll need.</li><li><strong>Decide if the programme fits.</strong> If the dates and content suit you, ask for the current enrolment steps.</li></ol>
    </div></section>
    <section className="wrap detail-grid" aria-labelledby="training-faq">
      <h2 id="training-faq">Questions people ask before booking</h2><div className="answers">
        <details><summary>Do I need experience or my own equipment?</summary><p>Tell us what equipment you can access and what you’ve already tried. We’ll explain the current requirements.</p></details>
        <details><summary>Where can I get dates, fees and the training format?</summary><p>Message us for the current details. This page doesn’t list an intake as open until it’s confirmed.</p></details>
        <details><summary>Does the programme guarantee work?</summary><p>No. The training is for building skills. Any project opportunity depends on the brief and who’s available.</p></details>
      </div>
    </section>
    <ContactBand intent="training" title="Ask about the next training dates" action="Message us on WhatsApp" note="Tell us what you’d like to learn so we can point you to the right information." />
  </>;
}
