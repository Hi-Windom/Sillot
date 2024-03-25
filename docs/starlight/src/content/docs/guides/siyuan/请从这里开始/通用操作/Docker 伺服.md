---
title: Docker 伺服
---
## 概述

在服务器上伺服思源最简单的方案是通过 Docker 部署。

* 镜像名称 b3log/siyuan
* [镜像地址](https://hub.docker.com/r/b3log/siyuan)

## 文件结构

整体程序位于 /opt/siyuan/ 下，基本上就是 Electron 安装包 resources 文件夹下的结构：

* appearance：图标、主题、多语言
* guide：帮助文档
* stage：界面和静态资源
* kernel：内核程序

## 启动入口

构建 Docker 镜像时设置了入口：ENTRYPOINT [ "/opt/siyuan/kernel" ]，使用 docker run b3log/siyuan 并带参即可启动：

* --workspace 指定工作空间文件夹路径，在宿主机上通过 -v 挂载到容器中

更多的参数可参考这里。下面是一条启动命令示例：docker run -d -v workspace_dir_host:workspace_dir_container -p 6806:6806 b3log/siyuan --workspace=workspace_dir_container

* workspace_dir_host：宿主机上的工作空间文件夹路径
* workspace_dir_container：容器内工作空间文件夹路径，和后面 --workspace 指定成一样的

为了简化，建议将 workspace 文件夹路径在宿主机和容器上配置为一致的，比如将 workspace_dir_host 和 workspace_dir_container 都配置为 /siyuan/workspace，对应的启动命令示例：docker run -d -v /siyuan/workspace:/siyuan/workspace -p 6806:6806 -u 1000:1000 b3log/siyuan --workspace=/siyuan/workspace/。

## 用户权限

镜像中是使用默认创建的普通用户 siyuan（uid 1000/gid 1000）来启动内核进程的，所以在宿主机创建工作空间文件夹时请注意设置该文件夹所属用户组：chown -R 1000:1000 /siyuan/workspace，在启动容器时需要带参数 -u 1000:1000。

## 隐藏端口

使用 NGINX 反向代理可以隐藏 6806 端口，请注意：

* 配置 WebSocket 反代 /ws

## 注意

* 请务必确认挂载卷的正确性，否则容器删除后数据会丢失
* 不要使用 URL 重写进行重定向，否则鉴权可能会有问题，建议配置反向代理

## 限制

* 不支持桌面端和移动端应用连接，仅支持在浏览器上使用
* 不支持导出 PDF、HTML 和 Word 格式
* 不支持导入 Markdown 文件
