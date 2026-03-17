import clsx from "clsx";
import svgPaths from "./svg-sfs6t7friq";
import imgBambooLightGreenSingleIconPngSvgDesignForTShirts1 from "figma:asset/4198035ca82b6c07953e1add1ca6e8cc42c5d8ec.png";
import img31 from "figma:asset/60994d43007c9d883529c0b804a7ec4bfad3ab17.png";
import imgPlaceholderImage from "figma:asset/85c69f6455d40644136654e10de73dad57c02b88.png";
import img from "figma:asset/480c791a33d275905b1704948beef83a952f0b3d.png";
import imgPhoto202603150345571 from "figma:asset/eea71cf1b33de78966c7b8634c3eed259adb4af3.png";
import imgPlaceholderImage1 from "figma:asset/4e3ca27429b6a6c6d7da588042459fdd33a28c25.png";
import imgPhoto2026031503455621 from "figma:asset/7f440c7d0fc60409fd9e1e1f592f3dfc2115b0f3.png";
import imgPlaceholderImage2 from "figma:asset/158861c6f0ec3f45f26d97d4bedea489395787b8.png";
import imgPlaceholderImage3 from "figma:asset/77e5110e967ff3ec07a3331663940a184b4fa98e.png";
import imgPlaceholderImage4 from "figma:asset/bf96e8d0d3961cd99b63f50b069ed0f475b9fa60.png";
import imgAvatarImage from "figma:asset/a01dfefeac5ce383366e5fe24554c2650a6e876d.png";
import imgAvatarImage1 from "figma:asset/933b14898932efaf3d6dea39a739d0e24eeb16fb.png";
import imgAvatarImage2 from "figma:asset/a2a2f8891a4590d4511799adaae85275d572790d.png";

function Content7({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <div className="h-[18.889px] relative shrink-0 w-[116px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116 18.8889">
          <g clipPath="url(#clip0_1_901)" id="Stars">
            <path d={svgPaths.p23629f00} fill="var(--fill-0, #0C0805)" id="Vector" />
            <path d={svgPaths.p84d7480} fill="var(--fill-0, #0C0805)" id="Vector_2" />
            <path d={svgPaths.p24418170} fill="var(--fill-0, #0C0805)" id="Vector_3" />
            <path d={svgPaths.p28ff5800} fill="var(--fill-0, #0C0805)" id="Vector_4" />
            <path d={svgPaths.p32177b30} fill="var(--fill-0, #0C0805)" id="Vector_5" />
          </g>
          <defs>
            <clipPath id="clip0_1_901">
              <rect fill="white" height="18.8889" width="116" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c0805] text-[18px] w-[352px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        {children}
      </p>
    </div>
  );
}

function Card({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[rgba(12,8,5,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
    </div>
  );
}

function Content6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col items-start justify-between p-[48px] relative size-full">{children}</div>
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#fdf6ee] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[rgba(12,8,5,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
    </div>
  );
}
type Content5Props = {
  additionalClassNames?: string;
};

function Content5({ children, additionalClassNames = "" }: React.PropsWithChildren<Content5Props>) {
  return (
    <div className={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">{children}</div>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={clsx("bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]", additionalClassNames)}>
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[rgba(12,8,5,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
    </div>
  );
}
type Content4Props = {
  additionalClassNames?: string;
};

function Content4({ children, additionalClassNames = "" }: React.PropsWithChildren<Content4Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div className="content-stretch flex flex-col items-start justify-between px-[48px] py-[20px] relative size-full">{children}</div>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">{children}</div>
    </div>
  );
}

function SocialLinksHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute inset-[13.51%_12.5%_11.49%_12.5%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          {children}
        </svg>
      </div>
    </div>
  );
}

function Column({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative w-full">{children}</div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(12,8,5,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Content3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[32px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <Wrapper1 additionalClassNames={additionalClassNames}>
      <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative w-full">{children}</div>
    </Wrapper1>
  );
}
type LinkText1Props = {
  text: string;
};

function LinkText1({ text }: LinkText1Props) {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] min-h-px min-w-px relative text-[#0c0805] text-[14px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type ListItemProps = {
  text: string;
  text1: string;
};

function ListItem({ text, text1 }: ListItemProps) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        {text}
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        {text1}
      </p>
    </div>
  );
}
type Helper2Props = {
  text: string;
  text1: string;
};

function Helper2({ text, text1 }: Helper2Props) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.6] min-h-px min-w-px relative text-[#0c0805] text-[16px]">
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        {text}
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        {text1}
      </p>
    </div>
  );
}
type Content2Props = {
  text: string;
  text1: string;
};

function Content2({ text, text1 }: Content2Props) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#0c0805] w-full">
      <p className="font-['Nunito:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[36px] tracking-[0.36px] w-full">{text}</p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        {text1}
      </p>
    </div>
  );
}

