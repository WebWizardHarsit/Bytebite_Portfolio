// // RegistrationForm.js
// import React, { useState } from "react";
// import tw from "twin.macro";

// // Styled Components with twin.macro
// const FormContainer = tw.div`bg-white p-10 rounded-2xl shadow-lg max-w-2xl mx-auto`;
// const StepHeader = tw.div`flex justify-between mb-8`;
// const StepIndicator = tw.div`flex-1 text-center text-lg font-semibold text-gray-500`;
// // const ActiveStep = tw(StepIndicator)`text-primary-500 font-bold`;

// const Form = tw.form`w-full space-y-6`;
// const Field = tw.div`flex flex-col gap-2`;
// const Label = tw.label`font-medium text-gray-700`;
// const Input = tw.input`w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none`;
// const Select = tw.select`w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none`;
// const FileInput = tw.input`w-full border border-gray-300 p-3 rounded-lg bg-gray-500 cursor-pointer focus:ring-2 focus:ring-primary-500`;

// const ButtonRow = tw.div`flex justify-between mt-6`;
// const Button = tw.button`px-6 py-3 rounded-lg font-medium transition duration-300`;
// const PrimaryButton = tw(
//   Button
// )`bg-primary-500 text-white hover:bg-primary-700`;
// const SecondaryButton = tw(Button)`bg-gray-300 text-gray-700 hover:bg-gray-400`;

// // Main Component
// const RegistrationForm = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     user_name: "",
//     date_of_birth: "",
//     email_address: "",
//     mobile_number: "",
//     gender: "",
//     user_photo: null,
//     idType: "",
//     id_number: "",
//     photoIdPictures: null,
//     addressType: "",
//     avlbl_dishtype: "",
//     country: "",
//     state: "",
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files ? files[0] : value,
//     });
//   };

//   const nextStep = () => setStep(step + 1);
//   const prevStep = () => setStep(step - 1);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data Submitted:", formData);
//   };

//   return (
//     <FormContainer>
//       {/* Stepper Header */}
//       <StepHeader>
//         <StepIndicator
//           className={step === 1 ? "text-primary-500 font-bold" : ""}
//         >
//           Step 1
//         </StepIndicator>
//         <StepIndicator
//           className={step === 2 ? "text-primary-500 font-bold" : ""}
//         >
//           Step 2
//         </StepIndicator>
//       </StepHeader>

//       <Form onSubmit={handleSubmit}>
//         {step === 1 && (
//           <>
//             <Field>
//               <Label>Name</Label>
//               <Input
//                 type="text"
//                 name="user_name"
//                 value={formData.user_name}
//                 onChange={handleChange}
//                 required
//               />
//             </Field>
//             <Field>
//               <Label>Date of Birth</Label>
//               <Input
//                 type="date"
//                 name="date_of_birth"
//                 value={formData.date_of_birth}
//                 onChange={handleChange}
//                 required
//               />
//             </Field>
//             <Field>
//               <Label>Email</Label>
//               <Input
//                 type="email"
//                 name="email_address"
//                 value={formData.email_address}
//                 onChange={handleChange}
//                 required
//               />
//             </Field>
//             <Field>
//               <Label>Mobile</Label>
//               <Input
//                 type="tel"
//                 name="mobile_number"
//                 value={formData.mobile_number}
//                 onChange={handleChange}
//                 required
//               />
//             </Field>
//             <Field>
//               <Label>Gender</Label>
//               <Select
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select Gender</option>
//                 <option>Male</option>
//                 <option>Female</option>
//                 <option>Other</option>
//               </Select>
//             </Field>
//             <Field>
//               <Label>User Photo</Label>
//               <FileInput
//                 type="file"
//                 name="user_photo"
//                 accept="image/*"
//                 onChange={handleChange}
//               />
//             </Field>
//           </>
//         )}

