import { OpenPanel } from "@openpanel/sdk";

export const OpenPanelTrack = new OpenPanel({
  clientId: process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID ?? "",
  // mostly for backend and apps that can't rely on CORS
  clientSecret: process.env.OPENPANEL_SECRET_KEY ?? "",
});
