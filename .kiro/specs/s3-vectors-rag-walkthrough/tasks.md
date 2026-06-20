# Implementation Plan: S3 Vectors RAG Walkthrough Site

## Overview

This plan implements an Astro Starlight documentation site that teaches Amazon S3 Vectors by example. The site documents terraform-aws-s3-vectors-rag-demo. The scaffold is already created — remaining work is completing draft pages with full content from the source repo.

## Tasks

- [x] 1. Set up site infrastructure
  - [x] 1.1 Create Astro Starlight project with package.json, astro.config.mjs, tsconfig.json
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

  - [x] 1.2 Create Tooltip component and glossary.ts
    - _Requirements: 1.6, 1.7_

  - [x] 1.3 Create GitHub Actions deploy workflow
    - _Requirements: 1.2_

  - [x] 1.4 Create .kiro steering files
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

- [x] 2. Create published content pages
  - [x] 2.1 Create index.mdx splash page
    - _Requirements: 2.1_

  - [x] 2.2 Create overview.mdx with architecture and S3 Vectors intro
    - _Requirements: 2.1, 3.1_

  - [x] 2.3 Create prerequisites/index.mdx with tools and accounts
    - _Requirements: 5.1_

  - [x] 2.4 Create prerequisites/bedrock-access.mdx with model enablement steps
    - _Requirements: 5.1_

  - [x] 2.5 Create s3-vectors/index.mdx with core concepts
    - _Requirements: 3.1_

  - [x] 2.6 Create s3-vectors/terraform-resources.mdx with HCL examples
    - _Requirements: 3.2_

  - [x] 2.7 Create s3-vectors/vector-operations.mdx with Python API examples
    - _Requirements: 3.3_

  - [x] 2.8 Create s3-vectors/iam-permissions.mdx with policy examples
    - _Requirements: 3.4_

- [x] 3. Complete RAG pipeline draft pages
  - [x] 3.1 Flesh out rag-pipeline/index.mdx with full RAG overview
    - Document what RAG is, why it beats pure LLM, pipeline phases
    - Include architecture diagram for the pipeline specifically
    - _Requirements: 4.1_

  - [x] 3.2 Flesh out rag-pipeline/ingest.mdx with full ingest documentation
    - Document trigger sources (EventBridge, API, bootstrap)
    - Step-by-step flow: RSS fetch, HTML strip, embed, PutVectors
    - Include code from rag/fetch.py and rag/ingest.py
    - _Requirements: 4.1_

  - [x] 3.3 Flesh out rag-pipeline/query.mdx with full query documentation
    - Document adaptive top-k, over-fetch, rerank, context building, LLM generation
    - Include code from rag/query.py
    - Trace a complete request lifecycle
    - _Requirements: 4.2_

  - [x] 3.4 Flesh out rag-pipeline/embeddings.mdx with embedding strategy
    - Document Titan V2 model, document preparation, truncation, single-chunk rationale
    - Include code showing \_bedrock_embed function
    - _Requirements: 4.3_

  - [x] 3.5 Flesh out rag-pipeline/scoring.mdx with scoring details
    - Document 0.8 similarity + 0.2 recency formula
    - Show recency decay examples (today, 7 days, 30 days, 90 days)
    - Explain over-fetch and rerank rationale
    - _Requirements: 4.4_

- [x] 4. Complete deployment draft pages
  - [x] 4.1 Flesh out deployment/index.mdx with what happens during deploy
    - Timeline of terraform apply (3-5 min)
    - What gets created in what order
    - _Requirements: 5.2_

  - [x] 4.2 Flesh out deployment/terraform-apply.mdx with step-by-step
    - Configure tfvars, init, apply, verify outputs
    - _Requirements: 5.2_

  - [x] 4.3 Flesh out deployment/cognito-users.mdx with user management
    - Auto-created admin, manual creation CLI commands, groups
    - _Requirements: 5.3_

  - [x] 4.4 Flesh out deployment/web-ui.mdx with Amplify details
    - Config injection, deploy script, redeployment
    - _Requirements: 5.4_

- [x] 5. Complete remaining draft pages
  - [x] 5.1 Flesh out teardown.mdx
    - terraform destroy, force_destroy behavior, resource list
    - _Requirements: 5.5_

  - [x] 5.2 Flesh out troubleshooting/index.mdx with quick checks
    - Decision tree for common problems
    - _Requirements: 5.1_

  - [x] 5.3 Flesh out troubleshooting/bedrock-errors.mdx
    - AccessDenied, throttling, validation errors with solutions
    - _Requirements: 5.1_

  - [x] 5.4 Flesh out troubleshooting/common-issues.mdx
    - Bootstrap timeout, empty results, CORS errors
    - _Requirements: 5.1_

  - [x] 5.5 Flesh out reference.mdx
    - Repo layout, all terraform outputs, external links
    - _Requirements: 2.1_

- [x] 6. Publish draft pages
  - [x] 6.1 Remove draft:true from all completed pages
    - _Requirements: 7.2, 7.3_

  - [x] 6.2 Update astro.config.mjs sidebar to include all published slugs
    - _Requirements: 7.3, 7.4_

  - [x] 6.3 Verify npm run build succeeds with all pages published
    - _Requirements: 7.4_

## Notes

- Content source: ~/workspace/jajera/terraform-aws-s3-vectors-rag-demo (and docs/WALKTHROUGH.md)
- Pattern reference: ~/workspace/jajera/aws-gcp-interconnect-walkthrough
- All code examples must come from the source repo, not be invented
- HTML tables only in MDX (never markdown pipe tables)
- Use Tooltip on first occurrence of glossary terms per section
- Site deploys automatically on push to main via GitHub Actions

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "1.2", "1.3", "1.4"] },
    { "id": 1, "tasks": ["2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8"] },
    { "id": 2, "tasks": ["3.1", "3.2", "3.3", "3.4", "3.5"] },
    { "id": 3, "tasks": ["4.1", "4.2", "4.3", "4.4"] },
    { "id": 4, "tasks": ["5.1", "5.2", "5.3", "5.4", "5.5"] },
    { "id": 5, "tasks": ["6.1", "6.2", "6.3"] }
  ]
}
```
