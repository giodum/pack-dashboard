import type { RequestHandler } from "./$types";
import dashboardData from "$src/mock/dashboard.json";
import { json } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  // Ath the moment we are mocking data reading a JSON file,
  // but we could make a real API call this way
  // const response = await fetch('https://backend-endpoint/resources/dashboard');
  // const data = await response.json();

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return json(dashboardData);
};
