<div align="center">
  <h1>SkinSense — Your Skin. Your Science.</h1>
  <p><strong>AI-powered skincare routine generator.</strong><br/>
  Personalized routines, ingredient analysis, and real-time skin insights using computer vision & ML.</p>

  <a href="https://skinsense-landing.vercel.app" target="_blank">
    🔗 Live Demo
  </a>
  ·
  <a href="#-features">Features</a>
  ·
  <a href="#-tech-stack">Tech Stack</a>
  ·
  <a href="#%EF%B8%8F-setup--installation">Setup</a>
</div>

---

## Overview

SkinSense is an AI-powered skincare recommendation engine that analyzes your skin, builds personalized AM/PM routines, evaluates ingredients, and tracks progress over time.

This repo contains the **SkinSense Landing Page**, designed to collect waitlist signups and showcase the product vision.

The live site is deployed on **Vercel** with a backend API route storing waitlist entries in **Firebase Firestore**.

---

## Features

### AI-Powered Skincare Engine (coming soon)
- Computer-vision skin scan  
- Ingredient breakdowns  
- Personalized routines  
- AM/PM flow recommendations  
- Environmental skin score (UV, humidity, pollution)  
- Long-term skin tracking

### Landing Page Features (this repo)
- Fully responsive, pastel-themed UI (brand identity matched)
- Hero section + product mockups
- How It Works flow
- Features grid + Pricing tiers
- Before/After results gallery
- Launch promo video section
- **Waitlist signup system connected to Firebase Firestore**
- Gradient cards, shadows, glassmorphism UI
- Deployed to Vercel

---

## Tech Stack

### Frontend
- **Next.js (App Router)**
- **React**
- **TailwindCSS**

### Backend
- **Next.js API Routes**
- **Firebase Firestore**

### Deployment
- **Vercel**

---

## Firebase Waitlist Integration

Each waitlist entry saved in Firestore includes:

```json
{
  "email": "example@gmail.com",
  "createdAt": <server timestamp>,
  "source": "landing-page"
}

