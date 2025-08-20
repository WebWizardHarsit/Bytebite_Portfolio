import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import Pricing from "components/pricing/ThreePlans.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import FAQ from "components/faqs/SingleCol.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import macHeroScreenshotImageSrc from "images/hero-screenshot-2.png";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import { ReactComponent as LightbulbIcon } from "feather-icons/dist/icons/award.svg"; // Innovation First
import { ReactComponent as UsersIcon } from "feather-icons/dist/icons/users.svg"; // Human-Centric

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <Features
        subheading={<Subheading>Features</Subheading>}
        heading={
          <>
            We have Amazing <HighlightedText>Service.</HighlightedText>
          </>
        }
      />
      <MainFeature
        subheading={<Subheading>Quality Work</Subheading>}
        imageSrc='/Visual data-rafiki.jpg'
        imageBorder={true}
        imageDecoratorBlob={true}
      />
      <FeatureWithSteps
        subheading={<Subheading>STEPS</Subheading>}
        heading={
          <>
            <HighlightedText>Get Started </HighlightedText>in 3 Simple Steps.
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
      <MainFeature2
        subheading={<Subheading>VALUES</Subheading>}
        heading={
          <>
            What Drives <HighlightedText>Nexlab?</HighlightedText>
          </>
        }
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={false}
        features={[
          {
            Icon: LightbulbIcon,
            title: "Innovation First",
            description: "Constantly evolving to meet your needs.",
            iconContainerCss: tw`bg-yellow-200 text-yellow-800`
          },
          {
            Icon: UsersIcon,
            title: "Human-Centric",
            description: "Built for clarity, speed, and simplicity.",
            iconContainerCss: tw`bg-pink-200 text-pink-800`
          }
        ]}
      />
      <Pricing
        subheading={<Subheading>Pricing</Subheading>}
        heading={
          <>
            Simple, Transparent Pricing <HighlightedText>Plans.</HighlightedText>
          </>
        }
        plans={[
          {
            name: "Starter",
            price: "$0",
            duration: "Monthly",
            mainFeature: "For Individuals",
            features: ["3 Users", "Limited Projects", "Community Support"]
          },
          {
            name: "Growth",
            price: "$28.99",
            duration: "Monthly",
            mainFeature: "For Small Businesses",
            features: ["10 Users", "Full Features", "Priority Support"],
            featured: true
          },
          {
            name: "Enterprise",
            price: "Custom",
            duration: "Monthly",
            mainFeature: "For Large Companies",
            features: ["Unlimited Users", "Dedicated Support", "Advanced Integrations"]
          }
        ]}
      />
      <Testimonial
        subheading={<Subheading>Testimonials</Subheading>}
        heading={
          <>
            Loved by Productive Teams <HighlightedText>Worldwide.</HighlightedText>
          </>
        }
        testimonials={[
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            heading: "Boosted Our Workflow",
            quote:
              "Switching to Nexlab streamlined our project collaboration like never before. The real-time canvas and instant feedback tools made our sprints smoother and faster.",
            customerName: "Ananya Rao",
            customerTitle: "Product Designer, NovaLabs"
          },
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            heading: "Exceptional Developer Experience",
            quote:
              "The integration of code editing, task tracking, and communication in a single interface is a game-changer. Our dev team loves it!",
            customerName: "Rishi Malhotra",
            customerTitle: "CTO, DevForge"
          },
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=512&h=512&q=80",
            heading: "Perfect for Remote Teams",
            quote:
              "Nexlab made our distributed team feel more connected. It’s simple, powerful, and beautifully designed.",
            customerName: "Sophie Kim",
            customerTitle: "Team Lead, Horizon UI"
          }
        ]}
      />
      <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            Got  <HighlightedText>Questions ?</HighlightedText> 
          </>
        }
        faqs={[
          {
            question: "How is Nexlab different from Notion or Jira?",
            answer:
              "While Notion and Jira focus on documentation and ticket tracking, Nexlab combines real-time code collaboration, visual brainstorming, and chat — all in a single workspace tailored for developers, designers, and remote teams."
          },
          {
            question: "Is my data secure with Nexlab?",
            answer:
              "Absolutely. We use end-to-end encryption, secure cloud infrastructure, and follow strict compliance protocols to ensure your data remains protected and private at all times."
          },
          {
            question: "Can I integrate GitHub or Slack?",
            answer:
              "Yes! Nexlab seamlessly integrates with tools like GitHub, Slack, and other third-party apps to streamline your workflow and centralize communication and development."
          },
          {
            question: "Is Nexlab free to use?",
            answer:
              "Nexlab offers a free plan for individuals and small teams. As your team grows, you can upgrade to unlock premium features, more integrations, and dedicated support."
          },
          {
            question: "Do you offer mobile or desktop apps?",
            answer:
              "Yes, Nexlab is accessible via web, with native mobile and desktop apps available for both iOS, Android, Windows, and macOS for maximum flexibility."
          },
        ]}
      />
      <ContactUsForm />
      <Footer />
    </AnimationRevealPage>
  );
}
