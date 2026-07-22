# 


# CoDEsk
## Product Requirement Document (PRD) 

#  Project Overview

| Project Name | CoDEsk |
| :---- | :---- |
| Project Lead | [Kanhaiya Tyagi](mailto:kanhaiya.tyagi.2006@gmail.com) |
| Creation Date | 16 Apr 2026 |
| Document Version | 1.0 |

# 

# Abstract

CoDEsk is a developer tool that provides AI-powered code review in a clean, minimal interface. A developer pastes a code snippet, selects the language, and receives structured feedback — covering issues, suggestions, and improvements — powered by an LLM. All review sessions are saved so the developer can revisit and track their past reviews.

# Vision

A focused, distraction-free space where developers get instant and meaningful feedback on their code — without leaving the browser.

# Goals

* Goal 1: Complete a working full-stack MVP within 3 weeks  
* Goal 2: Integrate AI-powered code review via Claude/OpenAI API with structured, readable output  
* Goal 3: Build a clean session history so past reviews are never lost  
* Goal 4: Deploy the app publicly so it's accessible via a live link on the resume

# 

# Scope

## In Scope (V1)

* Code input with syntax highlighting  
* Language selector (JavaScript, Python, C, Java, HTML/CSS)  
* AI review output — structured into Issues, Suggestions, Summary  
* Save each review session to database  
* View past sessions (history page)  
* Basic error handling and loading states

## Explicitly Out of Scope (V1)

* User authentication / login  
* File upload or file system access  
* Integrated terminal  
* Team collaboration  
* Custom themes  
* Mobile responsiveness

# 

# Core Features

## 

## 1\. Code Input Panel

A clean textarea with syntax highlighting where the user pastes their code snippet. Includes a language dropdown and a "Review" button.

| Field | Detail |
| :---: | :---: |
| Input type | Paste / type manually |
| Language support | JS, Python, C, Java, HTML/CSS |
| Priority | High |

## 

## 2\. AI Review Output

After submission, the AI response is displayed in a structured, readable format — not a wall of text.

| Section | Description |
| ----- | ----- |
| Summary | One paragraph overall assessment |
| Issues | Bugs or errors found |
| Suggestions | Improvements and best practices |
| Priority | High |

## 

## 3\. Session History

Every review is saved to the database and accessible from a history panel or page.

| Field | Detail |
| ----- | ----- |
| Stored data | Code snippet, language, AI response, timestamp |
| View | List of past sessions, click to expand |
| Priority | High |

# Tech Stack

| Layer | Technology |
| ----- | ----- |
| Frontend | React, React Query, react-syntax-highlighter |
| Backend | Node.js, Express, Prisma |
| Database | PostgreSQL |
| AI | Claude API / OpenAI API |
| Deployment | Vercel (frontend), Render (backend) |

# 

# Design Principles

* Minimal UI — two panels, input on left, output on right  
* No unnecessary navigation or clutter  
* Fast feedback — loading state shown immediately on submission  
* Readable output — AI response rendered with clear sections, not raw text

# What's Intentionally Simple

This is a V1 personal project. The goal is a fully working, deployed, well-structured codebase — not feature completeness. Every decision prioritizes finishing over expanding.