//         {step === 2 && (
//           <>
//             <Field>
//               <Label>ID Type</Label>
//               <Select
//                 name="idType"
//                 value={formData.idType}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select ID Type</option>
//                 <option>Aadhar</option>
//                 <option>PAN</option>
//                 <option>Passport</option>
//               </Select>
//             </Field>
//             <Field>
//               <Label>ID Number</Label>
//               <Input
//                 type="text"
//                 name="id_number"
//                 value={formData.id_number}
//                 onChange={handleChange}
//                 required
//               />
//             </Field>
//             <Field>
//               <Label>ID Proof Upload</Label>
//               <FileInput
//                 type="file"
//                 name="photoIdPictures"
//                 accept="image/*"
//                 onChange={handleChange}
//               />
//             </Field>
//             <Field>
//               <Label>Address Type</Label>
//               <Select
//                 name="addressType"
//                 value={formData.addressType}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select Address Type</option>
//                 <option>Permanent</option>
//                 <option>Current</option>
//               </Select>
//             </Field>
//             <Field>
//               <Label>Available Dish Type</Label>
//               <Input
//                 type="text"
//                 name="avlbl_dishtype"
//                 value={formData.avlbl_dishtype}
//                 onChange={handleChange}
//               />
//             </Field>
//             <Field>
//               <Label>Country</Label>
//               <Input
//                 type="text"
//                 name="country"
//                 value={formData.country}
//                 onChange={handleChange}
//                 required
//               />
//             </Field>
//             <Field>
//               <Label>State</Label>
//               <Input
//                 type="text"
//                 name="state"
//                 value={formData.state}
//                 onChange={handleChange}
//                 required
//               />
//             </Field>
//           </>
//         )}

//         <ButtonRow>
//           {step > 1 && (
//             <SecondaryButton type="button" onClick={prevStep}>
//               Back
//             </SecondaryButton>
//           )}
//           {step < 2 ? (
//             <PrimaryButton type="button" onClick={nextStep}>
//               Next
//             </PrimaryButton>
//           ) : (
//             <PrimaryButton type="submit">Submit</PrimaryButton>
//           )}
//         </ButtonRow>
//       </Form>
//     </FormContainer>
//   );
// };

// export default RegistrationForm;

// RegistrationForm.js
import React, { useState, useRef } from "react";
import tw from "twin.macro";



// Outer Container stretched horizontally
const PageContainer = tw.div`min-h-screen flex items-center justify-center bg-gray-100`;
const ContentWrapper = tw.div`w-full max-w-6xl bg-white rounded-2xl shadow-lg flex overflow-hidden`;

// Left Panel (illustration / text)
const LeftPanel = tw.div`w-1/2 bg-primary-500 text-white flex flex-col justify-center items-center p-12`;
const Heading = tw.h1`text-4xl font-bold mb-4`;
const SubHeading = tw.p`text-lg opacity-75 text-center`;
// Styled Heading
const SectionHeading = tw.h2`text-xl font-semibold mb-4`;

// Right Panel (form)
const RightPanel = tw.div`w-1/2 p-12`;

// Stepper
const Stepper = tw.div`flex justify-center gap-12 mb-10`;
const Step = tw.div`flex flex-col items-center`;
const StepCircle = tw.div`w-10 h-10 flex items-center justify-center rounded-full border-2 text-sm font-semibold`;
const StepLabel = tw.span`mt-2 text-sm font-medium`;

// Active/Inactive styling
const ActiveCircle = tw(
  StepCircle
)`bg-primary-500 text-white border-primary-500`;
const InactiveCircle = tw(StepCircle)`bg-white text-gray-600 border-gray-300`;
const ActiveLabel = tw(StepLabel)`text-primary-600 font-bold`;
const InactiveLabel = tw(StepLabel)`text-gray-500`;

const Form = tw.form`w-full space-y-6`;
const Field = tw.div`flex flex-col gap-2`;
const Label = tw.label`font-medium text-gray-700`;
const Input = tw.input`w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none`;
const Select = tw.select`w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none`;
const FileInput = tw.input`w-full border border-gray-300 p-3 rounded-lg bg-gray-500 cursor-pointer focus:ring-2 focus:ring-primary-500`;

// Styled Radio Buttons
const RadioGroup = tw.div`flex gap-6 mt-2`;
const RadioLabel = tw.label`flex items-center gap-2 cursor-pointer font-medium`;
const RadioInput = tw.input`w-4 h-4 cursor-pointer`;

// Styled Components for Dish Type
const DishTypeContainer = tw.div`flex gap-6 mt-2`;
const DishOption = tw.button`flex items-center cursor-pointer bg-transparent border-none p-0 outline-none`;
const OuterCircle = tw.div`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200`;
const InnerCircle = tw.div`w-3 h-3 rounded-full transition-opacity duration-200`;
const LabelText = tw.span`ml-2 text-sm font-medium`;

// Date Picker
const DateInputWrapper = tw.div`w-full border border-gray-300 rounded-lg p-3 cursor-pointer flex items-center`;
const StyledDateInput = tw.input`w-full outline-none border-none bg-transparent cursor-pointer`;

