// @ts-nocheck
import { createServer, Model } from "miragejs";

export function startAPI() {
  createServer({
    models: {
      forexrate: Model,
    },
    routes() {
      this.namespace = "api";

      this.get("/forexrates", (schema, request) => {
        return schema.forexrates.all();
      });
      this.get("/forexrate/:base", (schema, request) => {
        return [
          schema.forexrates.findBy({
            base: request.params.base,
          }).attrs,
        ];
      });
    },
    seeds(server) {
      server.db.loadData({
        forexrates: [
          {
            base: "USD",
            rates: {
              USD: 1.0,
              EUR: 0.9279,
              GBP: 0.7951,
              SGD: 1.3386,
            },
          },
          {
            base: "EUR",
            rates: {
              EUR: 1.0,
              USD: 1.0777,
              GBP: 0.8569,
              SGD: 1.4426,
            },
          },
          {
            base: "GBP",
            rates: {
              GBP: 1.0,
              USD: 1.2577,
              EUR: 1.167,
              SGD: 1.6835,
            },
          },
          {
            base: "SGD",
            rates: {
              SGD: 1.0,
              USD: 0.7471,
              EUR: 0.6932,
              GBP: 0.594,
            },
          },
        ],
      });
    },
  });
}
