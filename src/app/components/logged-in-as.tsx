export default function LoggedInAs({ email }: { email: string }) {
  return (
    <div className="flex flex-col mr-2">
      <p className="flex justify-end text-[13px]">Logged in as:</p>
      <p className="flex justify-center">{email}</p>
    </div>
  );
}
