import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { config } from 'dotenv';
import { writeFileSync } from 'fs';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');



const app = express();
const angularApp = new AngularNodeAppEngine();
const result = config();


if (result.error) {
  throw new Error(`Error loading .env file: ${result.error}`);
}


// Construct the environment object
const envEntries = result.parsed || {};
const environment = {
    apiUrl: envEntries["API_URL"] || '',
    production: envEntries["PRODUCTION"] === 'true'
};

// // Generate the environment.ts file
// const environmentFileContent = `
// export const environment = ${JSON.stringify(environment, null, 2)};
// `;

// Generate the environment.ts file content
const environmentFileContent = `export const environment = {
  apiUrl: '${environment.apiUrl}',
  production: ${environment.production}
};
`;

// Path to the environment.ts file
const productionEnvironmentFilePath = resolve(
  serverDistFolder,
  '../../../libs/app-web/core/shared/configs/environments/src/lib/environment.prod.ts'
);

const developmentEnvironmentFilePath = resolve(
  serverDistFolder,
  '../../../libs/app-web/core/shared/configs/environments/src/lib/environment.dev.ts'
);

function updateConfigFile(){

  console.log("*************************")
  console.log(environmentFileContent)
  console.log("*************************")

  try {
    if(environment.production){
      writeFileSync(productionEnvironmentFilePath, environmentFileContent, { encoding: 'utf8' });
      console.log(`Environment file updated at: ${productionEnvironmentFilePath}`);
    }else{
      writeFileSync(developmentEnvironmentFilePath, environmentFileContent, { encoding: 'utf8' });
      console.log(`Environment file updated at: ${developmentEnvironmentFilePath}`);
    }
} catch (error) {
    console.error(`Failed to update environment file: ${error}`);
}

}

updateConfigFile();

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/**', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  })
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use('/**', (req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next()
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * The request handler used by the Angular CLI (dev-server and during build).
 */
export const reqHandler = createNodeRequestHandler(app);


