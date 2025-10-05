import { type NextRequest, NextResponse } from "next/server";

const BASE_URL = "https://api.mapbox.com/directions/v5/mapbox/driving";


export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const coordinates = searchParams.get("q");
  if (!coordinates) {
    return NextResponse.json({ error: "Missing coordinates" }, { status: 400 });
  }

  // Expected format: "startLong,startLat,endLong,endLat"
  // Convert to: "startLong,startLat;endLong,endLat"
  const coords = coordinates.split(",");
  if (coords.length !== 4) {
    return NextResponse.json(
      {
        error:
          "Invalid coordinates format. Expected: startLong,startLat,endLong,endLat"
      },
      { status: 400 }
    );
  }


  const waypoints = `${coords[0]},${coords[1]};${coords[2]},${coords[3]}`
  // const waypoints = `${3.344477},${6.540031};${3.410761},${6.456197}`;

  const url = `${BASE_URL}/${waypoints}?alternatives=true&geometries=geojson&language=en&overview=full&steps=true&access_token=${process.env.MAPBOX_ACCESS_TOKEN}`;


  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });

  const coordResult = await res.json();


  return NextResponse.json({ data: coordResult });
}
