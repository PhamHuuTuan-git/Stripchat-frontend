"use client";

import GroupItem from "@/components/live/GroupItem";

export default function Home() {
  const chineseStreams = [
    { id: "1", username: "Lucky-cat88", thumbnail: "https://picsum.photos/seed/lucky/400/250", flag: "🇨🇳", isHD: true },
    { id: "2", username: "2Zoe", thumbnail: "https://picsum.photos/seed/zoe/400/250", flag: "🇨🇳", isHD: true },
    { id: "3", username: "xiao-Lin", thumbnail: "https://picsum.photos/seed/lin/400/250", flag: "🇨🇳", isHD: false, isMobile: true },
    { id: "4", username: "baobaoli", thumbnail: "https://picsum.photos/seed/baoli/400/250", flag: "🇨🇳", isHD: true },
    { id: "5", username: "yueyue2003", thumbnail: "https://picsum.photos/seed/yue/400/250", flag: "🇨🇳", isHD: true },
    { id: "6", username: "xiaogou-bb888", thumbnail: "https://picsum.photos/seed/xiaogou/400/250", flag: "🇨🇳", isHD: true },
    { id: "7", username: "shanghai-rose", thumbnail: "https://picsum.photos/seed/rose/400/250", flag: "🇨🇳", isHD: true },
    { id: "8", username: "beijing-dream", thumbnail: "https://picsum.photos/seed/beijing/400/250", flag: "🇨🇳", isHD: false, isMobile: true },
    { id: "9", username: "beijing-dream", thumbnail: "https://picsum.photos/seed/beijing/400/250", flag: "🇨🇳", isHD: false, isMobile: true },
    { id: "10", username: "beijing-dream", thumbnail: "https://picsum.photos/seed/beijing/400/250", flag: "🇨🇳", isHD: false, isMobile: true },
    { id: "11", username: "beijing-dream", thumbnail: "https://picsum.photos/seed/beijing/400/250", flag: "🇨🇳", isHD: false, isMobile: true },
    { id: "12", username: "beijing-dream", thumbnail: "https://picsum.photos/seed/beijing/400/250", flag: "🇨🇳", isHD: false, isMobile: true },
    { id: "13", username: "beijing-dream", thumbnail: "https://picsum.photos/seed/beijing/400/250", flag: "🇨🇳", isHD: false, isMobile: true },
  ];

  const topFreeStreams = [
    { id: "101", username: "South_Carolina", thumbnail: "https://picsum.photos/seed/sc/400/250", flag: "🇺🇸", isHD: true, rank: 1 },
    { id: "102", username: "Belle___", thumbnail: "https://picsum.photos/seed/belle/400/250", flag: "🇺🇸", isHD: true, rank: 2 },
    { id: "103", username: "bambi_lu", thumbnail: "https://picsum.photos/seed/bambi/400/250", flag: "🇬🇧", isHD: true, rank: 3 },
    { id: "104", username: "kykybaby4444", thumbnail: "https://picsum.photos/seed/kyky/400/250", flag: "🇺🇸", isHD: true, badge: "NEW" },
    { id: "105", username: "LittleMissEeve", thumbnail: "https://picsum.photos/seed/eeve/400/250", flag: "🇺🇸", isHD: false, isMobile: true },
    { id: "106", username: "Marry_Cordy", thumbnail: "https://picsum.photos/seed/marry/400/250", flag: "🇬🇧", isHD: true },
    { id: "107", username: "HotSummer99", thumbnail: "https://picsum.photos/seed/summer/400/250", flag: "🇺🇸", isHD: true },
    { id: "108", username: "VioletLake", thumbnail: "https://picsum.photos/seed/violet/400/250", flag: "🇬🇧", isHD: true },
  ];

  return (
    <main className="container mx-auto px-4 lg:px-8 py-8 animate-in fade-in duration-700">

      <GroupItem
        title="Chinese Sex Cams"
        flag="🇨🇳"
        streams={chineseStreams}
        seeAllLink="/chinese"
      />

      <GroupItem
        title="Top Free Live Sex Cams"
        streams={topFreeStreams}
        seeAllLink="/top-free"
      />

      <GroupItem
        title="New Models"
        streams={topFreeStreams.map(s => ({ ...s, id: s.id + "_new", badge: "NEW", rank: undefined }))}
        seeAllLink="/new"
      />
    </main>
  );
}