function PlaceholderImageImage3() {
  return (
    <div className="aspect-[1280/738] relative rounded-[8px] shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPlaceholderImage} />
    </div>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div className={clsx("flex flex-row items-center justify-center size-full", additionalClassNames)}>
      <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative">
        <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[#0c0805] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          {text}
        </p>
      </div>
    </div>
  );
}
type ButtonText1Props = {
  text: string;
};

function ButtonText1({ text }: ButtonText1Props) {
  return (
    <div className="relative rounded-[6px] shrink-0">
      <Text1 text={text} additionalClassNames="overflow-clip rounded-[inherit]" />
      <div aria-hidden="true" className="absolute border-[rgba(12,8,5,0.15)] border-b-4 border-l-[1.5px] border-r-[1.5px] border-solid border-t-[1.5px] inset-[-1.5px_-1.5px_-4px_-1.5px] pointer-events-none rounded-[7.5px]" />
    </div>
  );
}
type Helper1Props = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Helper1({ text, text1, additionalClassNames = "" }: Helper1Props) {
  return (
    <div className={clsx("content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-[#0c0805] text-center w-full", additionalClassNames)}>
      <p className="font-['Nunito:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[52px] tracking-[0.52px] w-full">{text}</p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        {text1}
      </p>
    </div>
  );
}
type TaglineWrapperText1Props = {
  text: string;
};

function TaglineWrapperText1({ text }: TaglineWrapperText1Props) {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#0c0805] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type PlaceholderImageImage2Props = {
  additionalClassNames?: string;
};

function PlaceholderImageImage2({ additionalClassNames = "" }: PlaceholderImageImage2Props) {
  return (
    <div className={clsx("relative w-full", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlaceholderImage2} />
    </div>
  );
}

function PlaceholderImageImage1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlaceholderImage1} />
    </div>
  );
}
type Content1Props = {
  text: string;
  text1: string;
};

function Content1({ text, text1 }: Content1Props) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[#0c0805] w-full">
      <p className="font-['Nunito:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[28px] tracking-[0.28px] w-full">{text}</p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        {text1}
      </p>
    </div>
  );
}
type ButtonTextProps = {
  text: string;
};

function ButtonText({ text }: ButtonTextProps) {
  return (
    <Wrapper2 additionalClassNames="rounded-[6px]">
      <div className="content-stretch flex gap-[8px] items-center justify-center relative">
        <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[#0c0805] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          {text}
        </p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron_right">
          <div className="absolute inset-[25.72%_36.66%_25.88%_35.46%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.69159 11.6166">
              <path d={svgPaths.p36daa800} fill="var(--fill-0, #0C0805)" id="Vector" stroke="var(--stroke-0, #0C0805)" />
            </svg>
          </div>
        </div>
      </div>
    </Wrapper2>
  );
}
type ActionsTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ActionsText({ text, additionalClassNames = "" }: ActionsTextProps) {
  return (
    <div className={clsx("content-stretch flex relative shrink-0 w-full", additionalClassNames)}>
      <ButtonText text={text} />
    </div>
  );
}
type ContentProps = {
  text: string;
  text1: string;
};

function Content({ text, text1 }: ContentProps) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-[#0c0805] w-full">
      <p className="font-['Nunito:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[44px] tracking-[0.44px] w-full">{text}</p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        {text1}
      </p>
    </div>
  );
}
type TaglineWrapperTextProps = {
  text: string;
};

function TaglineWrapperText({ text }: TaglineWrapperTextProps) {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#0c0805] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type PlaceholderImageImageProps = {
  additionalClassNames?: string;
};

