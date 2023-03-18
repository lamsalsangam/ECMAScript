// import File1 from "./tutorial/01-useState/01-error-example";
// import File2 from "./tutorial/01-useState/02-basics";
// import File3 from "./tutorial/01-useState/03-array";
// import File4 from "./tutorial/01-useState/04-object";
// import File5 from "./tutorial/01-useState/05-gotcha";
// import File6 from "./tutorial/02-useEffect/01-code-example";
// import File7 from "./tutorial/02-useEffect/02-basic";
// import File8 from "./tutorial/02-useEffect/03-multiple-effects";
// import File9 from "./tutorial/02-useEffect/04-fetch-data";
import File10 from "./tutorial/02-useEffect/05-cleanup-function";
// import File11 from "./tutorial/03-conditional-rendering/01-multiple-returns-basics";
// import File12 from "./tutorial/03-conditional-rendering/02-multiple-returns-fetch-data";
// import File13 from "./tutorial/03-conditional-rendering/03-hooks-rule";
// import File14 from "./tutorial/03-conditional-rendering/04-short-circuit-overview";
// import File15 from "./tutorial/03-conditional-rendering/05-short-circuit-examples";
// import File16 from "./tutorial/03-conditional-rendering/06-toggle-challenge";
// import File17 from "./tutorial/03-conditional-rendering/07-user-challenge";

const LineBreak = () => {
  return (
    <>
      <hr />
      <hr />
    </>
  );
};

function App() {
  return (
    <div className="container">
      <h4>First Vite with React Project</h4>
      <h1>Advanced React Topic</h1>
      <h5>Learning Curve</h5>
      {/* <>
        <LineBreak />
        <File1 />
        <LineBreak />
        <File2 />
        <LineBreak />
        <File3 />
        <LineBreak />
        <File4 />
        <LineBreak />
        <File5 />
        <LineBreak />
      </> */}
      <>
        {/* <File6 />
        <File7 />
        <File8/>
        <File9 /> */}
        <File10 />
      </>
      {/* <>
        <File11 />
        <File12 />
        <File13 />
        <File14 />
        <File15 />
        <File16 />
        <File17 />
      </> */}
    </div>
  );
}

export default App;
