import { NextResponse } from "next/server";
import { db } from "@/db/db";
import { resumes } from "@/db/schema";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await db.insert(resumes).values({
      fullName: body.fullName,
      email: body.email,
      phone: body.phone,
      summary: body.summary,
      skills: body.skills,
      education: body.education,
      experience: body.experience,
    });

    return NextResponse.json({
      success: true,
      message: "Resume saved successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}