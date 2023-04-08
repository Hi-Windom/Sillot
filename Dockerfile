FROM node:18 as NODE_BUILD
WORKDIR /go/src/github.com/Hi-Windom/Sillot/
ADD . /go/src/github.com/Hi-Windom/Sillot/
RUN cd app && npm install -g pnpm && pnpm install --registry=http://registry.npmjs.org/ --silent && pnpm run docker:build

FROM golang:alpine as GO_BUILD
WORKDIR /go/src/github.com/Hi-Windom/Sillot/
COPY --from=NODE_BUILD /go/src/github.com/Hi-Windom/Sillot/ /go/src/github.com/Hi-Windom/Sillot/
ENV GO111MODULE=on
ENV CGO_ENABLED=1
RUN apk add --no-cache gcc musl-dev git && \
    cd kernel && go build --tags fts5 -v -ldflags "-s -w -X github.com/Hi-Windom/Sillot/kernel/util.Mode=prod" && \
    mkdir /opt/Sillot/ && \
    mv /go/src/github.com/Hi-Windom/Sillot/app/appearance/ /opt/Sillot/ && \
    mv /go/src/github.com/Hi-Windom/Sillot/app/stage/ /opt/Sillot/ && \
    mv /go/src/github.com/Hi-Windom/Sillot/app/guide/ /opt/Sillot/ && \
    mv /go/src/github.com/Hi-Windom/Sillot/app/changelogs/ /opt/siyuan/ && \
    mv /go/src/github.com/Hi-Windom/Sillot/kernel/kernel /opt/Sillot/ && \
    find /opt/Sillot/ -name .git | xargs rm -rf

FROM alpine:latest
LABEL maintainer="Liang Ding<845765@qq.com> Soltus<694357845@qq.ocm>"

WORKDIR /opt/Sillot/
COPY --from=GO_BUILD /opt/Sillot/ /opt/Sillot/
RUN addgroup --gid 1000 sillot && adduser --uid 1000 --ingroup sillot --disabled-password sillot && apk add --no-cache ca-certificates tzdata && chown -R sillot:sillot /opt/Sillot/

ENV TZ=Asia/Shanghai
ENV RUN_IN_CONTAINER=true
EXPOSE 58131

USER sillot
ENTRYPOINT [ "/opt/Sillot/kernel" ]
