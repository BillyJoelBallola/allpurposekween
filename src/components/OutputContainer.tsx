import AImg from "../assets/A.png";
import BImg from "../assets/B.png";
import CImg from "../assets/C.png";
import DImg from "../assets/D.png";
import EImg from "../assets/E.png";
import FImg from "../assets/F.png";
import GImg from "../assets/G.png";
import HImg from "../assets/H.png";
import IImg from "../assets/I.png";
import JImg from "../assets/J.png";
import KImg from "../assets/K.png";
import LImg from "../assets/L.png";
import MImg from "../assets/M.png";
import NImg from "../assets/N.png";
import OImg from "../assets/O.png";
import PImg from "../assets/P.png";
import QImg from "../assets/Q.png";
import RImg from "../assets/R.png";
import SImg from "../assets/S.png";
import TImg from "../assets/T.png";
import UImg from "../assets/U.png";
import VImg from "../assets/V.png";
import WImg from "../assets/W.png";
import XImg from "../assets/X.png";
import YImg from "../assets/Y.png";
import ZImg from "../assets/Z.png";
import type { ISettings } from "../utils/types";

const letterImages: Record<string, string> = {
  A: AImg,
  B: BImg,
  C: CImg,
  D: DImg,
  E: EImg,
  F: FImg,
  G: GImg,
  H: HImg,
  I: IImg,
  J: JImg,
  K: KImg,
  L: LImg,
  M: MImg,
  N: NImg,
  O: OImg,
  P: PImg,
  Q: QImg,
  R: RImg,
  S: SImg,
  T: TImg,
  U: UImg,
  V: VImg,
  W: WImg,
  X: XImg,
  Y: YImg,
  Z: ZImg,
};

function OutputContainer({
  text,
  settings,
}: {
  text: string;
  settings: ISettings;
}) {
  return (
    <div className="bg-white w-full shadow-md rounded-lg border border-neutral-200">
      {text === "" ? (
        <div className="h-60 p-4">
          <div className="text-neutral-400 font-semibold bg-neutral-100 text-sm flex items-center justify-center rounded-lg size-full border border-dashed border-neutral-300">
            Your output appears here
          </div>
        </div>
      ) : (
        <div className="h-auto flex flex-wrap items-center justify-center">
          {text.split("").map((letter, idx) => (
            <div key={idx}>
              {letter !== " " && letterImages[letter] ? (
                <img
                  src={letterImages[letter]}
                  alt={letter}
                  className={`${settings.size} aspect-auto`}
                />
              ) : (
                <div className={`${settings.size} w-28`} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default OutputContainer;
