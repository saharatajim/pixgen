import dns from "node:dns"
dns.setServers(["8.8.8.8","8.8.4.4"])


import Banner from "@/components/Banner";
import TopGeneration from "@/components/TopGeneration/TopGeneration";

export default function Home() {
  return (
    <div>
      <Banner/>
      <TopGeneration/>
    </div>
  );
}
