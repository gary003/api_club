import ip from "ip"

const localIp = ip.address()

const swaggerJson: any = {
  swagger: "2.0",
  host: `${localIp}:${process.env.API_PORT}`,
  basePath: "/api/v1",
  info: {
    title: `${process.env.API_TITLE}`,
    version: `${process.env.API_VERSION}`,
  },
  schemes: ["http"],
  // use for model definition
  definitions: {
    Profile: {
      type: "object",
      properties: {
        username: {
          description: "username of user",
          type: "string",
        },
        email: {
          description: "profile email",
          type: "string",
        },
        description: {
          description: "quick overview of a profile",
          type: "string",
        },
        picture: {
          description: "user's face url link",
          type: "string",
        },
        follow: {
          description: "user's interests in other users",
          type: "string",
        },
      },
      required: ["userId"],
    },
    Media: {
      type: "object",
      properties: {
        title: {
          description: "title of the media",
          type: "string",
        },
        description: {
          description: "quick overview of a profile",
          type: "string",
        },
        picture: {
          description: "user's face url link",
          type: "string",
        },
      },
      required: ["title", "description"],
    },
  },
  paths: {
    "/profile": {
      get: {
        tags: ["profile"],
        summary: "get all profiles",
        description: "all profiles will be retreive from DB",
        responses: {
          "200": {
            description: "Successfuly get all profiles ",
          },
        },
      },
    },
  },
}

export default swaggerJson
