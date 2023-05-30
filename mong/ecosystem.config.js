module.exports = {
     apps: [
          {
               name: "Backend-model",
               script: "App.js",
               watch: true,
               ignore_watch: ["logs/*", "dump.rdb"],
               output: "logs/pm2/out.log",
               error: "logs/pm2/error.log",
               log: "logs/pm2/combined.outerr.log",
               env_local: {
                    NODE_ENV: "local",
               },
               env_demo: {
                    NODE_ENV: "demo",
               },
               env_prod: {
                    NODE_ENV: "prod",
               }
          },
     ],
};
