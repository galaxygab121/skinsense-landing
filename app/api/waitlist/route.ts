import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function POST(request: Request) {
  const body = await request.json();
  const email = body?.email as string | undefined;

  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { ok: false, error: "Invalid email" },
      { status: 400 }
    );
  }

  try {
    await addDoc(collection(db, "waitlist"), {
      email,
      createdAt: serverTimestamp(),
      source: "landing-page",
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Firestore error in /api/waitlist:", error);
    return NextResponse.json(
      { ok: false, error: "Database error" },
      { status: 500 }
    );
  }
}

