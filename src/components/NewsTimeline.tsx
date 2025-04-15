import { IconMicrophone, IconTrophy, IconDeviceGamepad2, IconCalendarEvent } from "@tabler/icons-react";

interface TimelineItem {
  id: string;
  timestamp: string;
  icon: "trophy" | "microphone" | "gamepad" | "event";
  content: string;
}

const mockNews: TimelineItem[] = [
  {
    id: "update-001",
    timestamp: "20 hours ago",
    icon: "trophy",
    content: 'GM Ju Wenjun won her fourth game in a row with her victory over GM Tan Zhongyi in Game 8 of the Women\'s World Championship! Now she only needs to draw one of the remaining four games to become a five-time World Champion.'
  },
  {
    id: "update-002",
    timestamp: "34 hours ago",
    icon: "microphone",
    content: 'Join us now on YouTube or Twitch with our hosts WIM Jesse February & GM Toms Kantans, and our guest WIM Silvia Raluca Sgircea for Game 8 of the FIDE Women\'s World Chess Championship 2025!'
  },
  {
    id: "update-003",
    timestamp: "41 hours ago",
    icon: "gamepad",
    content: '5-2 for GM Ju Wenjun after Game 7 of the Women\'s World Championship! She is now only 1.5 points away from defending her title against challenger GM Tan Zhongyi.'
  },
  {
    id: "update-004",
    timestamp: "2 days ago",
    icon: "event",
    content: 'Streamers and communities, get ready for the next Streamers Battles on 14 April at 15:00 UTC'
  }
];

const getIcon = (type: TimelineItem["icon"]) => {
  switch (type) {
    case "trophy":
      return <IconTrophy className="h-4 w-4 text-yellow-500" />;
    case "microphone":
      return <IconMicrophone className="h-4 w-4 text-blue-500" />;
    case "gamepad":
      return <IconDeviceGamepad2 className="h-4 w-4 text-green-500" />;
    case "event":
      return <IconCalendarEvent className="h-4 w-4 text-purple-500" />;
  }
};

export const NewsTimeline = () => {
  return (
    <div className="relative flex flex-col space-y-6 px-4">
      {/* Timeline line */}
      <div className="absolute left-[19.5px] top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-700" />

      {mockNews.map((item) => (
        <div key={item.id} className="flex gap-4 items-start">
          {/* Icon circle */}
          <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-neutral-900 shadow-sm ring-1 ring-neutral-200 dark:ring-neutral-700">
            {getIcon(item.icon)}
          </div>

          {/* Content */}
          <div className="flex-1 pt-0.5">
            <div className="text-xs text-neutral-500 dark:text-neutral-400">
              {item.timestamp}
            </div>
            <div className="mt-1 text-sm">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
