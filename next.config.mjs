/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "development"
        ? false
        : {
            exclude: ["error"],
          },
  },
};

export default nextConfig;
