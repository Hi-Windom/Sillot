## extensions.json

`extensions.json` 文件用于在工作区级别推荐所需的 VSCode 扩展（插件）。这些推荐扩展会在打开工作区时显示给用户，以便他们轻松地安装和管理项目特定的工具。

## launch.json

`launch.json` 文件是工作区的调试配置文件，它定义了如何启动和调试项目。通过配置不同的启动配置，开发者可以设置程序参数、环境变量、调试器类型等，以适应不同的调试场景和需求。

## settings.json

`settings.json` 文件允许在工作区级别自定义 VSCode 编辑器的行为。这些设置可以覆盖用户级别的默认设置，允许每个项目根据特定的需求和偏好进行配置，例如代码格式化规则、编辑器选项、终端配置等。

## Sillot.code-profile

`Sillot.code-profile` 是一个特定于汐洛的配置文件，它包含了用户的设置、键盘快捷方式、用户任务和 UI 状态等个性化配置。这个文件不应用于管理扩展（插件），而是应该通过工作区中各个虚拟项目下的 `extensions.json` 文件来统一配置扩展建议。

## Sillot.code-workspace

`Sillot.code-workspace` 文件是汐洛工作区的配置文件，它用于定义工作区范围的结构和设置。这包括对工作区内包含的虚拟项目的引用，以及适用于整个工作区的通用设置。通过工作区文件，可以创建一个多项目环境，并在不同项目之间共享一些共同的配置，同时保持项目特定的设置分离。
