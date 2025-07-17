import type { RequestHandler } from "../$types";
import usageData from "$src/mock/usage.json";
import { json } from "@sveltejs/kit";

import type { UsageData } from "$lib/types/usage";

export const GET: RequestHandler = async () => {
  // At the moment we are mocking data reading a JSON file,
  // but we could make a real API call this way
  // const response = await fetch('https://backend-endpoint/resources/dashboard');
  // const data = await response.json();

  await new Promise((resolve) => setTimeout(resolve, 1500));
  return json(usageData as UsageData);
};
