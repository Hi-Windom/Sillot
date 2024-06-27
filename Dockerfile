ARG NB_USER=jovyan
ARG NB_UID=1000
FROM node:20 as NODE_BUILD
WORKDIR /Hi-Windom/Sillot/
ADD . /Hi-Windom/Sillot/
RUN apt-get update && \
    apt-get install -y jq
RUN cd app && \
packageManager=$(jq -r '.packageManager' package.json) && \
if [ -n "$packageManager" ]; then \
    npm install -g $packageManager; \
else \
    echo "No packageManager field found in package.json"; \
    npm install -g pnpm; \
fi && \
pnpm install --registry=http://registry.npmjs.org/ --silent && \
pnpm run docker:build
RUN apt-get purge -y jq
RUN apt-get autoremove -y
RUN rm -rf /var/lib/apt/lists/*

FROM golang:bullseye as GO_BUILD
WORKDIR /Hi-Windom/Sillot/
COPY --from=NODE_BUILD /Hi-Windom/Sillot/ /Hi-Windom/Sillot/
ENV GO111MODULE=on
ENV CGO_ENABLED=1
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y build-essential && \
    cd kernel && go build --tags fts5 -v -ldflags "-s -w" && \
    mkdir /opt/Sillot/ && \
    rm /Hi-Windom/Sillot/app/appearance/langs/es_ES.json && \
    rm /Hi-Windom/Sillot/app/appearance/langs/fr_FR.json && \
    rm /Hi-Windom/Sillot/app/appearance/langs/ja_JP.json && \
    rm /Hi-Windom/Sillot/app/appearance/langs/zh_CHT.json && \
    mv /Hi-Windom/Sillot/app/appearance/ /opt/Sillot/ && \
    mv /Hi-Windom/Sillot/app/stage/ /opt/Sillot/ && \
    mv /Hi-Windom/Sillot/app/guide/ /opt/Sillot/ && \
    mv /Hi-Windom/Sillot/app/changelogs/ /opt/Sillot/ && \
    mv /Hi-Windom/Sillot/kernel/kernel /opt/Sillot/ && \
    mv /Hi-Windom/Sillot/Docker_entry.sh /opt/Sillot/ && \
    find /opt/Sillot/ -name .git | xargs rm -rf

FROM soltus/jupyter-binder-python:latest
WORKDIR /opt/Sillot/
COPY --from=GO_BUILD /opt/Sillot/ /opt/Sillot/
COPY --from=denoland/deno:bin /deno /usr/local/bin/deno
ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini

USER root
RUN sudo apt-get update && \
    sudo DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends ca-certificates tzdata && \
    sudo rm -rf /var/lib/apt/lists/*

RUN sudo chown -R root:root /opt/Sillot/
RUN sudo chmod +x /opt/Sillot/kernel /usr/local/bin/deno /tini /opt/Sillot/Docker_entry.sh

ENV TZ=Asia/Shanghai
ENV RUN_IN_CONTAINER=true
EXPOSE 58131
LABEL maintainer="Soltus<694357845@qq.com>"

# 默认值，用户应当修改
ENV SILLOT_ARGS_KERNEL="--accessAuthCode 58131"
ENV SILLOT_ARGS_JUPYTER="--port=8888 --ip=* --no-browser --allow-root"
ENTRYPOINT [ "/tini", "--", "/opt/Sillot/Docker_entry.sh" ]
