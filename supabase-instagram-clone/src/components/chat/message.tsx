'use client';

export default function Message({
  isFromMe,
  message,
}: {
  isFromMe: boolean;
  message: string;
}) {
  return (
    <div
      className={`w-fit max-w-72 rounded-md p-2 ${isFromMe ? 'self-end bg-light-blue-600 text-white' : 'self-start bg-gray-100 text-black'}`}
    >
      <p>{message}</p>
    </div>
  );
}
