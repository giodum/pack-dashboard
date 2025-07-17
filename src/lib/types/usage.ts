export type User = {
  name: string;
  role: string;
  photo: string;
};

export type UsageEntry = {
  user: User;
  accessedContent: string;
  openedOn: string;
  closedOn: string;
  provider: string;
};

export type UsageData = UsageEntry[];
