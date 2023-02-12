import * as monaco from 'monaco-editor';
import * as BirdsofParadise from './monacoThemes/Birds of Paradise.json'
import * as Blackboard from './monacoThemes/Blackboard.json'
import * as Cobalt from './monacoThemes/Cobalt.json'
import * as Cobalt2 from './monacoThemes/Cobalt2.json'
import * as Dracula from './monacoThemes/Dracula.json'
import * as IdleFingers from './monacoThemes/IdleFingers.json'
import * as IPlastic from './monacoThemes/IPlastic.json'
import * as Katzenmilch from './monacoThemes/Katzenmilch.json'
import * as Monokai from './monacoThemes/Monokai.json'
import * as NightOwl from './monacoThemes/Night Owl.json'
import * as Solarizedlight from './monacoThemes/Solarized-light.json'
import * as Sunburst from './monacoThemes/Sunburst.json'
import * as TomorrowNightEighties from './monacoThemes/Tomorrow-Night-Eighties.json'
import * as Zenburnesque from './monacoThemes/Zenburnesque.json'

export function defineMonacoThemes() {
  monaco.editor.defineTheme("Birds-of-Paradise", BirdsofParadise as monaco.editor.IStandaloneThemeData);
  monaco.editor.defineTheme("Blackboard", Blackboard as monaco.editor.IStandaloneThemeData);
  monaco.editor.defineTheme("Cobalt", Cobalt as monaco.editor.IStandaloneThemeData);
  monaco.editor.defineTheme("Cobalt2", Cobalt2 as monaco.editor.IStandaloneThemeData);
  monaco.editor.defineTheme("Dracula", Dracula as monaco.editor.IStandaloneThemeData);
  monaco.editor.defineTheme("IdleFingers", IdleFingers as monaco.editor.IStandaloneThemeData);
  monaco.editor.defineTheme("IPlastic", IPlastic as monaco.editor.IStandaloneThemeData);
  monaco.editor.defineTheme("Katzenmilch", Katzenmilch as monaco.editor.IStandaloneThemeData);
  monaco.editor.defineTheme("Monokai", Monokai as monaco.editor.IStandaloneThemeData);
  monaco.editor.defineTheme("Night-Owl", NightOwl as monaco.editor.IStandaloneThemeData);
  monaco.editor.defineTheme("Solarized-light", Solarizedlight as monaco.editor.IStandaloneThemeData);
  monaco.editor.defineTheme("Sunburst", Sunburst as monaco.editor.IStandaloneThemeData);
  monaco.editor.defineTheme("Tomorrow-Night-Eighties", TomorrowNightEighties as monaco.editor.IStandaloneThemeData);
  monaco.editor.defineTheme("Zenburnesque", Zenburnesque as monaco.editor.IStandaloneThemeData);
}