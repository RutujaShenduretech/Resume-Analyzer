import { NextRequest, NextResponse } from "next/server";
import { ai } from "../../lib/gemini";

export async function POST(req: NextRequest) {
  try {
    const { section, text } = await req.json();

    const prompt = `
You are an ATS Resume Expert.

Improve the following ${section} section.

Rules:
- ATS Friendly
- Professional tone
- Use action verbs
- Add measurable achievements if possible
- Keep concise

Content:
${text}

Return only improved text.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return NextResponse.json({
      success: true,
      result: response.text,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "AI generation failed",
      },
      { status: 500 }
    );
  }
}