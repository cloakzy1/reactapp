export interface Props {
  FirstName: String;
  LastName: string;
  Age: Number;
  changePlus: (
    set: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
  ) => JSX.Element | void;
  changeMinus: (
    set: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
  ) => JSX.Element | void;
}

export interface InsideObject {
  height: string;
  url: string;
  size: String;
  widht?: String;
  webp?: URL;
  web_size?: string;
  frame?: String;
  hash?: String;
  mp4?: URL;
  mp4_size?: URL;
}
export interface TypeDefine {
  downsized_large: InsideObject;
  fixed_height_small_still: InsideObject;
  original: InsideObject;
  fixed_height_downsampled: InsideObject;
  downsized_still: InsideObject;
  fixed_height_still: InsideObject;
  downsized_medium: InsideObject;
  downsized: InsideObject;
  preview_webp: InsideObject;
  original_mp4: InsideObject;
  fixed_height_small: InsideObject;
  fixed_height: InsideObject;
  downsized_small: InsideObject;
  preview: InsideObject;
  fixed_width_downsampled: InsideObject;
  fixed_width_small_still: InsideObject;
  fixed_width_small: InsideObject;
  original_still: InsideObject;
  fixed_width_still: InsideObject;
  looping: InsideObject;
  fixed_width: InsideObject;
  preview_gif: InsideObject;
  '480w_still': InsideObject;
}
