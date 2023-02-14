export abstract class SConst {
  public static readonly Themes = {
    BuiltinThemeLight: "内置主题 daylight", // 思源默认主题
    BuiltinThemeDark: "内置主题 midnight", // 思源默认主题
    DefaultThemeLight: "默认主题 goodday", // 汐洛默认主题
    DefaultThemeDark: "默认主题 goodnight", //汐洛默认主题
    lnco: "Sofill+",
  };

  // 渲染进程调主进程
  // Sillot extend
  public static readonly SILLOT_SHOW: string = "sillot-show";
  public static readonly SISI_SHOW: string = "sisi-show";
  public static readonly SILLOT_OPENURL: string = "sillot-openurl";
  public static readonly SISI_OPENURL: string = "sisi-openurl";
}
