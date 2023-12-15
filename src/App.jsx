import "./App.css";
import LikeImage from "./components/LikeImage";
import LikePost from "./components/LikePost";
import LikeImagePart2 from "./components/LikeImage Part2";
import LikePostPart2 from "./components/LikePost part2";
import RenderProps from "./components/RenderProps";

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className="buttons">
        {/* <LikePost/>
        <LikeImage/> */}

        {/* <LikePostPart2 />
        <LikeImagePart2 /> */}

        <RenderProps
          render={(count, handleCount) => (
            <LikeImagePart2 count={count} handleCount={handleCount} />
          )}
        />

        <RenderProps
          render={(count, handleCount) => (
            <LikePostPart2 count={count} handleCount={handleCount} />
          )}
        />
      </div>
    </div>
  );
}

export default App;
