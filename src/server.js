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
      server.createList("video", 5, {
        name:
          "Fat Burning Cardio Workout - 37 Minute Fitness Blender Cardio Workout at Home",
        durationHours: 0,
        durationMinutes: 37,
        durationSeconds: 9,
        author: "FitnessBlender",
        subscribers: "6.56M",
        likes: 559260,
        dislikes: 14021,
        url: "https://www.youtube.com/embed/fcN37TxBE_s",
        thumbnail:
          "https://i.ytimg.com/an_webp/fcN37TxBE_s/mqdefault_6s.webp?du=3000&sqp=CIrfr4MG&rs=AOn4CLBLl2KvhorfdUWYTY1jqKk5BaQmUA",
      });
      server.db.dump();
    },
  });
  return server;
}
