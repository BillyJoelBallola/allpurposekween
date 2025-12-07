import { MdOutlineFileDownload } from "react-icons/md";
import type { ISettings } from "../utils/types";

type Props = {
  settings: ISettings;
  changeSize: (size: string) => void;
};

function Tools({ settings, changeSize }: Props) {
  return (
    <div className="flex items-center justify-center gap-2 self-end w-max bg-white p-2 rounded-lg shadow-md border border-neutral-200">
      <select
        value={settings.size}
        onChange={(e) => changeSize(e.target.value)}
        className="bg-white p-2 rounded-lg text-sm w-max"
      >
        <option value="h-64">sm</option>
        <option value="h-80">md</option>
        <option value="h-96">lg</option>
      </select>
      <button className="p-1 hover:bg-neutral-100 duration-150 rounded-lg cursor-pointer">
        <MdOutlineFileDownload className="size-6" />
      </button>
    </div>
  );
}

export default Tools;
