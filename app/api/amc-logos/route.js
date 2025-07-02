import { ConnectDB } from "@/lib/db/ConnectDB";
import AmcsLogoModel from "@/lib/models/AmcsLogos";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
  await ConnectDB();
  try {
    const { categoryID } = await req.json();

    // Fetch source data
    const response = await axios.get("https://redvisionweb.com/api/amc-logo");
    const sourceData = response.data;

    // Fetch local data
    const localData = await AmcsLogoModel.find({});
    const localIds = localData.map(item => item._id.toString());
    const sourceIds = sourceData.map(item => item._id);

    // DELETE: Remove stale entries
    const idsToDelete = localIds.filter(id => !sourceIds.includes(id));
    if (idsToDelete.length > 0) {
      await AmcsLogoModel.deleteMany({ _id: { $in: idsToDelete } });
    }

    // UPSERT: Perform in parallel
    await Promise.all(
      sourceData.map(item =>
        AmcsLogoModel.findByIdAndUpdate(
          item._id,
          {
            logo: item.logo,
            logoname: item.logoname,
            logourl: item.logourl,
            logocategory: item.logocategory,
            status: item.status,
          },
          { upsert: true, new: true, setDefaultsOnInsert: true }
        )
      )
    );

    // Return filtered result
    const filteredData = await AmcsLogoModel.find({ logocategory: categoryID });

    return NextResponse.json(
      { message: "Data uploaded successfully", data: filteredData },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message || error }, { status: 500 });
  }
}
