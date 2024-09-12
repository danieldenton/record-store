export default function LoggedInAs({ firstName }: { firstName: string }) {
  return (
    <div className="flex flex-col mr-2">
      <p className="flex justify-end text-[13px]">Logged in as:</p>
      <p className="flex justify-center">{firstName}</p>
    </div>
  );
}
