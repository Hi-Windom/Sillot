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

FROM golang:alpine as GO_BUILD
WORKDIR /Hi-Windom/Sillot/
COPY --from=NODE_BUILD /Hi-Windom/Sillot/ /Hi-Windom/Sillot/
ENV GO111MODULE=on
ENV CGO_ENABLED=1
RUN apk add --no-cache gcc musl-dev && \
    cd kernel && go build --tags fts5 -v -ldflags "-s -w -X github.com/Hi-Windom/Sillot/kernel/util.Mode=prod" && \
    mkdir /opt/Sillot/ && \
    rm /Hi-Windom/Sillot/app/appearance/langs/zh_CHT.json && \
    rm /Hi-Windom/Sillot/app/appearance/langs/fr_FR.json && \
    rm /Hi-Windom/Sillot/app/appearance/langs/es_ES.json && \
    mv /Hi-Windom/Sillot/app/appearance/ /opt/Sillot/ && \
    mv /Hi-Windom/Sillot/app/stage/ /opt/Sillot/ && \
    mv /Hi-Windom/Sillot/app/guide/ /opt/Sillot/ && \
    mv /Hi-Windom/Sillot/app/changelogs/ /opt/Sillot/ && \
    mv /Hi-Windom/Sillot/kernel/kernel /opt/Sillot/ && \
    find /opt/Sillot/ -name .git | xargs rm -rf

FROM alpine:latest
COPY --from=denoland/deno:bin-1.44.0 /deno /usr/local/bin/deno
LABEL maintainer="Soltus<694357845@qq.ocm>"

WORKDIR /opt/Sillot/
COPY --from=GO_BUILD /opt/Sillot/ /opt/Sillot/
RUN addgroup --gid 1000 sillot && adduser --uid 1000 --ingroup sillot --disabled-password sillot && apk add --no-cache ca-certificates tzdata && chown -R sillot:sillot /opt/Sillot/

ENV TZ=Asia/Shanghai
ENV RUN_IN_CONTAINER=true
EXPOSE 58131

USER sillot
ENTRYPOINT [ "/opt/Sillot/kernel" ]
