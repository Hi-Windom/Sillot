// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export abstract class SConst {
  public static readonly Themes = {
    BuiltinThemeLight: "daylight", // 思源默认主题
    BuiltinThemeDark: "midnight", // 思源默认主题
    DefaultThemeLight: "lnco",
    DefaultThemeDark: "lnco",
  };

  // 渲染进程调主进程
  // Sillot extend
  public static readonly SILLOT_SHOW: string = "sillot-show";
  public static readonly SISI_SHOW: string = "sisi-show";
  public static readonly SILLOT_OPENURL: string = "sillot-openurl";
  public static readonly SISI_OPENURL: string = "sisi-openurl";
}
