// app/api/get-token/route.js
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await axios.get("http://localhost/harsh"); // Ensure the correct file
        const { token } = response.data;

        return NextResponse.json({ token }, { status: 200 });
    } catch (error) {
        console.error("Error fetching token:", error);
        return NextResponse.json({ error: "Failed to fetch token" }, { status: 500 });
    }
}
