import { useState } from "react";
import InputField from "./components/InputField";
import Tools from "./components/Tools";
import OutputContainer from "./components/OutputContainer";
import Logo from "./assets/kween_logo.png";
import type { ISettings } from "./utils/types";

function App() {
  const [text, setText] = useState("");
  const [settings, setSettings] = useState<ISettings>({
    size: "h-64",
  });

  function handleTextChange(text: string) {
    const MAX_LENGTH = 20;
    if (text.split("")[0] === " " || text.split("").length === MAX_LENGTH)
      return;
    setText(text);
  }

  function changeSize(size: string) {
    setSettings(() => ({
      size: size,
    }));
  }

  return (
    <main className="my-20 mx-auto w-[92%] md:w-[82%] max-w-5xl">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="logo-img" className="h-15 aspect-auto" />
          <h1 className="text-2xl md:text-4xl -mb-2 font-bold text-neutral-800">
            All-Purpose Kween
          </h1>
        </div>
        <InputField text={text} handleTextChange={handleTextChange} />
        <Tools settings={settings} changeSize={changeSize} />
        <OutputContainer text={text} settings={settings} />
      </div>
    </main>
  );
}

export default App;
