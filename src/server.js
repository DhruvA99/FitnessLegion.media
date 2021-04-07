import { createServer, Model } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,
    models: {
      video: Model,
    },
    routes() {
      this.namespace = "api";
      this.timing = 2000;
      this.get("/videos", (schema, request) => {
        return schema.videos.all();
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
        subscribers: "6.56M",
        likes: 559260,
        channelImageURL:
          "https://yt3.ggpht.com/ytc/AAUvwngbEMFE2Kc5Icvv4iKHizKIC24R7F7IcvB_NB04fA8=s68-c-k-c0x00ffffff-no-rj",
        dislikes: 14021,
        url: "https://www.youtube.com/embed/fcN37TxBE_s",
        thumbnail:
          "https://i.ytimg.com/vi/fcN37TxBE_s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUBu29rMfHn5D8gMzArJaEoe1Y9A",
        animatedThumbnail:
          "https://i.ytimg.com/an_webp/fcN37TxBE_s/mqdefault_6s.webp?du=3000&sqp=CL3QtYMG&rs=AOn4CLBevafWcPw5VzpivojRRpmldcZhjw",
      });
      server.db.dump();
    },
  });
  return server;
}