function PlaceholderImageImage({ additionalClassNames = "" }: PlaceholderImageImageProps) {
  return (
    <div className={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlaceholderImage} />
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex items-center px-[24px] py-[10px] relative", additionalClassNames)}>
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type LinkTextProps = {
  text: string;
};

function LinkText({ text }: LinkTextProps) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Nunito_Sans:Light',sans-serif] font-light leading-[1.6] relative shrink-0 text-[#0c0805] text-[22px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}

function Helper() {
  return (
    <div className="h-[76px] relative shrink-0 w-[226px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 226 76">
        <g clipPath="url(#clip0_1_832)" id="ÐÐ¾Ð³Ð¾ 1">
          <path d={svgPaths.p38a13b00} fill="var(--fill-0, #F3F3F7)" fillOpacity="0.0117647" id="Vector" />
          <path d={svgPaths.pb181f00} fill="var(--fill-0, #F3F3F7)" fillOpacity="0.0117647" id="Vector_2" />
          <path d={svgPaths.p230cad00} fill="var(--fill-0, #080808)" id="Vector_3" />
          <path d={svgPaths.p37293700} fill="var(--fill-0, #080808)" id="Vector_4" />
          <path d={svgPaths.pe256300} fill="var(--fill-0, #080808)" id="Vector_5" />
          <path d={svgPaths.p12470f80} fill="var(--fill-0, #080808)" id="Vector_6" />
          <path d={svgPaths.p2293a000} fill="var(--fill-0, #080808)" id="Vector_7" />
          <path d={svgPaths.p35bb4800} fill="var(--fill-0, #080808)" id="Vector_8" />
          <path d={svgPaths.p88cf880} fill="var(--fill-0, #080808)" id="Vector_9" />
          <path d={svgPaths.pa5c14f0} fill="var(--fill-0, #080808)" id="Vector_10" />
          <path d={svgPaths.p129d6200} fill="var(--fill-0, #080808)" id="Vector_11" />
          <path d={svgPaths.p7c15380} fill="var(--fill-0, #080808)" id="Vector_12" />
          <path d={svgPaths.p2f072200} fill="var(--fill-0, #080808)" id="Vector_13" />
          <path d={svgPaths.p35ee200} fill="var(--fill-0, #080808)" id="Vector_14" />
          <path d={svgPaths.p1d22080} fill="var(--fill-0, #080808)" id="Vector_15" />
          <path d={svgPaths.p3d261b00} fill="var(--fill-0, #080808)" id="Vector_16" />
          <g id="Mask group">
            <mask height="26" id="mask0_1_832" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="19" x="198" y="47">
              <g id="Group">
                <path d={svgPaths.p3d261b00} fill="var(--fill-0, white)" id="Vector_17" />
              </g>
            </mask>
            <g mask="url(#mask0_1_832)">
              <path d={svgPaths.p1367d700} fill="var(--fill-0, black)" id="Vector_18" />
            </g>
          </g>
          <path d={svgPaths.p1fa8fd00} fill="var(--fill-0, #080808)" id="Vector_19" />
          <path d={svgPaths.p14c7ac00} fill="var(--fill-0, #080808)" id="Vector_20" />
          <path d={svgPaths.p22bdb400} fill="var(--fill-0, #82C4A0)" id="Vector_21" />
          <path d={svgPaths.p46880} fill="var(--fill-0, #080808)" id="Vector_22" />
          <path d={svgPaths.pdf0a900} fill="var(--fill-0, #82C4A0)" id="Vector_23" />
          <path d={svgPaths.p3f545c80} fill="var(--fill-0, #080808)" id="Vector_24" />
          <path d={svgPaths.p24623680} fill="var(--fill-0, #FCFBFA)" id="Vector_25" />
          <path d={svgPaths.p22264800} fill="var(--fill-0, #3A3A3A)" id="Vector_26" />
          <path d={svgPaths.pc895900} fill="var(--fill-0, #080808)" id="Vector_27" />
          <path d={svgPaths.p193cb600} fill="var(--fill-0, #FCFBFA)" id="Vector_28" />
          <path d={svgPaths.p30cbf780} fill="var(--fill-0, #FCFBFA)" id="Vector_29" />
          <path d={svgPaths.p12ad4600} fill="var(--fill-0, #3A3A3A)" id="Vector_30" />
          <path d={svgPaths.p3580c100} fill="var(--fill-0, #080808)" id="Vector_31" />
          <path d={svgPaths.p15866d00} fill="var(--fill-0, #FCFBFA)" id="Vector_32" />
          <path d={svgPaths.p2000e700} fill="var(--fill-0, #FCFBFA)" id="Vector_33" />
          <path d={svgPaths.p13bfad80} fill="var(--fill-0, #080808)" id="Vector_34" />
          <path d={svgPaths.p3d632f80} fill="var(--fill-0, #080808)" id="Vector_35" />
          <path d={svgPaths.pa2c5600} fill="var(--fill-0, #FCFBFA)" id="Vector_36" />
          <path d={svgPaths.p2fca6900} fill="var(--fill-0, #DEDDDC)" id="Vector_37" />
          <path d={svgPaths.p23f5ce80} fill="var(--fill-0, #DEDDDC)" id="Vector_38" />
          <path d={svgPaths.p1a4fdd00} fill="var(--fill-0, #DEDDDC)" id="Vector_39" />
          <path d={svgPaths.p2f223300} fill="var(--fill-0, #DEDDDC)" id="Vector_40" />
          <path d={svgPaths.p11316f80} fill="var(--fill-0, #FCFBFA)" id="Vector_41" />
          <path d={svgPaths.p36cd0100} fill="url(#paint0_linear_1_832)" id="Vector_42" />
          <path d={svgPaths.p30f43d00} fill="url(#paint1_linear_1_832)" id="Vector_43" />
          <path d={svgPaths.p2b48be40} fill="var(--fill-0, #080808)" id="Vector_44" />
          <path d={svgPaths.p1866c400} fill="url(#paint2_linear_1_832)" id="Vector_45" />
          <path d={svgPaths.p3960e200} fill="var(--fill-0, #080808)" id="Vector_46" />
          <path d={svgPaths.p1a249500} fill="var(--fill-0, #FCFBFA)" id="Vector_47" />
          <path d={svgPaths.pe0480} fill="var(--fill-0, #3A3A3A)" id="Vector_48" />
          <path d={svgPaths.p391b8980} fill="url(#paint3_linear_1_832)" id="Vector_49" />
          <path d={svgPaths.p9372b00} fill="url(#paint4_linear_1_832)" id="Vector_50" />
          <path d={svgPaths.p15c60f00} fill="url(#paint5_linear_1_832)" id="Vector_51" />
          <path d={svgPaths.pf5a5f80} fill="var(--fill-0, #DEDDDC)" id="Vector_52" />
          <path d={svgPaths.p2333dd00} fill="var(--fill-0, #080808)" id="Vector_53" />
          <path d={svgPaths.p3a19ff80} fill="var(--fill-0, #3A3A3A)" id="Vector_54" />
          <path d={svgPaths.p3350000} fill="var(--fill-0, #82C4A0)" id="Vector_55" />
          <path d={svgPaths.pee78f00} fill="var(--fill-0, #FCFBFA)" id="Vector_56" />
          <path d={svgPaths.peb8e00} fill="var(--fill-0, #FCFBFA)" id="Vector_57" />
          <path d={svgPaths.p3f075270} fill="var(--fill-0, #FCFBFA)" id="Vector_58" />
          <path d={svgPaths.p37a0e500} fill="var(--fill-0, #FCFBFA)" id="Vector_59" />
          <path d={svgPaths.p37e510b0} fill="var(--fill-0, #FCFBFA)" id="Vector_60" />
          <path d={svgPaths.p2165d400} fill="var(--fill-0, #FCFBFA)" id="Vector_61" />
          <path d={svgPaths.p6d56a80} fill="var(--fill-0, #FCFBFA)" id="Vector_62" />
          <path d={svgPaths.p88e2e80} fill="var(--fill-0, #FCFBFA)" id="Vector_63" />
          <path d={svgPaths.p38a71780} fill="var(--fill-0, #FCFBFA)" id="Vector_64" />
          <path d={svgPaths.p39377600} fill="var(--fill-0, #FCFBFA)" id="Vector_65" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_832" x1="59.548" x2="59.3119" y1="60.3387" y2="59.0405">
            <stop stopColor="#141212" />
            <stop offset="1" stopColor="#393637" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_832" x1="61.2584" x2="61.124" y1="62.8341" y2="61.6606">
            <stop />
            <stop offset="1" stopColor="#2E2C2D" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_832" x1="58.7763" x2="58.2143" y1="57.7104" y2="55.9175">
            <stop />
            <stop offset="1" stopColor="#343132" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_832" x1="36.9061" x2="37.1733" y1="60.4354" y2="59.0472">
            <stop stopColor="#100F0F" />
            <stop offset="1" stopColor="#393636" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_832" x1="35.1057" x2="35.2468" y1="62.7724" y2="61.6042">
            <stop />
            <stop offset="1" stopColor="#393637" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_832" x1="37.2315" x2="37.758" y1="57.5544" y2="55.8553">
            <stop />
            <stop offset="1" stopColor="#363434" />
          </linearGradient>
          <clipPath id="clip0_1_832">
            <rect fill="white" height="76" width="226" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Главная • Desktop">
      <div className="bg-white h-[211px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Navbar / 2 /">
        <div className="flex flex-col items-center justify-end size-full">
          <div className="content-stretch flex flex-col items-center justify-end px-[52px] py-[5px] relative size-full">
            <div className="content-stretch flex gap-[115px] h-[201px] items-center relative shrink-0 w-[1440px]">
              <div className="flex items-center justify-center relative shrink-0">
                <div className="flex-none rotate-180">
                  <div className="h-[216px] relative w-[78px]" data-name="Bamboo Light Green Single Icon PNG & SVG Design For T-Shirts 1">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-[131.48%] left-[-102.56%] max-w-none top-[-14.81%] w-[364.1%]" src={imgBambooLightGreenSingleIconPngSvgDesignForTShirts1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[959px]">
                <div className="content-stretch flex flex-col gap-[35px] items-center justify-end relative shrink-0">
                  <div className="content-stretch flex items-start relative shrink-0">
                    <Helper />
                  </div>
                  <div className="h-[43px] relative shrink-0 w-[658px]" data-name="Container">
                    <div className="absolute content-stretch flex gap-[65px] items-center left-0 top-[8px]" data-name="Column">
                      <LinkText text="О центре" />
                      <LinkText text="Направления" />
                      <LinkText text="Отзывы" />
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Link">
                        <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Nav Link Dropdown">
                          <p className="font-['Nunito_Sans:Light',sans-serif] font-light leading-[1.6] relative shrink-0 text-[#0c0805] text-[22px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                            Программы
                          </p>
                          <div className="relative shrink-0 size-[24px]" data-name="Chevron Down">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                              <g id="Chevron Down">
                                <path clipRule="evenodd" d={svgPaths.pee47f00} fill="var(--fill-0, #0C0805)" fillRule="evenodd" id="Vector" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-[509.1px] items-center justify-center relative shrink-0 w-[200.74px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
                <div className="flex-none rotate-[-179.85deg]">
                  <div className="h-[508.587px] relative w-[199.429px]" data-name="Без названия (3) 1">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-[138.43%] left-[-137.83%] max-w-none top-[-15.28%] w-[285.57%]" src={img31} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Wrapper2 additionalClassNames="bg-[#fcedde] h-[713px] w-full">
        <div className="content-center flex flex-wrap gap-y-[10px] items-center justify-center px-[80px] py-[46px] relative size-full">
          <div className="content-center flex flex-wrap gap-y-[80px] h-[589px] items-center justify-center max-h-[589px] max-w-[1280px] relative shrink-0 w-[1280px]" data-name="Container">
            <div className="bg-[#fdf6ee] h-[595px] relative rounded-[8px] shrink-0 w-[1280px]" data-name="Card">
              <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
                <div className="content-stretch flex h-[614px] items-center justify-center relative shrink-0 w-[1278px]">
                  <div className="content-stretch flex flex-col h-[615px] items-start justify-center px-[48px] py-[65px] relative shrink-0 w-[584px]" data-name="Column">
                    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Content">
                      <p className="font-['Nunito:Medium',sans-serif] font-medium leading-[1.2] min-w-full relative shrink-0 text-[#0c0805] text-[52px] tracking-[0.52px] w-[min-content]">Тёплое место рядом с домом, куда дети хотят возвращаться</p>
                      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#0c0805] text-[18px] w-[min-content]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                        Занятия для детей от 4 до 14 лет в Ботаническом районе Екатеринбурга. Рисование, архитектурное моделирование, английский язык, танцы и настольные игры — всё в одном месте, где каждый ребёнок развивается в своём темпе.
                      </p>
                      <div className="content-stretch flex flex-col h-[46px] items-start justify-end relative shrink-0 w-[135px]" data-name="Actions">
                        <div className="bg-[#f2a65a] relative rounded-[6px] shrink-0" data-name="Button">
                          <div aria-hidden="true" className="absolute border-[#c18448] border-b-4 border-l-[1.5px] border-r-[1.5px] border-solid border-t-[1.5px] inset-[-1.5px_-1.5px_-4px_-1.5px] pointer-events-none rounded-[7.5px]" />
                          <div className="flex flex-row items-center size-full">
                            <Text text="Записаться" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <PlaceholderImageImage additionalClassNames="aspect-[586.0000610351562/615]" />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(12,8,5,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>
          </div>
        </div>
      </Wrapper2>
      <Wrapper1 additionalClassNames="bg-[#7baf8e] h-[1721px]">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative size-full">
          <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
              <div className="content-stretch flex h-[42px] items-center relative shrink-0" data-name="Tagline Wrapper">
                <p className="font-['Nunito:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[28px] text-center text-white tracking-[0.28px] whitespace-nowrap">Программы</p>
              </div>
              <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-center text-white w-[976px]" data-name="Content">
                <p className="font-['Nunito:Medium',sans-serif] font-medium leading-[1.2] min-w-full relative shrink-0 text-[52px] tracking-[0.52px] w-[min-content]">Найдите занятие для вашего ребёнка</p>
                <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[22px] w-[890px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Развивающие занятия и мягкая подготовка к школе для самых маленьких
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component">
              <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Row">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="1 колонка">
                  <Wrapper3 additionalClassNames="w-full">
                    <Content4 additionalClassNames="h-[309px]">
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content Top">
                        <TaglineWrapperText text="4–6 лет" />
                        <Content text="Смышлёная Панда" text1="Здесь малыши учатся думать, слушать и радоваться новому" />
                      </div>
                      <ActionsText text="Узнать подробнее" additionalClassNames="items-center" />
                    </Content4>
                    <PlaceholderImageImage additionalClassNames="w-full" />
                  </Wrapper3>
                  <div className="content-stretch flex gap-[32px] h-[340px] items-start relative shrink-0 w-full" data-name="Row">
                    <div className="bg-white h-[479px] relative rounded-[8px] shrink-0 w-[296px]" data-name="Настольные игры">
                      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                        <Content5 additionalClassNames="w-full">
                          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content Top">
                            <div className="relative shrink-0 size-[48px]" data-name="draw_abstract">
                              <div className="absolute inset-[3.79%]" data-name="Vector">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.359 44.359">
                                  <path d={svgPaths.p1ba47e00} fill="var(--fill-0, #0C0805)" id="Vector" />
                                </svg>
                              </div>
                            </div>
                            <Content1 text="Настольные игры" text1="Клуб настольных игр для детей от 9 лет" />
                          </div>
                          <ActionsText text="Узнать подробнее" additionalClassNames="flex-col items-start justify-end" />
                        </Content5>
                        <div className="aspect-[296/222] relative shrink-0 w-full" data-name="фото">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img alt="" className="absolute h-[100.03%] left-0 max-w-none top-[-0.02%] w-[105.07%]" src={img} />
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[rgba(12,8,5,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
                    </div>
                    <Wrapper3 additionalClassNames="h-[479px]">
                      <Content5 additionalClassNames="w-full">
                        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content Top">
                          <div className="flex items-center justify-center relative shrink-0">
                            <div className="-scale-y-100 flex-none rotate-180">
                              <div className="h-[165px] relative w-[248px]" data-name="photo_2026-03-15_03-45-57 1">
                                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPhoto202603150345571} />
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[#0c0805] w-full" data-name="Content">
                            <p className="font-['Nunito:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[28px] tracking-[0.28px] w-full">Секреты миниатюриста</p>
                            <div className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                              <p className="mb-0">Архитектурное моделирование и макеты из бумаги для тех, кто любит создавать</p>
                              <p>от 9 лет</p>
                            </div>
                          </div>
                        </div>
                        <ActionsText text="Подробнее" additionalClassNames="items-center" />
                      </Content5>
                    </Wrapper3>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] h-[1247px] items-start min-h-px min-w-px relative" data-name="2 колонка">
                  <div className="bg-white h-[340px] relative rounded-[8px] shrink-0 w-full" data-name="ЭКсплорики">
                    <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
                      <PlaceholderImageImage1 />
                      <Content5 additionalClassNames="h-full">
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content Top">
                          <TaglineWrapperText text="4–6 лет" />
                          <Content1 text="Эксплорики" text1="Английский как естественная среда через познание мира" />
                        </div>
                        <ActionsText text="Подробнее" additionalClassNames="items-center" />
                      </Content5>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(12,8,5,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
                  </div>
                  <Wrapper3 additionalClassNames="w-full">
                    <Content4 additionalClassNames="h-[417px]">
                      <div className="content-stretch flex flex-col gap-[8px] h-[237px] items-end justify-center relative shrink-0 w-[542px]" data-name="Content Top">
                        <TaglineWrapperText text="7–8+ лет" />
                        <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Content">
                          <div className="h-[172px] relative shrink-0 w-[187px]" data-name="photo_2026-03-15_03-45-56 (2) 1">
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              <img alt="" className="absolute h-[101.54%] left-[-22.12%] max-w-none top-[-1.85%] w-[140.28%]" src={imgPhoto2026031503455621} />
                            </div>
                          </div>
                          <div className="flex flex-col font-['Nunito:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0c0805] text-[44px] tracking-[0.44px] w-[317px]">
                            <p className="leading-[1.2]">Пушистые художники</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[24px] h-[88px] items-start justify-center relative shrink-0 w-full" data-name="Actions">
                        <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c0805] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                          Рисование от простого к интересному
                        </p>
                        <ButtonText text="Подробнее" />
                      </div>
                    </Content4>
                    <PlaceholderImageImage2 additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
                  </Wrapper3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper1>
      <Wrapper additionalClassNames="bg-white">
        <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Content">
            <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Section Title">
              <TaglineWrapperText1 text="О нас" />
              <Helper1 text="Академия Панды - больше, чем занятия" text1="Это тёплое место рядом с домом, где каждый ребёнок находит своё занятие и своих людей. Мы в Ботаническом районе, рядом с ТЦ «Дирижабль», и верим, что развитие должно быть в своём темпе и с удовольствием, когда ребёнок растёт с интересом к жизни и идет своим путём и со своей скоростью." />
            </div>
            <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Actions">
              <ButtonText1 text="Записаться" />
              <ButtonText text="Узнать больше" />
            </div>
          </div>
          <PlaceholderImageImage3 />
        </div>
      </Wrapper>
      <Wrapper additionalClassNames="bg-[#fcedde]">
        <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
            <TaglineWrapperText1 text="Атмосфера" />
            <Helper1 text="Почему дети хотят возвращаться" text1="Здесь каждый ребёнок чувствует себя в безопасности" />
          </div>
          <div className="content-stretch flex flex-col gap-[64px] h-[2752px] items-center relative shrink-0 w-full" data-name="Component">
            <Wrapper4>
              <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Placeholder Image">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlaceholderImage2} />
              </div>
              <Content6>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content Top">
                  <TaglineWrapperText text="Удобство" />
                  <Content text="Рядом с домом в Ботаническом районе" text1="Мы находимся в Ботаническом районе, рядом с ТЦ «Дирижабль». Дети легко добираются сами или с родителями, без долгих поездок." />
                </div>
                <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Actions">
                  <ButtonText1 text="Подробнее" />
                  <ButtonText text="Узнать" />
                </div>
              </Content6>
            </Wrapper4>
            <Wrapper4>
              <Content6>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content Top">
                  <TaglineWrapperText text="Развитие" />
                  <Content text="В своём темпе — с удовольствием" text1="Каждый ребёнок развивается в своём темпе. Интерес и радость от процесса — вот что двигает вперёд лучше любых оценок." />
                </div>
                <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Actions">
                  <ButtonText1 text="Подробнее" />
                  <ButtonText text="Узнать" />
                </div>
              </Content6>
              <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Placeholder Image">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img} />
              </div>
            </Wrapper4>
            <Wrapper4>
              <PlaceholderImageImage1 />
              <Content6>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content Top">
                  <TaglineWrapperText text="Внимание" />
                  <Content text="Маленькие группы до десяти детей" text1="Педагог видит каждого, слышит каждого. Никто не теряется в толпе, и каждому хватает внимания и помощи." />
                </div>
                <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Actions">
                  <ButtonText1 text="Подробнее" />
                  <ButtonText text="Узнать" />
                </div>
              </Content6>
            </Wrapper4>
            <Wrapper4>
              <Content6>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content Top">
                  <TaglineWrapperText text="Люди" />
                  <Content text="Педагоги, которым важен ваш ребёнок" text1="Это не просто работа. Наши педагоги выбрали это дело, потому что им нравится видеть, как дети растут и находят свои интересы." />
                </div>
                <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Actions">
                  <ButtonText1 text="Подробнее" />
                  <ButtonText text="Узнать" />
                </div>
              </Content6>
              <PlaceholderImageImage additionalClassNames="h-full" />
            </Wrapper4>
          </div>
        </div>
      </Wrapper>
      <Wrapper additionalClassNames="bg-[#f2f2f2]">
        <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
            <TaglineWrapperText1 text="Просто" />
            <Helper1 text="Три шага к любимому занятию" text1="Три простых шага к тому, что нравится вашему ребёнку" />
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component">
            <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Row">
              <Card>
                <div className="h-[233px] relative shrink-0 w-full" data-name="Placeholder Image">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlaceholderImage3} />
                </div>
                <Content3>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content Top">
                    <TaglineWrapperText text="Шаг первый" />
                    <Content2 text="Выберите направление для ребёнка" text1="Посмотрите наши программы и выберите то, что близко вашему ребёнку." />
                  </div>
                  <ActionsText text="Смотреть" additionalClassNames="items-center" />
                </Content3>
              </Card>
              <Card>
                <PlaceholderImageImage2 additionalClassNames="h-[233px] shrink-0" />
                <Content3>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content Top">
                    <TaglineWrapperText text="Шаг второй" />
                    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#0c0805] w-full" data-name="Content">
                      <p className="font-['Nunito:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[36px] tracking-[0.36px] w-full">Придите на пробное занятие со скидкой 50%*</p>
                      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>{`*При покупке абоненмента- первое занятие в подарок `}</p>
                    </div>
                  </div>
                  <ActionsText text="Записаться" additionalClassNames="items-center" />
                </Content3>
              </Card>
              <Wrapper3 additionalClassNames="h-[597px]">
                <div className="h-[233px] relative shrink-0 w-full" data-name="Placeholder Image">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlaceholderImage} />
                </div>
                <div className="h-[364px] relative shrink-0 w-full" data-name="Content">
                  <div className="flex flex-col justify-center size-full">
                    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[32px] relative size-full">
                      <div className="content-stretch flex flex-col gap-[8px] h-[249px] items-start relative shrink-0 w-full" data-name="Content Top">
                        <TaglineWrapperText text="Шаг третий" />
                        <Content2 text="Почувствуйте — и решите сами" text1="Понравилось - остаётесь. Всё в ваших руках, мы только рады помочь»" />
                      </div>
                      <ActionsText text="Начать" additionalClassNames="items-end" />
                    </div>
                  </div>
                </div>
              </Wrapper3>
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper additionalClassNames="bg-[#fcedde]">
        <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
          <Helper1 text="Атмосфера Академии Панды" text1="Реальные моменты из жизни центра — дети в процессе, эмоции и творчество" additionalClassNames="max-w-[768px]" />
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
            <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
              <div className="aspect-[405.3333435058594/405.3299865722656] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Placeholder Image 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPlaceholderImage4} />
              </div>
              <div className="aspect-[405.33331298828125/405.3299865722656] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Placeholder Image 2">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={img} />
              </div>
              <div className="aspect-[405.33331298828125/405.3299865722656] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Placeholder Image 3">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPlaceholderImage1} />
              </div>
            </div>
            <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
              <div className="aspect-[405.3333435058594/405.3299865722656] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Placeholder Image 4">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPlaceholderImage2} />
              </div>
              <div className="aspect-[405.33331298828125/405.3299865722656] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Placeholder Image 5">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPlaceholderImage} />
              </div>
              <div className="aspect-[405.33331298828125/405.3299865722656] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Placeholder Image 6">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPlaceholderImage3} />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper additionalClassNames="bg-[#7baf8e]">
        <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[768px] relative shrink-0 text-center w-full" data-name="Section Title">
            <p className="font-['Nunito:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#f0edd8] text-[52px] tracking-[0.52px] w-full">Что говорят родители</p>
            <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-[#fdf6ee] text-[22px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              Истории семей, которые нашли здесь своё место
            </p>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
            <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Row">
              <Column>
                <Content7>{`"Сын ходит на архитектурное моделирование уже полгода, и это изменило его отношение к учёбе. Он стал внимательнее и спокойнее."`}</Content7>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Avatar">
                  <div className="relative shrink-0 size-[48px]" data-name="Avatar Image">
                    <img alt="" className="absolute block max-w-none size-full" height="48" src={imgAvatarImage} width="48" />
                  </div>
                  <Helper2 text="Мария Петрова" text1="Мама Кирилла, 10 лет" />
                </div>
              </Column>
              <Column>
                <Content7>{`"Дочка просит идти на танцы каждый день. Наконец-то нашли то, что ей действительно нравится, а не то, что мы навязали."`}</Content7>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Avatar">
                  <div className="relative shrink-0 size-[48px]" data-name="Avatar Image">
                    <img alt="" className="absolute block max-w-none size-full" height="48" src={imgAvatarImage1} width="48" />
                  </div>
                  <Helper2 text="Елена Сидорова" text1="Мама Софии, 7 лет" />
                </div>
              </Column>
              <Column>
                <Content7>{`"Педагоги здесь не давят, не ругают за ошибки. Ребёнок ходит с удовольствием, и это главное для нас."`}</Content7>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Avatar">
                  <div className="relative shrink-0 size-[48px]" data-name="Avatar Image">
                    <img alt="" className="absolute block max-w-none size-full" height="48" src={imgAvatarImage2} width="48" />
                  </div>
                  <Helper2 text="Алексей Иванов" text1="Папа Максима, 6 лет" />
                </div>
              </Column>
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper additionalClassNames="bg-[#fcedde]">
        <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
          <Helper1 text="Вопросы" text1="Ответы на самые частые вопросы родителей о центре" additionalClassNames="max-w-[768px]" />
          <div className="content-stretch flex flex-col gap-[48px] items-start leading-[1.6] max-w-[768px] overflow-clip relative shrink-0 text-[#0c0805] w-full" data-name="List">
            <ListItem text="Где находится Академия Панды?" text1="Мы в Ботаническом районе Екатеринбурга, рядом с ТЦ «Дирижабль». Адрес и схему проезда можно найти в разделе контактов. Центр легко доступен на машине или общественном транспорте." />
            <ListItem text="Сколько детей в группе?" text1="В каждой группе не более десяти детей. Это позволяет педагогу уделить внимание каждому и создать комфортную атмосферу для развития." />
            <ListItem text="Нужна ли подготовка перед первым занятием?" text1="Никакой подготовки не нужно. Приходите такими, какие вы есть. Педагог встретит вас, расскажет о программе и начнёт занятие в спокойном темпе." />
            <ListItem text="Как проходит пробное занятие?" text1="Пробное занятие — это обычное занятие, на котором вы присутствуете. Вы видите, как работает педагог, как чувствует себя ребёнок, и решаете, подходит ли это вам." />
            <ListItem text="Можно ли попробовать перед покупкой абонемента?" text1="Да, первое занятие будет со скидкой 50%. Это даёт вам возможность понять, нравится ли программа, комфортно ли ребёнку, и только потом принять решение об абонементе." />
          </div>
          <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[560px] relative shrink-0 w-full" data-name="Content">
            <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 text-[#0c0805] text-center w-full" data-name="Content">
              <p className="font-['Nunito:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[36px] tracking-[0.36px] w-full">Как выбрать подходящее направление?</p>
              <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Посмотрите описания программ на сайте или позвоните нам. Мы поможем выбрать то, что подойдёт именно вашему ребёнку, учитывая его интересы и возраст.
              </p>
            </div>
            <div className="content-stretch flex items-center relative shrink-0" data-name="Actions">
              <div className="relative rounded-[6px] shrink-0" data-name="Button">
                <div aria-hidden="true" className="absolute border-[rgba(12,8,5,0.15)] border-b-4 border-l-[1.5px] border-r-[1.5px] border-solid border-t-[1.5px] inset-[-1.5px_-1.5px_-4px_-1.5px] pointer-events-none rounded-[7.5px]" />
                <Text1 text="Остались вопросы?" />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper additionalClassNames="bg-white">
        <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Content">
            <Helper1 text="Приходите познакомиться с нами" text1="Запишитесь на бесплатное пробное занятие и просто почувствуйте атмосферу. Всё остальное решите сами — мы только рады познакомиться" />
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Actions">
              <div className="bg-[#f2a65a] relative rounded-[6px] shrink-0" data-name="Button">
                <div aria-hidden="true" className="absolute border-[#c18448] border-b-4 border-l-[1.5px] border-r-[1.5px] border-solid border-t-[1.5px] inset-[-1.5px_-1.5px_-4px_-1.5px] pointer-events-none rounded-[7.5px]" />
                <div className="flex flex-row items-center justify-center size-full">
                  <Text text="Записаться на пробное" additionalClassNames="justify-center" />
                </div>
              </div>
              <div className="relative rounded-[6px] shrink-0" data-name="Button">
                <div aria-hidden="true" className="absolute border-[rgba(12,8,5,0.15)] border-b-4 border-l-[1.5px] border-r-[1.5px] border-solid border-t-[1.5px] inset-[-1.5px_-1.5px_-4px_-1.5px] pointer-events-none rounded-[7.5px]" />
                <Text1 text="Написать в мессенджер" />
              </div>
            </div>
          </div>
          <PlaceholderImageImage3 />
        </div>
      </Wrapper>
      <Wrapper1 additionalClassNames="bg-white">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[80px] relative w-full">
          <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Content">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px overflow-clip relative" data-name="Column">
                <div className="content-stretch flex items-start relative shrink-0">
                  <Helper />
                </div>
                <div className="content-stretch flex flex-col gap-[24px] items-start leading-[1.6] relative shrink-0 text-[#0c0805] text-[14px] w-full" data-name="Content">
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Content">
                    <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                      Адрес
                    </p>
                    <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                      Ботанический район, рядом с ТЦ «Дирижабль», Екатеринбург
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Content">
                    <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                      Контакты
                    </p>
                    <div className="content-stretch flex flex-col font-['Nunito_Sans:Regular',sans-serif] font-normal items-start relative shrink-0 underline w-full" data-name="Content">
                      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0 w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                        +7 (343) 123-45-67
                      </p>
                      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0 w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                        info@pandaacademy.ru
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Social Links">
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Facebook">
                    <div className="absolute inset-[9.34%_8.33%_7.32%_8.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path d={svgPaths.p2c56c980} fill="var(--fill-0, #0C0805)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                  <SocialLinksHelper>
                    <path clipRule="evenodd" d={svgPaths.p9b0b480} fill="var(--fill-0, #0C0805)" fillRule="evenodd" id="Vector" />
                  </SocialLinksHelper>
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="X">
                    <div className="absolute inset-[17.68%_12.5%_15.66%_12.5%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
                        <path d={svgPaths.pd265900} fill="var(--fill-0, #0C0805)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                  <SocialLinksHelper>
                    <path clipRule="evenodd" d={svgPaths.p56afe80} fill="var(--fill-0, #0C0805)" fillRule="evenodd" id="Vector" />
                  </SocialLinksHelper>
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Youtube">
                    <div className="absolute inset-[20.83%_8.33%_20.78%_8.27%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0141 14.012">
                        <path d={svgPaths.p1fcc3d80} fill="var(--fill-0, #0C0805)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-start max-w-[400px] min-h-px min-w-px overflow-clip relative" data-name="Column">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Link List">
                  <LinkText1 text="О центре" />
                  <LinkText1 text="Программы" />
                  <LinkText1 text="Контакты" />
                  <LinkText1 text="Вопросы" />
                  <LinkText1 text="Отзывы" />
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Link List">
                  <LinkText1 text="Развивающие занятия" />
                  <LinkText1 text="Рисование" />
                  <LinkText1 text="Архитектурное моделирование" />
                  <LinkText1 text="Английский язык" />
                  <LinkText1 text="Настольные игры" />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Credits">
              <div className="h-0 relative shrink-0 w-full" data-name="Divider">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
                    <line id="Divider" stroke="var(--stroke-0, #0C0805)" strokeOpacity="0.15" x2="1280" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex font-['Nunito_Sans:Regular',sans-serif] font-normal items-start justify-between leading-[1.6] relative shrink-0 text-[#0c0805] text-[14px] w-full whitespace-nowrap" data-name="Row">
                <p className="relative shrink-0" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  © 2025 Академия Панды. Все права защищены.
                </p>
                <div className="content-stretch flex gap-[24px] items-start relative shrink-0 underline" data-name="Footer Links">
                  <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    Политика конфиденциальности
                  </p>
                  <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    Условия использования
                  </p>
                  <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    Настройки cookies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper1>
    </div>
  );
}