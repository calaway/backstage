/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export const basicAppConfig = `app:
  title: Scaffolded Backstage App
  baseUrl: http://localhost:3000

organization:
  name: My Company

backend:
  baseUrl: http://localhost:7000
  listen:
    port: 7000
  csp:
    connect-src: ["'self'", 'http:', 'https:']
    # Content-Security-Policy directives follow the Helmet format: https://helmetjs.github.io/#reference
    # Default Helmet Content-Security-Policy values can be removed by setting the key to false
  cors:
    origin: http://localhost:3000
    methods: [GET, POST, PUT, DELETE]
    credentials: true
  database:
    client: sqlite3
    connection: ':memory:'
  cache:
    store: memory
  # workingDirectory: /tmp # Use this to configure a working directory for the scaffolder, defaults to the OS temp-dir

integrations:
  github:
    - host: github.com
      token: \${GITHUB_TOKEN}
    ### Example for how to add your GitHub Enterprise instance using the API:
    # - host: ghe.example.net
    #   apiBaseUrl: https://ghe.example.net/api/v3
    #   token: \${GHE_TOKEN}

proxy:
  '/test':
    target: 'https://example.com'
    changeOrigin: true

# Reference documentation http://backstage.io/docs/features/techdocs/configuration
# Note: After experimenting with basic setup, use CI/CD to generate docs
# and an external cloud storage when deploying TechDocs for production use-case.
# https://backstage.io/docs/features/techdocs/how-to-guides#how-to-migrate-from-techdocs-basic-to-recommended-deployment-approach
techdocs:
  builder: 'local' # Alternatives - 'external'
  generators:
    techdocs: 'docker' # Alternatives - 'local'
  publisher:
    type: 'local' # Alternatives - 'googleGcs' or 'awsS3'. Read documentation for using alternatives.

auth:
  # see https://backstage.io/docs/auth/ to learn about auth providers
  providers: {}

scaffolder:
  github:
    token: \${GITHUB_TOKEN}
    visibility: public # or 'internal' or 'private'

catalog:
  rules:
    - allow: [Component, System, API, Group, User, Resource, Location]
  locations:
    # Backstage example components
    - type: url
      target: https://github.com/backstage/backstage/blob/master/packages/catalog-model/examples/all-components.yaml

    # Backstage example systems
    - type: url
      target: https://github.com/backstage/backstage/blob/master/packages/catalog-model/examples/all-systems.yaml

    # Backstage example APIs
    - type: url
      target: https://github.com/backstage/backstage/blob/master/packages/catalog-model/examples/all-apis.yaml

    # Backstage example resources
    - type: url
      target: https://github.com/backstage/backstage/blob/master/packages/catalog-model/examples/all-resources.yaml

    # Backstage example organization groups
    - type: url
      target: https://github.com/backstage/backstage/blob/master/packages/catalog-model/examples/acme/org.yaml

    # Backstage example templates
    - type: url
      target: https://github.com/backstage/software-templates/blob/main/scaffolder-templates/react-ssr-template/template.yaml
      rules:
        - allow: [Template]
    - type: url
      target: https://github.com/backstage/software-templates/blob/main/scaffolder-templates/springboot-grpc-template/template.yaml
      rules:
        - allow: [Template]
    - type: url
      target: https://github.com/spotify/cookiecutter-golang/blob/master/template.yaml
      rules:
        - allow: [Template]
    - type: url
      target: https://github.com/backstage/software-templates/blob/main/scaffolder-templates/docs-template/template.yaml
      rules:
        - allow: [Template]`;