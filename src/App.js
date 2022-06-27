import {
  PersonImage,
  PersonName,
  FrontEndDeveloper,
  Website,
  MyButton,
  About,
  AboutText,
  Interests,
  InterestsText,
  Footer,
} from "./appComponents.js";

function App() {
  return (
    <div className="App">
      <PersonImage />
      {/* This is an AI female generated image, link: https://www.reddit.com/r/Damnthatsinteresting/comments/rw140j/this_woman_never_existed_ai_generated_image/ */}
      <PersonName />
      <FrontEndDeveloper />
      <Website />
      <MyButton />
      <About />
      <AboutText />
      <Interests />
      <InterestsText />
      <Footer />
    </div>
  );
}

export default App;
