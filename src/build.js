const fastify = require("fastify");
const axios = require("axios");
const list = require("../utils/list");
const MiniLineChart = require("../utils/generatePreviewLine");
const PieChart = require("../utils/generatePreviewPie");

function build(opts) {
  const app = fastify(opts);

  app.get("/", async (request, reply) => {
    return { working: true };
  });

  app.get("/chart_preview/:id", async function (request, reply) {
    const { id } = request.params;
    const chart = id.split(".")[0];
    reply.header("Content-Type", "image/svg+xml");
    try {
      if (list.includes(chart.toLowerCase())) {
        let response;
        if (chart.toLowerCase() === "pools") {
          response = await axios.get(
            "https://api.blockchain.info/pools?timespan=4days&cors=true"
          );
        } else
          response = await axios.get(
            `https://api.blockchain.info/charts/${chart}?timespan=1year&sampled=true&metadata=false&daysAverageString=7d&cors=true&format=json`
          );
        if (response?.data)
          return chart === "pools"
            ? PieChart(response.data)
            : MiniLineChart(response.data);
        else return { error: true };
      } else return { error: true };
    } catch (error) {
      return { error: true };
    }
  });

  app.get(
    "/hello",
    {
      query: {
        name: {
          type: "string",
        },
      },
    },
    async (request, reply) => {
      const { name } = request.query;
      return { hello: name || "no name!" };
    }
  );

  return app;
}

module.exports = {
  build,
};
