export const REQUIRED_SLUGS = [
  "index",
  "overview",
  "prerequisites",
  "prerequisites/bedrock-access",
  "s3-vectors",
  "s3-vectors/terraform-resources",
  "s3-vectors/vector-operations",
  "s3-vectors/iam-permissions",
  "rag-pipeline",
  "rag-pipeline/ingest",
  "rag-pipeline/query",
  "rag-pipeline/embeddings",
  "rag-pipeline/scoring",
  "deployment",
  "deployment/terraform-apply",
  "deployment/cognito-users",
  "deployment/web-ui",
  "teardown",
  "troubleshooting",
  "troubleshooting/bedrock-errors",
  "troubleshooting/common-issues",
  "reference",
] as const;

export const REQUIRED_IMAGES = [
  "architecture-layers.png",
  "ingestion-pipeline.png",
  "query-pipeline.png",
  "request-flow.png",
  "request-lifecycle.png",
  "retrieval-pipeline.png",
  "s3-vectors-api-operations.png",
  "s3-vectors-comparison.png",
  "s3-vectors-core-concepts.png",
] as const;

export const REQUIRED_PUBLIC_FILES = ["og-image.png"] as const;
