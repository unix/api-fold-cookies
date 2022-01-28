import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export default (req: NextRequest) => {
  const res = NextResponse.next();
  res.cookie("key1", "value");
  res.cookie("key2", "value");
  return res;
};
