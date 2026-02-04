import { QrCode, Share2, UserPlus } from "lucide-react";

interface ProfileHeaderProps {
  name: string;
  handle: string;
  bio: string;
}

export function ProfileHeader({ name, handle, bio }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col gap-6 rounded-3xl border border-current/10 bg-white/80 p-6 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-4">
        <div className="h-20 w-20 rounded-full bg-gradient-to-br from-black via-slate-700 to-slate-400" />
        <div>
          <h1 className="text-3xl font-semibold">{name}</h1>
          <p className="text-sm text-current/60">@{handle}</p>
          <p className="mt-3 max-w-xl text-sm text-current/70">{bio}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <button className="flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">
          <UserPlus size={16} />
          Follow
        </button>
        <button className="flex items-center gap-2 rounded-full border border-current/20 px-4 py-2 text-sm font-semibold">
          Contact
        </button>
        <button className="flex items-center gap-2 rounded-full border border-current/20 px-4 py-2 text-sm font-semibold">
          <Share2 size={16} />
          Share
        </button>
        <button className="flex items-center gap-2 rounded-full border border-current/20 px-4 py-2 text-sm font-semibold">
          <QrCode size={16} />
          QR Code
        </button>
      </div>
    </header>
  );
}
