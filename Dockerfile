# TARGET build
FROM node:14-slim AS build

COPY .yarn/cache/ src/.yarn/cache/
COPY .yarn/releases/ src/.yarn/releases/
COPY .yarn/sdks/ src/.yarn/sdks/
# COPY .yarn/patches/ src/.yarn/patches/
# COPY .yarn/plugins/ src/.yarn/plugins/
# COPY .yarn/versions/ src/.yarn/versions/
COPY .pnp.cjs .yarnrc.yml package.json yarn.lock src/

WORKDIR /src

RUN yarn install

COPY . .

RUN yarn build

# TARGET test
FROM build AS test
RUN yarn test:unit

# TARGET integration
FROM build AS integration
RUN yarn test:integration

# TARGET dev
FROM node:14-slim AS dev
RUN apt-get update && apt-get install -y procps
WORKDIR /src

# TARGET
FROM node:14-slim
WORKDIR /src

COPY --from=build /src/build build
COPY --from=build /src/package.json .

CMD [ "yarn", "start" ]