// Buttons
const ButtonRow = tw.div`flex justify-end gap-4 mt-6`;
const Button = tw.button`px-6 py-3 rounded-lg font-medium transition duration-300`;
const PrimaryButton = tw(
  Button
)`bg-primary-500 text-white hover:bg-primary-700`;
const SecondaryButton = tw(Button)`bg-gray-300 text-gray-700 hover:bg-gray-400`;

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    user_name: "",
    date_of_birth: "",
    email_address: "",
    mobile_number: "",
    gender: "",
    user_photo: null,
    idType: "",
    id_number: "",
    photoIdPictures: null,
    addressType: "",
    avlbl_dishtype: "",
    country: "",
    state: "",
  });

  // Add this ref for the date input
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <PageContainer>
      <ContentWrapper>
        {/* Left side */}
        <LeftPanel>
          <Heading>Join Us 🚀</Heading>
          <SubHeading>
            Complete the registration in just two steps to get started.
          </SubHeading>
        </LeftPanel>

        {/* Right side form */}
        <RightPanel>
          {/* Stepper */}
          <Stepper>
            <Step>
              {step === 1 ? (
                <>
                  <ActiveCircle>1</ActiveCircle>
                  <ActiveLabel>Step 1</ActiveLabel>
                </>
              ) : (
                <>
                  <InactiveCircle>1</InactiveCircle>
                  <InactiveLabel>Step 1</InactiveLabel>
                </>
              )}
            </Step>

            <Step>
              {step === 2 ? (
                <>
                  <ActiveCircle>2</ActiveCircle>
                  <ActiveLabel>Step 2</ActiveLabel>
                </>
              ) : (
                <>
                  <InactiveCircle>2</InactiveCircle>
                  <InactiveLabel>Step 2</InactiveLabel>
                </>
              )}
            </Step>
          </Stepper>

          <Form onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                {/* Section Heading */}
                <SectionHeading>Personal Details</SectionHeading>
                <Field>
                  <Label>Name</Label>
                  <Input
                    type="text"
                    name="user_name"
                    placeholder="Enter name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                  />
                </Field>
                <Field>
                  <Label>Date of Birth</Label>
                  <DateInputWrapper
                    onClick={() =>
                      dateInputRef.current && dateInputRef.current.click()
                    }
                  >
                    <StyledDateInput
                      type="date"
                      name="date_of_birth"
                      value={formData.date_of_birth}
                      onChange={handleChange}
                      required
                      ref={dateInputRef}
                    />
                  </DateInputWrapper>
                </Field>
                <Field>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email_address"
                    placeholder="Enter email"
                    value={formData.email_address}
                    onChange={handleChange}
                    required
                  />
                </Field>
                <Field>
                  <Label>Mobile</Label>
                  <Input
                    type="tel"
                    name="mobile_number"
                    placeholder="Enter mobile number"
                    value={formData.mobile_number}
                    onChange={handleChange}
                    required
                  />
                </Field>
                <Field>
                  <Label>Gender</Label>
                  <Select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </Select>
                </Field>
                <Field>
                  <Label>User Photo</Label>
                  <FileInput
                    type="file"
                    name="user_photo"
                    accept="image/*"
                    onChange={handleChange}
                  />
                </Field>

                {/* Section Heading */}
                <SectionHeading>Identity Details</SectionHeading>

                <Field>
                  <Label>ID Type</Label>
                  <Select
                    name="idType"
                    value={formData.idType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select ID Type</option>
                    <option>Aadhar</option>
                    <option>PAN</option>
                    <option>Passport</option>
                  </Select>
                </Field>
                <Field>
                  <Label>ID Number</Label>
                  <Input
                    type="text"
                    name="id_number"
                    placeholder="Enter ID number"
                    value={formData.id_number}
                    onChange={handleChange}
                    required
                  />
                </Field>
                <Field>
                  <Label>ID Proof Upload</Label>
                  <FileInput
                    type="file"
                    name="photoIdPictures"
                    accept="image/*"
                    onChange={handleChange}
                  />
                </Field>
              </>
            )}

            {step === 2 && (
              <>
                {/* Section Heading */}
                <SectionHeading>Address Details</SectionHeading>
                <Field>
                  <div className="flex flex-col gap-2">
                    <label className="font-medium">Address Type</label>
                    <RadioGroup>
                      {/* Permanent */}
                      <RadioLabel>
                        <RadioInput
                          type="radio"
                          name="addressType"
                          value="Permanent"
                          checked={formData.addressType === "Permanent"}
                          onChange={handleChange}
                          required
                        />
                        <span>Permanent</span>
                      </RadioLabel>

                      {/* Current */}
                      <RadioLabel>
                        <RadioInput
                          type="radio"
                          name="addressType"
                          value="Current"
                          checked={formData.addressType === "Current"}
                          onChange={handleChange}
                          required
                        />
                        <span>Current</span>
                      </RadioLabel>

                      {/* Office (new option) */}
                      <RadioLabel>
                        <RadioInput
                          type="radio"
                          name="addressType"
                          value="Office"
                          checked={formData.addressType === "Office"}
                          onChange={handleChange}
                          required
                        />
                        <span>Office</span>
                      </RadioLabel>
                    </RadioGroup>
                  </div>
                </Field>
                {/* Available Dish Type as custom circles */}
                <Field>
                  <Label>Available Dish Type</Label>
                  <DishTypeContainer>
                    {[
                      { label: "Veg", color: "green" },
                      { label: "Non-Veg", color: "red" },
                      { label: "Both", color: "blue" },
                    ].map((option) => (
                      <DishOption
                        key={option.label}
                        type="button"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            avlbl_dishtype: option.label,
                          })
                        }
                      >
                        <OuterCircle
                          style={{
                            borderColor:
                              formData.avlbl_dishtype === option.label
                                ? option.color
                                : "#9ca3af",
                          }}
                        >
                          <InnerCircle
                            style={{
                              backgroundColor: option.color,
                              opacity:
                                formData.avlbl_dishtype === option.label
                                  ? 1
                                  : 0,
                            }}
                          />
                        </OuterCircle>
                        <LabelText>{option.label}</LabelText>
                      </DishOption>
                    ))}
                  </DishTypeContainer>
                </Field>

                <Field>
                  <Label>Country</Label>
                  <Select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Country</option>
                    <option>India</option>
                    <option>USA</option>
                    <option>Japan</option>
                    <option>Nepal</option>
                  </Select>
                </Field>
                <Field>
                  <Label>State</Label>
                  <Input
                    type="text"
                    name="state"
                    placeholder="Enter State"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </Field>
                <Field>
                  <Label>Plot No/Place</Label>
                  <Input
                    type="text"
                    name="plotNo"
                    placeholder="Enter Plot No/Place"
                    value={formData.plotNo}
                    onChange={handleChange}
                    required
                  />
                </Field>
                <Field>
                  <Label>Landmarks</Label>
                  <Input
                    type="text"
                    name="landmarks"
                    placeholder="Enter Landmarks"
                    value={formData.landmarks}
                    onChange={handleChange}
                    required
                  />
                </Field>
                {/* Section Heading */}
                <SectionHeading>Resturant Details</SectionHeading>
                <Field>
                  <Label>Resturant Name</Label>
                  <Input
                    type="text"
                    name="restaurantName"
                    placeholder="Enter Restaurant Name"
                    value={formData.restaurantName}
                    onChange={handleChange}
                    required
                  />
                </Field>
                <Field>
                  <Label>Description</Label>
                  <Input
                    type="text"
                    name="description"
                    placeholder="Enter Description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </Field>
                <Field>
                  <Label>Owner's Name</Label>
                  <Input
                    type="text"
                    name="ownerName"
                    placeholder="Enter Owner's Name"
                    value={formData.ownerName}
                    onChange={handleChange}
                    required
                  />
                </Field>
                <Field>
                  <Label>Total No Of Tables</Label>
                  <Input
                    type="text"
                    name="totalTables"
                    placeholder="Enter Total No Of Tables"
                    value={formData.totalTables}
                    onChange={handleChange}
                    required
                  />
                </Field>
                <Field>
                  <Label>Restaurant Photos</Label>
                  <FileInput
                    type="file"
                    name="restaurantPhotos"
                    accept="image/*"
                    onChange={handleChange}
                  />
                </Field>
              </>
            )}

            <ButtonRow>
              {step > 1 && (
                <SecondaryButton type="button" onClick={prevStep}>
                  Back
                </SecondaryButton>
              )}
              {step < 2 ? (
                <PrimaryButton type="button" onClick={nextStep}>
                  Next
                </PrimaryButton>
              ) : (
                <PrimaryButton type="submit">Submit</PrimaryButton>
              )}
            </ButtonRow>
          </Form>
        </RightPanel>
      </ContentWrapper>
    </PageContainer>
  );
};

export default RegistrationForm;
