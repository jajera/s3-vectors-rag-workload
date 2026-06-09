# Requirements Document

## Introduction

This document defines the requirements for an Astro Starlight documentation site that teaches Amazon S3 Vectors by example. The site documents the terraform-aws-s3-vectors-rag-demo project — a cloud-native RAG application using S3 Vectors, Bedrock, Lambda, API Gateway, Cognito, and Amplify. The walkthrough covers S3 Vectors concepts, Terraform provisioning, vector operations, the RAG pipeline, deployment, and troubleshooting.

## Glossary

- **Starlight_Site**: The Astro Starlight documentation website deployed to GitHub Pages
- **Content_Page**: An MDX file in src/content/docs/ that becomes a page on the site
- **Published_Page**: A content page without draft:true that appears in production builds
- **Draft_Page**: A content page with draft:true that is visible in dev but excluded from builds
- **Tooltip_Component**: A custom Astro component that shows glossary definitions on hover
- **Glossary_File**: src/data/glossary.ts containing term definitions used by tooltips
- **Sidebar**: The navigation structure defined in astro.config.mjs
- **Source_Repo**: terraform-aws-s3-vectors-rag-demo — the implementation this site documents

## Requirements

### Requirement 1: Site Infrastructure

**User Story:** As a developer, I want a working Astro Starlight site with GitHub Pages deployment, so that the documentation is publicly accessible.

#### Acceptance Criteria

1. THE Starlight_Site SHALL use Astro with @astrojs/starlight and starlight-theme-vintage
2. THE Starlight_Site SHALL deploy to GitHub Pages via GitHub Actions on push to main
3. THE Starlight_Site SHALL use base path /s3-vectors-rag-workload and site https://jajera.github.io
4. THE Starlight_Site SHALL include unplugin-icons for mdi and simple-icons icon sets
5. THE Starlight_Site SHALL use Node 22 as specified in .nvmrc
6. THE Starlight_Site SHALL include Tooltip component with glossary-powered hover definitions
7. THE Starlight_Site SHALL include a glossary.ts with all S3 Vectors and RAG domain terms

### Requirement 2: Content Structure

**User Story:** As a reader, I want a logical navigation structure that progresses from concepts to hands-on deployment, so that I can learn S3 Vectors incrementally.

#### Acceptance Criteria

1. THE Sidebar SHALL organize pages into sections: Introduction, Overview, Prerequisites, S3 Vectors, RAG Pipeline, Deployment, Teardown, Troubleshooting, Reference
2. THE S3 Vectors section SHALL contain pages for: concepts overview, Terraform resources, vector operations (API), IAM permissions
3. THE RAG Pipeline section SHALL contain pages for: pipeline overview, ingest flow, query flow, embedding strategy, similarity scoring
4. THE Deployment section SHALL contain pages for: overview, terraform apply, Cognito users, web UI
5. THE Troubleshooting section SHALL contain pages for: overview, Bedrock errors, common issues
6. EACH Content_Page SHALL have frontmatter with title and description

### Requirement 3: S3 Vectors Content

**User Story:** As a reader, I want comprehensive documentation of S3 Vectors concepts and usage, so that I understand what it is and how to use it.

#### Acceptance Criteria

1. THE S3 Vectors concepts page SHALL explain vector buckets, vector indexes, dimensions, distance metrics, and data types
2. THE Terraform resources page SHALL show complete HCL for aws_s3vectors_vector_bucket and aws_s3vectors_index with explanations
3. THE vector operations page SHALL document PutVectors, QueryVectors, GetVectors, DeleteVectors with Python boto3 code examples
4. THE IAM permissions page SHALL show the s3vectors: action prefix, resource scoping pattern, and per-function least privilege examples
5. ALL code examples SHALL come from the Source_Repo implementation (not invented examples)

### Requirement 4: RAG Pipeline Content

**User Story:** As a reader, I want to understand the complete RAG pipeline from ingestion to answer generation, so that I can build similar systems.

#### Acceptance Criteria

1. THE ingest page SHALL document the full flow: RSS fetch, HTML stripping, embedding, PutVectors, with trigger sources (EventBridge, API, bootstrap)
2. THE query page SHALL document: question embedding, QueryVectors, document loading, reranking, context building, LLM generation
3. THE embeddings page SHALL explain model choice (Titan V2), document preparation, truncation, and single-chunk rationale
4. THE scoring page SHALL explain the 0.8 similarity + 0.2 recency formula with examples
5. ALL pipeline documentation SHALL reference actual code from the rag/ Python library

### Requirement 5: Deployment Content

**User Story:** As a reader, I want step-by-step deployment instructions, so that I can run the demo myself.

#### Acceptance Criteria

1. THE prerequisites pages SHALL list all required tools, AWS permissions, and Bedrock model access steps
2. THE terraform apply page SHALL show configure, init, apply commands and explain what happens during deployment
3. THE Cognito users page SHALL show both auto-created admin and manual user creation with CLI commands
4. THE web UI page SHALL explain config injection, Amplify deployment, and redeployment commands
5. THE teardown page SHALL document terraform destroy and confirm all resources are removed

### Requirement 6: MDX and Component Standards

**User Story:** As a maintainer, I want consistent page formatting and component usage, so that the site is maintainable.

#### Acceptance Criteria

1. ALL Content_Pages SHALL use HTML tables (never markdown pipe tables) when custom components are imported
2. ALL Content_Pages SHALL use Aside components for notes, tips, cautions, and warnings
3. ALL Content_Pages SHALL use Tooltip on first occurrence of a glossary term per section
4. ALL code blocks SHALL specify language (hcl, python, bash, json) and use title attribute for filenames
5. ALL Content_Pages SHALL leave blank lines after closing tags before next content

### Requirement 7: Publishing Workflow

**User Story:** As a maintainer, I want a clear draft-to-publish workflow, so that incomplete pages don't break production.

#### Acceptance Criteria

1. THE overview, prerequisites, and s3-vectors section pages SHALL be published (no draft:true)
2. THE rag-pipeline, deployment, teardown, troubleshooting, and reference pages SHALL start as drafts
3. WHEN a Draft_Page is ready to publish, THE maintainer SHALL remove draft:true AND add the slug to the sidebar in astro.config.mjs
4. THE sidebar in astro.config.mjs SHALL only reference Published_Pages (drafts break the build)
