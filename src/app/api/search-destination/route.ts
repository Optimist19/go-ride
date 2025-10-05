import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";



// const BASE_URL = "https://api.mapbox.com/search/searchbox/v1/suggest";

const BASE_URL = "https://api.mapbox.com/search/geocode/v6/forward";

export async function GET(request: NextRequest) {
  const newToken = uuidv4();
 

  const { searchParams } = new URL(request.url);
  const searchText = searchParams.get("q");

  const res = await fetch(
    `${BASE_URL}?q=${searchText}&language=en&limit=6&session_token=${newToken}&place=nigeria&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`
      }
    }
  );
  const searchResult = await res.json();
  return NextResponse.json({ data: searchResult });
}
