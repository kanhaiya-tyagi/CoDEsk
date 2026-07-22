-- CreateEnum
CREATE TYPE "Language" AS ENUM ('javascript', 'python', 'c', 'java', 'html_css');

-- CreateTable
CREATE TABLE "Session" (
    "sessionId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "sessionName" TEXT NOT NULL DEFAULT 'Untitled Session',
    "language" "Language" NOT NULL,
    "codeInput" TEXT NOT NULL,
    "aiSummary" TEXT,
    "aiIssues" TEXT,
    "aiSuggestions" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("sessionId")
);
