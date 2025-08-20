// import React, { useState } from "react";
// import styled from "styled-components";
// import tw from "twin.macro";
// //eslint-disable-next-line
// import { css } from "styled-components/macro";
// import { motion } from "framer-motion"; // 👈 add this at the top
// import Header from "../headers/light.js";

// import ReactModalAdapter from "../../helpers/ReactModalAdapter.js";
// import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

// import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
// import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
// import { ReactComponent as SvgDecoratorBlob2 } from "../../images/dot-pattern.svg";
// import DesignIllustration from "../../images/design-illustration.svg";

// const Container = tw.div`relative`;
// const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
// const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
// const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;

// const Heading = tw.h1`font-black text-3xl md:text-5xl leading-snug max-w-3xl`;
// const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-base font-medium text-gray-600 max-w-lg mx-auto lg:mx-0`;

// const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8`;
// const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-3 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300`;

// const IllustrationContainer = tw.div`flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;

// // Random Decorator Blobs
// const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
//   ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3  -z-10`}
// `;
// const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
//   ${tw`pointer-events-none fill-current text-primary-500 opacity-25 absolute w-32 h-32 right-0 bottom-0 transform translate-x-10 translate-y-10 -z-10`}
// `;

// const StyledModal = styled(ReactModalAdapter)`
//   &.mainHeroModal__overlay {
//     ${tw`fixed inset-0 z-50`}
//   }
//   &.mainHeroModal__content {
//     ${tw`xl:mx-auto m-4 sm:m-16 max-w-screen-xl absolute inset-0 flex justify-center items-center rounded-lg bg-gray-200 outline-none`}
//   }
//   .content {
//     ${tw`w-full lg:p-16`}
//   }
// `;
// const CloseModalButton = tw.button`absolute top-0 right-0 mt-8 mr-8 hocus:text-primary-500`;

// export default ({
//   heading = "Modern React Templates, Just For You",
//   description = "Our templates are easy to setup, understand and customize. Fully modular components with a variety of pages and components.",
//   primaryButtonText = "Get Started",
//   primaryButtonUrl = "#",
//   watchVideoButtonText = "Join Us",
//   watchVideoUrl = "/login", // 👈 Added login page link
//   imageSrc = DesignIllustration,
//   imageCss = null,
//   imageDecoratorBlob = false,
// }) => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   const toggleModal = () => setModalIsOpen(!modalIsOpen);

//   return (
//     <>
//       <Header />
//       <Container>
//         <TwoColumn>
//           <LeftColumn>
//             <Heading>{heading}</Heading>
//             <Paragraph>{description}</Paragraph>
//             <Actions>
//               <PrimaryButton as="a" href={primaryButtonUrl}>
//                 {primaryButtonText}
//               </PrimaryButton>
//               <PrimaryButton onClick={toggleModal} tw="mt-4 sm:mt-0 sm:ml-4">
//                 {watchVideoButtonText}
//               </PrimaryButton>
//             </Actions>
//           </LeftColumn>
//           <RightColumn>
//             <IllustrationContainer>
//               <div
//                 onMouseEnter={() =>
//                   window.dispatchEvent(new Event("pauseSlider"))
//                 }
//                 onMouseLeave={() =>
//                   window.dispatchEvent(new Event("resumeSlider"))
//                 }
//               >
//                 <motion.img
//                   src={imageSrc}
//                   css={imageCss}
//                   alt="Hero"
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.6 }}
//                   whileHover={{ scale: 1.05 }} // 👈 hover pop-up
//                 />
//               </div>
//               {imageDecoratorBlob && <DecoratorBlob2 />}
//             </IllustrationContainer>
//           </RightColumn>
//         </TwoColumn>
//         <DecoratorBlob1 />
//         <StyledModal
//           closeTimeoutMS={300}
//           className="mainHeroModal"
//           isOpen={modalIsOpen}
//           onRequestClose={toggleModal}
//           shouldCloseOnOverlayClick={true}
//         >
//           <CloseModalButton onClick={toggleModal}>
//             <CloseIcon tw="w-6 h-6" />
//           </CloseModalButton>
//           <div className="content">
//             <ResponsiveVideoEmbed url={watchVideoUrl} tw="w-full" />
//           </div>
//         </StyledModal>
//       </Container>
//     </>
//   );
// };
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { motion } from "framer-motion";
import Header from "../headers/light.js";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/dot-pattern.svg";
import DesignIllustration from "../../images/design-illustration.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;

const Heading = tw.h1`font-black text-3xl md:text-5xl leading-snug max-w-3xl`;
const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-base font-medium text-gray-600 max-w-lg mx-auto lg:mx-0`;

const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8`;
const PrimaryButton = tw.a`font-bold px-8 lg:px-10 py-3 rounded bg-primary-500 text-gray-100 text-center hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300`;

const IllustrationContainer = tw.div`flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;

// Random Decorator Blobs
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3  -z-10`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none fill-current text-primary-500 opacity-25 absolute w-32 h-32 right-0 bottom-0 transform translate-x-10 translate-y-10 -z-10`}
`;

export default ({
  heading = "Modern React Templates, Just For You",
  description = "Our templates are easy to setup, understand and customize. Fully modular components with a variety of pages and components.",
  primaryButtonText = "Get Started",
  primaryButtonUrl = "#",
  secondaryButtonText = "Login", // 👈 changed from Join Us
  secondaryButtonUrl = "/login", // 👈 redirect to login
  imageSrc = DesignIllustration,
  imageCss = null,
  imageDecoratorBlob = false,
}) => {
  return (
    <>
      <Header />
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>{heading}</Heading>
            <Paragraph>{description}</Paragraph>
            <Actions>
              <PrimaryButton href={primaryButtonUrl}>
                {primaryButtonText}
              </PrimaryButton>
              <PrimaryButton
                href={secondaryButtonUrl}
                tw="mt-4 sm:mt-0 sm:ml-4"
              >
                {secondaryButtonText}
              </PrimaryButton>
            </Actions>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <div
                onMouseEnter={() =>
                  window.dispatchEvent(new Event("pauseSlider"))
                }
                onMouseLeave={() =>
                  window.dispatchEvent(new Event("resumeSlider"))
                }
              >
                <motion.img
                  src={imageSrc}
                  css={imageCss}
                  alt="Hero"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                />
              </div>
              {imageDecoratorBlob && <DecoratorBlob2 />}
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
      </Container>
    </>
  );
};
