import { ChatComponent } from '@/app/components/ChatComponent';

export default function Page() {
  return (
    <main>
      <h1 className='text-2xl my-[5%]'>Chat with OpenAI GPT-4</h1>
      <ChatComponent />
    </main>
  );
}