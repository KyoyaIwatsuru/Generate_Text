import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const apiUrl = 'http://backend:8000/generate';
    const apiRes = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: body.prompt }),
    });
    const apiData = await apiRes.json();
    return NextResponse.json({ message: apiData.message });
  } catch (error) {
    return NextResponse.json(error);
  }
}
