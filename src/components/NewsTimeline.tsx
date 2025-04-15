import { IconMicrophone, IconTrophy, IconDeviceGamepad2, IconCalendarEvent } from "@tabler/icons-react";

interface TimelineItem {
  id: string;
  timestamp: string;
  icon: "trophy" | "microphone" | "gamepad" | "event";
  content: string;
}

const mockNews: TimelineItem[] = [
  // Original entries

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
  },
  // Additional entries
  {
    id: "update-005",
    timestamp: "3 days ago",
    icon: "trophy",
    content: 'GM Magnus Carlsen wins the Champions Chess Tour Masters with a stunning victory in the final round!'
  },
  {
    id: "update-006",
    timestamp: "4 days ago",
    icon: "microphone",
    content: 'Special chess commentary session with GM Hikaru Nakamura and GM Levy Rozman on Twitch'
  },
  {
    id: "update-007",
    timestamp: "5 days ago",
    icon: "gamepad",
    content: 'Exciting matches from the World Rapid Chess Championship - follow live on our platform!'
  },
  {
    id: "update-008",
    timestamp: "6 days ago",
    icon: "event",
    content: 'Registration now open for the Spring Classical Tournament - spots filling up fast!'
  },
  {
    id: "update-009",
    timestamp: "1 week ago",
    icon: "trophy",
    content: 'IM Anna Smith achieves her final GM norm at the European Individual Championship'
  },
  {
    id: "update-010",
    timestamp: "8 days ago",
    icon: "microphone",
    content: 'Chess.com launches new educational series with GM Benjamin Finegold'
  },
  {
    id: "update-011",
    timestamp: "9 days ago",
    icon: "gamepad",
    content: 'Thrilling matches from Round 5 of the Candidates Tournament - multiple decisive games!'
  },
  {
    id: "update-012",
    timestamp: "10 days ago",
    icon: "event",
    content: 'Mark your calendars: International Chess Day celebrations announced for July 20th'
  },
  {
    id: "update-013",
    timestamp: "11 days ago",
    icon: "trophy",
    content: 'Young prodigy CM David Chen wins U14 National Championship with perfect score'
  },
  {
    id: "update-014",
    timestamp: "12 days ago",
    icon: "microphone",
    content: 'GM Vishy Anand shares insights on modern chess preparation in exclusive interview'
  },
  {
    id: "update-015",
    timestamp: "2 weeks ago",
    icon: "gamepad",
    content: 'Exciting blitz tournament results from the Speed Chess Championship'
  },
  {
    id: "update-016",
    timestamp: "15 days ago",
    icon: "event",
    content: 'New chess club opening in downtown featuring weekly tournaments and lessons'
  },
  {
    id: "update-017",
    timestamp: "16 days ago",
    icon: "trophy",
    content: 'WGM Sarah Johnson breaks national record in marathon chess event'
  },
  {
    id: "update-018",
    timestamp: "17 days ago",
    icon: "microphone",
    content: 'Special podcast episode: The future of online chess with top platform developers'
  },
  {
    id: "update-019",
    timestamp: "18 days ago",
    icon: "gamepad",
    content: 'Highlights from the International Online Chess League - Week 12'
  },
  {
    id: "update-020",
    timestamp: "19 days ago",
    icon: "event",
    content: 'Summer chess camp registration opens - featuring instruction from top GMs'
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
    <div className="relative flex flex-col space-y-6 px-8 pt-4 h-full overflow-y-auto">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-neutral-200 dark:bg-neutral-700" />

      {mockNews.map((item) => (
        <div key={item.id} className="flex gap-4 items-start">
          {/* Icon circle */}
          <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-neutral-900 shadow-sm ring-1 ring-neutral-200 dark:ring-neutral-700" style={{ marginLeft: '-15px' }}>
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
