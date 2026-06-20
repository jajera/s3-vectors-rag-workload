# s3-vectors-rag-workload

Documentation for [terraform-aws-s3-vectors-rag-demo](https://github.com/jajera/terraform-aws-s3-vectors-rag-demo) — learn Amazon S3 Vectors by example through a cloud-native RAG application with Terraform, Lambda, and Bedrock.

## What this is

An [Astro Starlight](https://starlight.astro.build/) site with concept explanations and hands-on walkthroughs covering:

| Section         | Content                                                        |
| --------------- | -------------------------------------------------------------- |
| Overview        | Architecture, what S3 Vectors is, what Terraform manages       |
| Prerequisites   | Tools, Bedrock model access, region selection                  |
| S3 Vectors      | Concepts, Terraform resources, API operations, IAM permissions |
| RAG Pipeline    | Ingest flow, query flow, embedding strategy, scoring           |
| Deployment      | terraform apply, Cognito users, web UI                         |
| Teardown        | Destroy all resources                                          |
| Troubleshooting | Bedrock errors, common issues                                  |
| Reference       | Repo layout, outputs, external links                           |

## Quick start

Use Node 22 (see .nvmrc).

    npm install
    npm run dev

Open http://localhost:4321/s3-vectors-rag-workload/

    npm run build   # production build (draft pages excluded)
    npm run preview # serve the build locally

## Deploy

GitHub Pages on push to main via .github/workflows/deploy.yml.

1. Repo Settings - Pages: Source = GitHub Actions
2. astro.config.mjs: site and base must match the Pages URL

## Content source

The walkthrough content is based on [terraform-aws-s3-vectors-rag-demo](https://github.com/jajera/terraform-aws-s3-vectors-rag-demo).

## License

[MIT](LICENSE)
