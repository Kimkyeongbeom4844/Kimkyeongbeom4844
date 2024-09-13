import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kyeongbeom",
    short_name: "Kyeongbeom",
    description:
      "Noti**의 메인 디자인에 영감을 받아 비슷하게 만든 Kyeongbeom의 포트폴리오",
    start_url: "/",
    display: "standalone",
    theme_color: "#000000",
    background_color: "#FFFFFF",
    icons: [
      {
        src: "/android-icon-36x36.png",
        sizes: "36x36",
        type: "image/png",
      },
      {
        src: "/android-icon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/android-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "/android-icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/android-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
