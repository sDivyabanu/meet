import CreateMeeting from "@/components/CreateMeeting";
import JoinMeeting from "@/components/JoinMeeting";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F9FC] flex flex-col items-center justify-center gap-10 px-5">
  <h1 className="text-6xl font-bold text-[#5B5FC7]">
    Meet
  </h1>

  <CreateMeeting />

  <JoinMeeting />
</main>
  );
}