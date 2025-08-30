import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { readFile } from 'fs/promises';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const videoUrl = searchParams.get('url');
    
    if (!videoUrl) {
      return NextResponse.json({ error: 'Video URL is required' }, { status: 400 });
    }

    // Security: Only allow videos from the videos directory
    const videoPath = videoUrl.startsWith('/') ? videoUrl.slice(1) : videoUrl;
    const fullPath = path.join(process.cwd(), 'videos', videoPath);

    // Check if the file exists and read it
    try {
      const videoBuffer = await readFile(fullPath);
      
      // Determine content type based on file extension
      const ext = path.extname(videoPath).toLowerCase();
      let contentType = 'application/octet-stream';
      
      if (ext === '.mp4') {
        contentType = 'video/mp4';
      } else if (ext === '.webm') {
        contentType = 'video/webm';
      } else if (ext === '.ogg') {
        contentType = 'video/ogg';
      }

      return new NextResponse(videoBuffer, {
        headers: {
          'Content-Type': contentType,
          'Cache-Control': 'public, max-age=31536000',
        },
      });
    } catch (fileError) {
      return NextResponse.json({ error: 'Video not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Video API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}