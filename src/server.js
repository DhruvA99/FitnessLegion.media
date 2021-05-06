import { createServer, Model, Serializer } from "miragejs";
// import Manager from "./customIdentityManager";

let customSerializer = Serializer.extend({
  keyForAttribute(attr) {
    return attr;
  },
});

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,
    // identityManagers: {
    //   video: Manager,
    // },
    serializers: {
      likedVideo: customSerializer,
    },
    models: {
      video: Model,
      likedVideo: Model,
      playlists: Model,
    },
    routes() {
      this.namespace = "api";
      this.timing = 2000;
      this.get("/videos", (schema, request) => {
        return schema.videos.all();
      });
      this.get("/videos/:id", (schema, request) => {
        let id = request.params.id;
        return schema.videos.find(id);
      });
      this.get("/videos/category", (schema, request) => {
        let category = request.queryParams.category;
        return schema.videos.where({ category: category });
      });
      this.get("/likedVideos", (schema, request) => {
        // let auth=request.queryParams.auth;
        return schema.likedVideos.all();
      });
      this.post("/likedVideos", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.likedVideos.create(attrs);
      });
      this.delete("/likedVideos/:id", (schema, request) => {
        let id = request.params.id;
        return schema.likedVideos.find(id).destroy();
      });
      this.get("/playlists", (schema, request) => {
        return schema.playlists.all();
      });
      this.post("/playlists", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.playlists.create(attrs);
      });
      this.delete("/playlists/:id", (schema, request) => {
        let id = request.params.id;
        return schema.playlists.find(id).destroy();
      });
    },
    seeds(server) {
      server.createList("video", 9, {
        name:
          "Fat Burning Cardio Workout - 37 Minute Fitness Blender Cardio Workout at Home",
        durationHours: 0,
        durationMinutes: 37,
        durationSeconds: 9,
        author: "FitnessBlender",
        category: "cardio",
        subscribers: "6.56M",
        likes: 559260,
        views: 67883914,
        videoID: "RKDn_Ujzt6",
        channelImageURL:
          "https://yt3.ggpht.com/ytc/AAUvwngbEMFE2Kc5Icvv4iKHizKIC24R7F7IcvB_NB04fA8=s68-c-k-c0x00ffffff-no-rj",
        dislikes: 14021,
        url: "https://www.youtube.com/embed/fcN37TxBE_s",
        thumbnail:
          "https://i.ytimg.com/vi/fcN37TxBE_s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUBu29rMfHn5D8gMzArJaEoe1Y9A",
        animatedThumbnail:
          "https://i.ytimg.com/vi/fcN37TxBE_s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUBu29rMfHn5D8gMzArJaEoe1Y9A",
      });

      server.db.dump();
    },
  });
  return server;
}
